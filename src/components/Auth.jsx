import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function sha256(str) {
  const encoder = new TextEncoder()
  const data = encoder.encode(str)
  return crypto.subtle.digest('SHA-256', data).then((hash) => {
    return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, '0')).join('')
  })
}

export default function Auth() {
  const [mode, setMode] = useState('signin')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Loading...')
    try {
      const password_hash = await sha256(password)
      const url = mode === 'signup' ? `${API}/api/auth/signup` : `${API}/api/auth/login`
      const body = mode === 'signup' ? { name, email, password_hash } : { email, password_hash }
      const res = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail || 'Error')
      setStatus(mode === 'signup' ? `Welcome, ${json.name}!` : `Welcome back, ${json.name}!`)
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="auth" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Authenticate</h2>
          <p className="mt-3 text-slate-600">Sign up to try the demo, or sign in if you already have an account.</p>
        </div>
        <form onSubmit={submit} className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="flex gap-2 mb-6">
            <button type="button" onClick={() => setMode('signin')} className={`px-3 py-1 rounded-md text-sm ${mode==='signin' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>Sign in</button>
            <button type="button" onClick={() => setMode('signup')} className={`px-3 py-1 rounded-md text-sm ${mode==='signup' ? 'bg-slate-900 text-white' : 'bg-slate-100'}`}>Sign up</button>
          </div>
          {mode === 'signup' && (
            <div className="mb-4">
              <label className="block text-sm text-slate-700 mb-1">Name</label>
              <input value={name} onChange={e=>setName(e.target.value)} required className="w-full border rounded-md px-3 py-2" placeholder="Jane Doe" />
            </div>
          )}
          <div className="mb-4">
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full border rounded-md px-3 py-2" placeholder="jane@acme.com" />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-slate-700 mb-1">Password</label>
            <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="w-full border rounded-md px-3 py-2" placeholder="••••••••" />
          </div>
          <button className="w-full px-4 py-2 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800">{mode==='signup' ? 'Create account' : 'Sign in'}</button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
