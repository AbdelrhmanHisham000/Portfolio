import Link from "next/link";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden  px-6 text-white">
    
      <section className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold sm:text-6xl">
          Hi, I’m <span className="text-blue-500">Abdelrhman</span>
        </h1>
        <p className="mt-4 text-lg text-slate-400 sm:text-xl">
          Front‑End Engineer who crafts snappy, accessible web experiences with
          Motion UI&nbsp;✨
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="projects"
            className="rounded-full bg-blue-600 px-6 py-3 font-medium shadow transition hover:bg-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/40"
          >
            See my work
          </Link>

          <Link
            href="/Abdelrhman Hisham (Front-End Resume).pdf"
            download
            className="rounded-full bg-slate-700 px-6 py-3 font-medium shadow transition hover:bg-slate-600 focus:outline-none focus:ring-4 focus:ring-slate-500/40"
          >
            Download CV
          </Link>
        </div>
      </section>

      <div className="pointer-events-none z-20 absolute inset-0 flex justify-center">
        <div className="aspect-square w-[800px] animate-pulse rounded-full bg-blue-700/20 blur-3xl" />
      </div>
    </main>
  );
}
