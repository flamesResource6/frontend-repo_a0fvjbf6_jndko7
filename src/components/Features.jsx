import { Shield, CreditCard, Zap, Sparkles } from 'lucide-react'

const items = [
  { icon: Shield, title: 'Bank-grade security', desc: 'End-to-end encryption and strict compliance.' },
  { icon: CreditCard, title: 'Global payments', desc: 'Accept cards and wallets in 135+ currencies.' },
  { icon: Zap, title: 'Lightning fast', desc: 'Optimized APIs and webhooks with 99.99% uptime.' },
  { icon: Sparkles, title: 'Beautiful UX', desc: 'Glassmorphic aesthetic with 3D interactions.' },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Everything you need</h2>
          <p className="mt-3 text-slate-600 max-w-2xl mx-auto">Built-in authentication, pricing, contact, and a blog so you can ship your SaaS in hours, not weeks.</p>
        </div>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
              <Icon className="w-6 h-6 text-slate-900" />
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
