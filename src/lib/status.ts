export async function getStatus(): Promise<string> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/status`, {
      cache: 'no-store' // Don't cache this request
    })
    const data = await response.json()
    return data.status || 'CLOSE'
  } catch (error) {
    console.error('Failed to fetch status:', error)
    return 'CLOSE' // Default to CLOSE if there's an error
  }
}
