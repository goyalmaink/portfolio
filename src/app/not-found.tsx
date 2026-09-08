import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-charcoal px-6 text-center text-offwhite">
      <p className="font-inter text-sm font-semibold uppercase tracking-[0.3em] text-orange">
        404
      </p>
      <h1 className="mt-4 font-display text-6xl font-bold tracking-tightest md:text-9xl">
        Lost in the flow.
      </h1>
      <p className="mt-6 max-w-md font-inter text-offwhite/60">
        This page doesn&apos;t exist — like a step with no decision strategy.
      </p>
      <Link
        href="/"
        data-cursor="GO"
        className="mt-10 inline-flex items-center gap-3 rounded-full bg-orange px-7 py-4 font-inter text-sm font-semibold uppercase tracking-widest text-charcoal transition-colors hover:bg-offwhite"
      >
        Back home →
      </Link>
    </main>
  );
}
