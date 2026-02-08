export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="px-6 pt-24 pb-20 md:pt-32 md:pb-28 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-stone-900">
          Formstone Labs
        </h1>
        <p className="mt-4 text-lg md:text-xl text-stone-500 max-w-xl">
          Building tools for healthcare data and consumer health.
        </p>
      </section>

      {/* About */}
      <section className="px-6 py-16 max-w-3xl mx-auto border-t border-stone-200">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-4">
          About
        </h2>
        <p className="text-stone-700 text-lg leading-relaxed max-w-2xl">
          Formstone Labs is a small software studio based in Connecticut. We
          build focused, useful products in healthcare data and consumer
          health&mdash;nothing more, nothing less.
        </p>
      </section>

      {/* Products */}
      <section className="px-6 py-16 max-w-3xl mx-auto border-t border-stone-200">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-8">
          Products
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-stone-200 bg-warm-50 p-6">
            <h3 className="text-lg font-semibold text-stone-800">
              Indicator Health
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              A platform for exploring and understanding healthcare data.
            </p>
          </div>
          <div className="rounded-lg border border-stone-200 bg-warm-50 p-6">
            <h3 className="text-lg font-semibold text-stone-800">
              Lunchbox League
            </h3>
            <p className="mt-2 text-stone-600 leading-relaxed">
              An app helping families navigate childhood food allergies.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 py-16 max-w-3xl mx-auto border-t border-stone-200">
        <h2 className="text-sm font-semibold uppercase tracking-widest text-stone-400 mb-4">
          Contact
        </h2>
        <p className="text-stone-700 text-lg">
          <a
            href="mailto:nate@formstonelabs.com"
            className="underline underline-offset-4 decoration-stone-300 hover:decoration-stone-500 transition-colors"
          >
            nate@formstonelabs.com
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 max-w-3xl mx-auto border-t border-stone-200">
        <p className="text-sm text-stone-400">
          &copy; 2026 Formstone Labs LLC
        </p>
      </footer>
    </main>
  );
}
