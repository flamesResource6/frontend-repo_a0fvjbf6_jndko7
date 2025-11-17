import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch(`${API}/api/blog`)
        const json = await res.json()
        setPosts(json.items || [])
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="blog" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">Latest from the blog</h2>
          <p className="mt-3 text-slate-600">News, changelogs, and guides.</p>
        </div>
        {loading ? (
          <p className="mt-8 text-center text-slate-600">Loading...</p>
        ) : (
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((p) => (
              <article key={p._id} className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition">
                {p.cover_image && (
                  <img src={p.cover_image} alt="" className="w-full h-40 object-cover rounded-lg mb-4" />
                )}
                <h3 className="font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600 line-clamp-3">{p.excerpt}</p>
                <a className="mt-4 inline-block text-slate-900 font-medium" href={`#/blog/${p.slug}`}>Read more →</a>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
