"use client";

import { useEffect, useRef, useState } from "react";
import { SERVICES, SERVICE_COLORS, SERVICE_LEGEND, type ServiceNode } from "../../lib/data/services";
import { SectionHeading } from "../../components/ui/SectionHeading";

// Edges express real platform relationships (web → platform libs, orchestrators → core, etc.)
const EDGES: [string, string][] = [
  ["insurance-web", "insurance-orchestrator"],
  ["insurance-web", "design-system"],
  ["insurance-web", "commons-sdk"],
  ["insurance-web", "analytics-sdk"],
  ["loan-web", "loan-orchestrator"],
  ["loan-web", "design-system"],
  ["loan-web", "strapi-cms"],
  ["loan-web", "analytics-sdk"],
  ["investments-web", "design-system"],
  ["investments-web", "strapi-cms"],
  ["investments-web", "analytics-sdk"],
  ["tracks-web", "design-system"],
  ["tracks-web", "analytics-sdk"],
  ["digimetal-web", "digimetal-orchestrator"],
  ["digimetal-web", "design-system"],
  ["digimetal-web", "analytics-sdk"],
  ["cards-web", "design-system"],
  ["insurance-orchestrator", "orchestration-core"],
  ["loan-orchestrator", "orchestration-core"],
  ["digimetal-orchestrator", "orchestration-core"],
  ["insurance-orchestrator", "kafka"],
  ["loan-orchestrator", "kafka"],
  ["digimetal-orchestrator", "kafka"],
  ["commons-sdk", "design-system"],
  // Infra — orchestrators run in Docker Compose against Mongo / Kafka / Redis
  ["docker", "insurance-orchestrator"],
  ["docker", "loan-orchestrator"],
  ["docker", "digimetal-orchestrator"],
  ["docker", "mongodb"],
  ["docker", "kafka"],
  ["docker", "redis"],
  ["insurance-orchestrator", "mongodb"],
  ["loan-orchestrator", "mongodb"],
  ["digimetal-orchestrator", "mongodb"],
  ["orchestration-core", "mongodb"],
  ["commons-sdk", "redis"],
];

type Sim = { id: string; x: number; y: number; vx: number; vy: number; r: number };

