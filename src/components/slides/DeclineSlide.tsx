interface Stat {
  label: string;
  value: string;
}

interface DeclineSlideProps {
  title: string;
  subtitle: string;
  content: string;
  stats: Stat[];
}

const DeclineSlide = ({ title, subtitle, content, stats }: DeclineSlideProps) => {
  return (
    <div className="flex flex-col h-full px-8 py-10">
      <div className="mb-8">
        <div
          className="text-xs tracking-[0.35em] uppercase mb-2"
          style={{ color: "#8b3a3a", fontFamily: "'Crimson Text', serif" }}
        >
          {subtitle}
        </div>
        <h2
          className="text-3xl md:text-4xl font-bold mb-3"
          style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
        >
          {title}
        </h2>
        <div className="ornate-divider w-48">
          <span style={{ color: "#8b3a3a" }}>✦</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex-1">
          {content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed mb-5"
              style={{
                fontFamily: "'Crimson Text', serif",
                color: "var(--sepia-medium)",
                lineHeight: "1.9",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="md:w-64 flex-shrink-0">
          <div
            className="p-6 relative"
            style={{
              backgroundColor: "var(--sepia-paper)",
              border: "2px solid #8b3a3a",
              boxShadow: "inset 0 0 0 4px var(--sepia-bg), inset 0 0 0 6px #c07070",
            }}
          >
            <div
              className="text-center text-sm tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#8b3a3a", fontFamily: "'Crimson Text', serif" }}
            >
              Статистика краха
            </div>
            <div className="space-y-5">
              {stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <div
                    className="text-2xl font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "#8b3a3a" }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs uppercase tracking-wider"
                    style={{ color: "var(--sepia-light)", fontFamily: "'Crimson Text', serif" }}
                  >
                    {stat.label}
                  </div>
                  {i < stats.length - 1 && (
                    <div
                      className="mt-3 h-px mx-4"
                      style={{ background: "linear-gradient(to right, transparent, #8b3a3a50, transparent)" }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeclineSlide;
