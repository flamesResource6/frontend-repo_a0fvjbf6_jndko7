import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 via-white to-white pointer-events-none" />
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
        <div className="py-20">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/70 backdrop-blur border text-xs font-medium text-slate-700">Modern Fintech • Glassmorphic UI</span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
            Accept payments with style
          </h1>
          <p className="mt-4 text-slate-600 text-lg max-w-xl">
            A minimalist payments platform that blends 3D design with real performance.
            Launch faster with pricing, auth, a contact form, and a simple blog out of the box.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#pricing" className="px-5 py-3 rounded-md bg-slate-900 text-white font-medium hover:bg-slate-800 transition">View Pricing</a>
            <a href="#auth" className="px-5 py-3 rounded-md bg-white/70 backdrop-blur border font-medium text-slate-900 hover:bg-white transition">Try Demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}
