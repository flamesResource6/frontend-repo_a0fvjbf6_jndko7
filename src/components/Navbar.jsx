import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/60 border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="font-semibold text-xl tracking-tight">FintechX</a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-700 hover:text-slate-900">
              {l.label}
            </a>
          ))}
          <a href="#auth" className="text-sm font-medium bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800 transition">Sign in</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-white/50 bg-white/80 backdrop-blur">
          <div className="px-4 py-4 space-y-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} className="block text-slate-800" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#auth" className="inline-block bg-slate-900 text-white px-4 py-2 rounded-md" onClick={() => setOpen(false)}>
              Sign in
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
