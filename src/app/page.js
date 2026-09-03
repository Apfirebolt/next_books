import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16 md:pt-28 md:pb-24">
        {/* Ambient Gradient Blur */}
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold text-primary shadow-sm">
            ✨ Over 10,000+ Titles Curated For You
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-6xl md:text-7xl">
            Read smarter, <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              explore deeper.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base text-slate-600 sm:text-lg">
            Discover your next favorite author, track reading journeys, and dive into a wide range of genres crafted for curious minds.
          </p>

          {/* Call to Actions */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/books"
              className="w-full rounded-xl bg-gradient-to-r from-primary to-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-md shadow-primary/25 transition hover:opacity-95 active:scale-95 sm:w-auto"
            >
              Browse Catalog
            </Link>
            <Link
              href="/about"
              className="w-full rounded-xl border border-slate-200 bg-white px-8 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900 active:scale-95 sm:w-auto"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Feature Highlights Grid */}
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          
          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
              📖
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Vast Selection</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Access fiction, non-fiction, classic literature, and contemporary hits all in one place.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 text-xl text-secondary">
              ⚡
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Instant Access</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Start reading on any device instantly with bookmark sync and personalized layouts.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
              🎯
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">Curated For You</h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              Smart recommendations tailored to your personal tastes and reading history.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}