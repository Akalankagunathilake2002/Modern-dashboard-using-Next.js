// app/page.tsx
import Link from 'next/link';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f7efe8] via-[#fdfbf9] to-[#f3e7df] px-6 py-8 pt-6 lg:pt-10 lg:text-[1.03rem] 2xl:text-[1.06rem]">
      {/* Header */}
      <header className="mx-auto flex w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] items-center justify-between rounded-2xl bg-white/70 px-8 py-4 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-black/5">
            <span className="text-sm font-semibold text-gray-900">R</span>
          </div>
          <h1 className="text-2xl font-semibold tracking-wide text-gray-900">
            REBE <span className="text-[#9c6b4f]">Fashions</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="#collection"
            className="hidden sm:inline-flex rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-white/70"
          >
            Collection
          </Link>
          <Link
            href="/login"
            className="rounded-lg border border-[#9c6b4f] px-5 py-2 text-sm font-medium text-[#9c6b4f] transition hover:bg-[#9c6b4f] hover:text-white"
          >
            Log in
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="mx-auto mt-14 grid w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Left Content */}
        <div className="relative rounded-3xl bg-white/80 p-10 shadow-xl backdrop-blur-md">
          {/* Scaled “moving graphics” blobs (CSS-only, no client code) */}
          <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[#e7cfc1]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-[#dcc2b1]/40 blur-3xl" />

          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#f3e7df] px-4 py-1 text-xs font-medium text-[#7f553d]">
            New Season • Editorial Collection
          </div>

          <h2
            className={`${lusitana.className} text-4xl font-semibold leading-snug text-gray-900 md:text-5xl`}
          >
            Style that Speaks <br />
            <span className="text-[#9c6b4f]">Elegance</span>
          </h2>

          <p className="mt-6 max-w-2xl text-gray-600 leading-relaxed">
            REBE Fashions blends modern silhouettes with timeless beauty — designed
            for confidence, comfort, and subtle luxury.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="#collection"
              className="inline-flex items-center justify-center rounded-xl bg-[#9c6b4f] px-7 py-3 text-base font-medium text-white transition hover:bg-[#7f553d]"
            >
              Discover Collection
            </Link>

            <Link
              href="#gallery"
              className="inline-flex items-center justify-center rounded-xl border border-[#9c6b4f]/30 bg-white px-7 py-3 text-base font-medium text-[#7f553d] transition hover:bg-[#f7efe8]"
            >
              View Gallery
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-500">Handpicked</p>
              <p className="text-sm font-semibold text-gray-900">Looks</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-500">Neutral</p>
              <p className="text-sm font-semibold text-gray-900">Palette</p>
            </div>
            <div className="rounded-2xl bg-white px-4 py-3 text-center shadow-sm ring-1 ring-black/5">
              <p className="text-xs text-gray-500">Everyday</p>
              <p className="text-sm font-semibold text-gray-900">Elegance</p>
            </div>
          </div>
        </div>

        {/* Right Image + overlays */}
        <div className="relative flex justify-center">
          <div className="relative w-full overflow-hidden rounded-[2rem] shadow-2xl ring-1 ring-black/5">
            <Image
              src="/new03.webp"
              width={1400}
              height={1000}
              alt="REBE Fashions editorial look"
              className="h-[420px] w-full object-cover md:h-[520px] lg:h-[600px] 2xl:h-[680px]"
              priority
            />
          </div>

          {/* Overlay cards (graphics) */}
          <div className="absolute right-4 top-4 hidden w-[210px] rounded-2xl bg-white/85 p-3 shadow-lg backdrop-blur-md ring-1 ring-black/5 md:block">
            <div className="text-xs font-semibold text-gray-900">Palette</div>
            <div className="mt-1 text-xs text-gray-600">Warm Neutrals</div>
            <div className="mt-3 flex gap-1.5">
              <span className="h-3 w-6 rounded-full bg-[#3a2a22]" />
              <span className="h-3 w-6 rounded-full bg-[#7f553d]" />
              <span className="h-3 w-6 rounded-full bg-[#b08968]" />
              <span className="h-3 w-6 rounded-full bg-[#ddb892]" />
              <span className="h-3 w-6 rounded-full bg-[#f1e3d3]" />
            </div>
          </div>

          <div className="absolute bottom-4 left-4 hidden w-[230px] overflow-hidden rounded-2xl bg-white/85 shadow-lg backdrop-blur-md ring-1 ring-black/5 md:block">
            <div className="relative h-[110px] w-full">
              <Image
                src="/new01.jpg"
                alt="Featured look"
                fill
                className="object-cover"
                sizes="230px"
              />
            </div>
            <div className="p-3">
              <div className="text-[11px] text-gray-500">Featured</div>
              <div className="text-xs font-semibold text-gray-900">
                Soft Beige Layers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Statement */}
      <section className="mx-auto mt-16 w-full max-w-5xl text-center">
        <h3 className="text-2xl font-medium text-gray-900">
          Minimal · Modern · Meaningful
        </h3>
        <p className="mt-4 text-gray-600">
          Designed for those who value subtle luxury and refined aesthetics.
        </p>
      </section>

      {/* Collection */}
      <section
        id="collection"
        className="mx-auto mt-16 w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px]"
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Latest Collection</h4>
            <p className="mt-1 text-sm text-gray-600">
              Fresh looks curated for everyday elegance.
            </p>
          </div>

          <Link
            href="#gallery"
            className="rounded-lg border border-black/10 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur transition hover:bg-white"
          >
            View All
          </Link>
        </div>

        <div
          id="gallery"
          className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {/* new01 */}
          <div className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[280px] w-full">
              <Image
                src="/new01.jpg"
                alt="REBE Fashions look 01"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Look 01</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Warm Neutral Fit
              </p>
            </div>
          </div>

          {/* new02 */}
          <div className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[280px] w-full">
              <Image
                src="/new02.jpg"
                alt="REBE Fashions look 02"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Look 02</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Beige Palette Mood
              </p>
            </div>
          </div>

          {/* new03 */}
          <div className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[280px] w-full">
              <Image
                src="/new03.webp"
                alt="REBE Fashions look 03"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Look 03</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Editorial Elegance
              </p>
            </div>
          </div>

          {/* new04 */}
          <div className="group overflow-hidden rounded-3xl bg-white/80 shadow-lg ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-[280px] w-full">
              <Image
                src="/new04.jpg"
                alt="REBE Fashions look 04"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">Look 04</p>
              <p className="mt-1 text-sm font-semibold text-gray-900">
                Studio Minimal
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-black/5 bg-white/60 backdrop-blur">
        <div className="mx-auto grid w-full max-w-7xl 2xl:max-w-[1440px] 3xl:max-w-[1600px] grid-cols-1 gap-10 px-6 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold text-gray-900">
              REBE <span className="text-[#9c6b4f]">Fashions</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Minimal · Modern · Meaningful
            </p>
            <p className="mt-3 text-xs text-gray-500">
              © {year} REBE Fashions. All rights reserved.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Address</div>
            <p className="mt-2 text-sm text-gray-600 leading-relaxed">
              Keizersgracht 123 <br />
              1015 CJ Amsterdam <br />
              Nederland
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-gray-900">Contact</div>
            <p className="mt-2 text-sm text-gray-600">
              hello@rebefashions.nl <br />
              +31 6 1234 5678
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href="/login"
                className="rounded-lg bg-[#9c6b4f] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#7f553d]"
              >
                Partner Login
              </Link>
              <Link
                href="#collection"
                className="rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-[#f7efe8]"
              >
                View Collection
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
