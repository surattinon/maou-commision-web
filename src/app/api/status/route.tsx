import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

const statusFilePath = path.join(process.cwd(), 'public', 'data', 'status.json')

async function ensureDir() {
  try {
    await fs.mkdir(path.join(process.cwd(), 'public', 'data'), { recursive: true })
  } catch (err) {
    // Directory already exists or other error
  }
}

// Initialize status file if it doesn't exist
async function initStatusFile() {
  try {
    await fs.access(statusFilePath)
  } catch {
    // File doesn't exist, create it
    await ensureDir()
    await fs.writeFile(statusFilePath, JSON.stringify({ status: 'CLOSE' }))
  }
}

export async function GET() {
  await initStatusFile()

  try {
    const data = await fs.readFile(statusFilePath, 'utf8')
    return NextResponse.json(JSON.parse(data))
  } catch (error) {
    return NextResponse.json({ error: 'Failed to read status' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  await initStatusFile()

  try {
    const { newStatus } = await request.json()

    // Validate status value
    if (newStatus !== 'OPEN' && newStatus !== 'CLOSE') {
      return NextResponse.json({ error: 'Invalid status value' }, { status: 400 })
    }

    await fs.writeFile(statusFilePath, JSON.stringify({ status: newStatus }))
    return NextResponse.json({ success: true, status: newStatus })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update status' }, { status: 500 })
  }
}