export function MicroserviceUniverse() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<ServiceNode | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let W = 0;
    let H = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const nodes: Sim[] = SERVICES.map((s, i) => ({
      id: s.id,
      x: Math.cos((i / SERVICES.length) * Math.PI * 2) * 160,
      y: Math.sin((i / SERVICES.length) * Math.PI * 2) * 140,
      vx: 0,
      vy: 0,
      r: s.id === "docker" ? 12 : s.group === "platform" || s.group === "orchestrator" ? 9 : s.group === "infra" ? 8 : 7,
    }));
    const byId = new Map(nodes.map((n) => [n.id, n]));
    const meta = new Map(SERVICES.map((s) => [s.id, s]));
    let hoverId: string | null = null;
    const mouse = { x: -9999, y: -9999 };

    const resize = () => {
      const rect = wrap.getBoundingClientRect();
      W = rect.width;
      H = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const step = () => {
      const cx = W / 2;
      const cy = H / 2;

      // forces
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        // gravity to center
        a.vx += (cx - (cx + a.x)) * 0.0004;
        a.vy += (cy - (cy + a.y)) * 0.0004;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy || 0.01;
          const f = 900 / d2;
          const d = Math.sqrt(d2);
          const ux = dx / d;
          const uy = dy / d;
          a.vx += ux * f * 0.02;
          a.vy += uy * f * 0.02;
          b.vx -= ux * f * 0.02;
          b.vy -= uy * f * 0.02;
        }
      }
      // link springs
      for (const [s, t] of EDGES) {
        const a = byId.get(s);
        const b = byId.get(t);
        if (!a || !b) continue;
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const d = Math.sqrt(dx * dx + dy * dy) || 0.01;
        const target = 120;
        const f = (d - target) * 0.008;
        const ux = dx / d;
        const uy = dy / d;
        a.vx += ux * f;
        a.vy += uy * f;
        b.vx -= ux * f;
        b.vy -= uy * f;
      }

      for (const n of nodes) {
        n.vx *= 0.86;
        n.vy *= 0.86;
        if (!reduce) {
          n.x += n.vx;
          n.y += n.vy;
        }
      }

      // hover detection
      hoverId = null;
      let best = 22;
      for (const n of nodes) {
        const px = cx + n.x;
        const py = cy + n.y;
        const d = Math.hypot(px - mouse.x, py - mouse.y);
        if (d < best) {
          best = d;
          hoverId = n.id;
        }
      }

      // draw
      ctx.clearRect(0, 0, W, H);
      // edges
      ctx.lineWidth = 1;
      for (const [s, t] of EDGES) {
        const a = byId.get(s);
        const b = byId.get(t);
        if (!a || !b) continue;
        const hot = hoverId === s || hoverId === t;
        ctx.strokeStyle = hot ? "rgba(255,106,0,0.9)" : "rgba(17,17,17,0.15)";
        ctx.beginPath();
        ctx.moveTo(cx + a.x, cy + a.y);
        ctx.lineTo(cx + b.x, cy + b.y);
        ctx.stroke();
      }
      // nodes
      for (const n of nodes) {
        const m = meta.get(n.id)!;
        const px = cx + n.x;
        const py = cy + n.y;
        const hot = hoverId === n.id;
        ctx.beginPath();
        ctx.arc(px, py, hot ? n.r + 4 : n.r, 0, Math.PI * 2);
        ctx.fillStyle = SERVICE_COLORS[m.group];
        ctx.fill();
        if (hot) {
          ctx.lineWidth = 2;
          ctx.strokeStyle = "#111111";
          ctx.stroke();
        }
        // label
        ctx.fillStyle = "rgba(17,17,17,0.65)";
        ctx.font = "500 11px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(m.name, px, py + n.r + 14);
      }

      raf = requestAnimationFrame(step);
    };
    let raf = requestAnimationFrame(step);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      const node = hoverId ? meta.get(hoverId) ?? null : null;
      setActive(node);
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
      setActive(null);
    };
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="bg-charcoal py-24 text-offwhite md:py-36">
      <div className="container-x">
        <SectionHeading
          index="05"
          label="Enterprise Footprint"
          title="A universe of microservices."
          dark
        />
        <p className="mt-6 max-w-2xl font-inter text-offwhite/60">
          Every node is a real service on the ABCD platform. Hover to see what it does — and
          what I contributed. This is what enterprise-scale looks like.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div
            ref={wrapRef}
            className="relative h-[440px] w-full overflow-hidden rounded-3xl border border-offwhite/15 bg-offwhite md:h-[560px]"
          >
            <canvas ref={canvasRef} className="h-full w-full" />
            <div className="pointer-events-none absolute left-4 top-4 flex flex-wrap gap-3">
              {SERVICE_LEGEND.map((l) => (
                <span key={l.group} className="flex items-center gap-1.5 font-inter text-[11px] text-charcoal/70">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: SERVICE_COLORS[l.group] }} />
                  {l.label}
                </span>
              ))}
            </div>
          </div>

          {/* detail panel */}
          <div className="flex flex-col justify-center rounded-3xl border border-offwhite/15 p-8">
            {active ? (
              <div key={active.id}>
                <div
                  className="mb-4 inline-block rounded-full px-3 py-1 font-inter text-[11px] font-semibold uppercase tracking-widest"
                  style={{ backgroundColor: SERVICE_COLORS[active.group], color: active.group === "orchestrator" || active.group === "infra" ? "#FAF9F6" : "#111" }}
                >
                  {active.group}
                </div>
                <h3 className="font-display text-3xl font-bold">{active.name}</h3>
                <p className="mt-3 font-inter text-sm text-offwhite/70">{active.purpose}</p>
                <dl className="mt-6 space-y-3 font-inter text-sm">
                  <div>
                    <dt className="text-offwhite/40">Stack</dt>
                    <dd className="text-offwhite/90">{active.stack}</dd>
                  </div>
                  <div>
                    <dt className="text-offwhite/40">My contribution</dt>
                    <dd className="text-orange-light">{active.contribution}</dd>
                  </div>
                </dl>
              </div>
            ) : (
              <div className="text-center font-inter text-offwhite/40">
                <div className="mb-3 text-5xl">✦</div>
                Hover a node to explore the service.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
