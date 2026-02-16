function StatusBadge({ status }: { status: "LIVE" | "BUILDING" }) {
  const isLive = status === "LIVE";
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[11px] font-medium font-[family-name:var(--font-sans)] tracking-widest uppercase ${
        isLive
          ? "bg-green-50 text-green-600 ring-1 ring-green-200"
          : "bg-amber-50/80 text-amber-700/90 ring-1 ring-amber-200/60"
      }`}
    >
      {status}
    </span>
  );
}

// F-shaped logo: 3x3 grid, filled squares form an F
const fGrid = [
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 0],
];
const fColors = [
  "#C4A67D",
  "#8B8178",
  "#A69882",
  "#9B9B82",
  "#B8A88A",
  "#7A7268",
];

function FLogo({ size = 32 }: { size?: number }) {
  const gap = 2;
  const cellSize = (size - gap * 2) / 3;
  return (
    <div
      className="shrink-0"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(3, ${cellSize}px)`,
        gridTemplateRows: `repeat(3, ${cellSize}px)`,
        gap: `${gap}px`,
        width: size,
        height: size,
      }}
    >
      {fGrid.flat().map((filled, i) => (
        <div
          key={i}
          className="rounded-[2px]"
          style={{
            backgroundColor: filled
              ? fColors[i % fColors.length]
              : "transparent",
          }}
        />
      ))}
    </div>
  );
}

function CardPattern({
  colors,
  variant = 0,
}: {
  colors: string[];
  variant?: number;
}) {
  const patterns = [
    [
      [1, 0, 1],
      [0, 1, 0],
      [1, 0, 1],
    ],
    [
      [1, 0, 0],
      [1, 0, 0],
      [1, 1, 1],
    ],
  ];
  const grid = patterns[variant % patterns.length];
  const cellSize = 12;
  const gap = 2;
  return (
    <div
      className="shrink-0 opacity-60"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(3, ${cellSize}px)`,
        gridTemplateRows: `repeat(3, ${cellSize}px)`,
        gap: `${gap}px`,
      }}
    >
      {grid.flat().map((filled, i) => (
        <div
          key={i}
          className="rounded-[2px]"
          style={{
            backgroundColor: filled
              ? colors[i % colors.length]
              : "transparent",
          }}
        />
      ))}
    </div>
  );
}

const projects = [
  {
    name: "Indicator Health",
    status: "BUILDING" as const,
    description:
      "A platform for exploring and understanding healthcare data — bringing transparency to an opaque industry.",
    colors: ["#C4A67D", "#8B8178", "#A69882", "#B8A98E"],
  },
  {
    name: "Lunchbox League",
    status: "BUILDING" as const,
    description:
      "An app helping families navigate childhood food allergies. Your child's allergy passport for schools, caregivers, and everyday life.",
    colors: ["#9B9B82", "#A69882", "#8B8178", "#C4A67D"],
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A9A8A] font-[family-name:var(--font-sans)] mb-3">
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="px-6 sm:px-8 py-6 max-w-[720px] mx-auto flex items-center gap-3">
        <FLogo size={28} />
        <span className="text-[15px] font-semibold font-[family-name:var(--font-sans)] tracking-tight text-[#1A1A1A]">
          Formstone Labs
        </span>
      </nav>

      {/* Hero */}
      <section className="px-6 sm:px-8 pt-20 pb-20 sm:pt-28 sm:pb-24 max-w-[720px] mx-auto">
        <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.5rem] font-bold font-[family-name:var(--font-serif)] text-[#1A1A1A] mb-6 leading-[1.1] tracking-[-0.02em]">
          Software <span className="text-[#7A3030]">built</span> to last.
        </h1>
        <p className="text-lg sm:text-[1.2rem] text-[#555] leading-[1.7] max-w-lg mb-0 font-[family-name:var(--font-sans)] font-normal">
          We make tools that stand the test of time. No shortcuts,
          no&nbsp;compromises — just solid software, carefully made.
        </p>
      </section>

      {/* Formstone divider */}
      <div className="max-w-[720px] mx-auto px-6 sm:px-8">
        <div
          className="h-px w-full"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #C4A67D 15%, #A69882 35%, #8B8178 50%, #9B9B82 65%, #B8A98E 85%, transparent 100%)",
          }}
        />
      </div>

      {/* Projects */}
      <section id="projects" className="px-6 sm:px-8 pt-24 pb-20 max-w-[720px] mx-auto">
        <SectionLabel>What We&apos;re Building</SectionLabel>
        <h2 className="text-3xl sm:text-[2.25rem] font-bold font-[family-name:var(--font-serif)] text-[#1A1A1A] mb-10 tracking-[-0.01em]">
          Projects
        </h2>
        <div className="space-y-4">
          {projects.map((p, i) => (
            <div
              key={p.name}
              className="bg-white/80 backdrop-blur-sm rounded-xl border border-[#E8E5DF] shadow-[0_1px_3px_rgba(0,0,0,0.04)] p-6 sm:p-7 flex items-start gap-5 transition-all duration-300 hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] hover:border-[#D8D5CF]"
            >
              <div className="pt-1">
                <CardPattern colors={p.colors} variant={i} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[1.05rem] font-semibold font-[family-name:var(--font-serif)] text-[#1A1A1A]">
                    {p.name}
                  </h3>
                  <StatusBadge status={p.status} />
                </div>
                <p className="text-[0.9rem] text-[#666] leading-[1.65] font-[family-name:var(--font-sans)]">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About + Contact */}
      <div className="max-w-[720px] mx-auto px-6 sm:px-8">
        <div
          className="h-px w-full mb-16"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, #D8D5CF 30%, #D8D5CF 70%, transparent 100%)",
          }}
        />
      </div>

      <section className="px-6 sm:px-8 pb-10 max-w-[720px] mx-auto">
        <SectionLabel>About</SectionLabel>
        <p className="text-[1.05rem] text-[#555] leading-[1.7] max-w-lg font-[family-name:var(--font-sans)]">
          A small software studio building focused, useful products in
          healthcare data and consumer health.
        </p>
      </section>

      <section className="px-6 sm:px-8 pb-20 max-w-[720px] mx-auto">
        <SectionLabel>Contact</SectionLabel>
        <a
          href="mailto:nate@formstonelabs.com"
          className="text-[1.05rem] text-[#1A1A1A] font-[family-name:var(--font-sans)] underline underline-offset-[5px] decoration-[#D0CEC8] hover:decoration-[#7A3030] transition-colors duration-200"
        >
          nate@formstonelabs.com
        </a>
      </section>

      {/* Footer */}
      <footer className="px-6 sm:px-8 py-10 max-w-[720px] mx-auto border-t border-[#E8E5DF]">
        <p className="text-[13px] text-[#AAA] font-[family-name:var(--font-sans)] tracking-wide">
          © 2026 Formstone Labs LLC
        </p>
      </footer>
    </main>
  );
}
