import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    try {
      const res = await fetch(`${API}/api/contact`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, email, message }) })
      const json = await res.json()
      if (!res.ok) throw new Error(json.detail || 'Error')
      setStatus('Thanks! We received your message.')
      setName(''); setEmail(''); setMessage('')
    } catch (err) {
      setStatus(err.message)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Contact us</h2>
          <p className="mt-3 text-slate-600">Tell us about your use-case. We typically respond within one business day.</p>
          <ul className="mt-6 space-y-2 text-slate-600 text-sm">
            <li>• Email: hello@fintechx.dev</li>
            <li>• Office: Remote-first, worldwide</li>
          </ul>
        </div>
        <form onSubmit={submit} className="rounded-2xl border bg-white p-6 shadow-sm w-full">
          <div className="mb-4">
            <label className="block text-sm text-slate-700 mb-1">Name</label>
            <input value={name} onChange={e=>setName(e.target.value)} required className="w-full border rounded-md px-3 py-2" placeholder="Jane Doe" />
          </div>
          <div className="mb-4">
            <label className="block text-sm text-slate-700 mb-1">Email</label>
            <input type="email" value={email} onChange={e=>setEmail(e.target.value)} required className="w-full border rounded-md px-3 py-2" placeholder="jane@acme.com" />
          </div>
          <div className="mb-6">
            <label className="block text-sm text-slate-700 mb-1">Message</label>
            <textarea value={message} onChange={e=>setMessage(e.target.value)} required className="w-full border rounded-md px-3 py-2 h-28" placeholder="How can we help?" />
          </div>
          <button className="w-full px-4 py-2 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800">Send</button>
          {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
        </form>
      </div>
    </section>
  )
}
