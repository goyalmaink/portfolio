import { SITE } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="bg-charcoal text-offwhite">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-inter text-sm text-offwhite/60">
          © {new Date().getFullYear()} {SITE.name}. Designed & built from scratch —
          Next.js, TypeScript, GSAP.
        </p>
        <div className="flex items-center gap-6 font-inter text-sm">
          <a href={SITE.github} target="_blank" rel="noopener noreferrer" data-cursor="GO" className="link-underline">
            GitHub
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="GO" className="link-underline">
            LinkedIn
          </a>
          <a href={`mailto:${SITE.email}`} data-cursor="GO" className="link-underline">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
