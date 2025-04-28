'use client'

import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

import { GridBackground } from '@/components/blocks/spotlight-new'
import { Spotlight } from '@/components/blocks/spotlight-new'

export default function StatusManagement() {
  const [password, setPassword] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [status, setStatus] = useState<'OPEN' | 'CLOSE'>('CLOSE')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD

    if (password === correctPassword) {
      setIsAuthenticated(true)
      // Fetch current status
      fetch('/[lang]/api/status')
        .then(res => res.json())
        .then(data => setStatus(data.status))
    } else {
      setError('Incorrect password')
    }
  }

  const updateStatus = async (newStatus: 'OPEN' | 'CLOSE') => {
    const response = await fetch('/[lang]/api/status', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newStatus }),
    })

    if (response.ok) {
      setStatus(newStatus)
      alert(`Status updated to ${newStatus}`)
      router.refresh() // Refresh the page to show the new status
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="h-screen w-full flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
        <div className="z-10 p-8 max-w-md w-full">
          <h1 className="text-2xl text-white mb-6">Admin Login</h1>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleLogin}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="w-full p-2 mb-4 bg-[#1f1f1f] text-white rounded"
            />
            <button
              type="submit"
              className="w-full bg-blue-400 text-white p-2 rounded hover:bg-blue-500"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="h-screen w-full flex items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <GridBackground />
      <Spotlight />
      <div className="z-10 p-8 max-w-md w-full">
        <h1 className="text-2xl text-white mb-6">Commission Status</h1>
        <div className="flex justify-between mb-8">
          <p className="text-white">Current Status: <span className={`ml-3 text-center font-bold ${status == 'OPEN' ? 'text-green-400 drop-shadow-[0px_0px_10px_rgba(87,227,137,1)]' : 'text-red-400 drop-shadow-[0px_0px_10px_rgba(255,0,123,1)]'}`}>{status}</span></p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => updateStatus('OPEN')}
            className={`p-4 text-white rounded ${status === 'OPEN' ? 'bg-green-700' : 'bg-green-500 hover:bg-green-600'}`}
            disabled={status === 'OPEN'}
          >
            OPEN
          </button>
          <button
            onClick={() => updateStatus('CLOSE')}
            className={`p-4 text-white rounded ${status === 'CLOSE' ? 'bg-red-700' : 'bg-red-500 hover:bg-red-600'}`}
            disabled={status === 'CLOSE'}
          >
            CLOSE
          </button>
        </div>
      </div>
    </div>
  )
}
