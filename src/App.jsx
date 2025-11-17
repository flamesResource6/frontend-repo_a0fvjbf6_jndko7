import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Auth from './components/Auth'
import Blog from './components/Blog'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
        <Auth />
        <Blog />
        <Contact />
      </main>
      <footer className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} FintechX. All rights reserved.</p>
          <div className="text-sm text-slate-600">Made with ❤️</div>
        </div>
      </footer>
    </div>
  )
}

export default App
