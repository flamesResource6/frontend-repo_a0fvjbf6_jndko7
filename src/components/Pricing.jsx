export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Simple pricing</h2>
          <p className="mt-3 text-slate-600">Start free. Scale when you’re ready.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[{
            name: 'Starter', price: '$0', features: ['1k requests/mo', 'Basic analytics', 'Email support'], cta: 'Get started'
          },{
            name: 'Growth', price: '$29', features: ['100k requests/mo', 'Team features', 'Priority support'], cta: 'Upgrade'
          },{
            name: 'Scale', price: '$99', features: ['Unlimited', 'SLA + SSO', 'Dedicated success'], cta: 'Contact sales'
          }].map((t) => (
            <div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition flex flex-col">
              <h3 className="font-semibold text-slate-900">{t.name}</h3>
              <div className="mt-2 text-4xl font-extrabold text-slate-900">{t.price}<span className="text-base font-medium text-slate-500">/mo</span></div>
              <ul className="mt-6 space-y-2 text-slate-600 text-sm">
                {t.features.map((f) => (<li key={f}>• {f}</li>))}
              </ul>
              <a href="#auth" className="mt-6 inline-block text-center w-full px-4 py-2 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition">{t.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
