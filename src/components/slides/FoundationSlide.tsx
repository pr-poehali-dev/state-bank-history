interface Fact {
  label: string;
  value: string;
}

interface FoundationSlideProps {
  title: string;
  subtitle: string;
  content: string;
  facts: Fact[];
}

const FoundationSlide = ({ title, subtitle, content, facts }: FoundationSlideProps) => {
  return (
    <div className="flex flex-col h-full px-8 py-10">
      <div className="mb-8">
        <div
          className="text-xs tracking-[0.35em] uppercase mb-2"
          style={{ color: "var(--gold)", fontFamily: "'Crimson Text', serif" }}
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
          <span style={{ color: "var(--gold)" }}>✦</span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-8 flex-1">
        <div className="flex-1">
          {content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="text-lg leading-relaxed mb-4"
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
            className="p-6 imperial-border corner-ornament relative"
            style={{ backgroundColor: "var(--sepia-paper)" }}
          >
            <div
              className="text-center text-sm tracking-widest uppercase mb-4 font-semibold"
              style={{ color: "var(--gold)", fontFamily: "'Crimson Text', serif" }}
            >
              Сведения
            </div>
            <div className="space-y-4">
              {facts.map((fact, i) => (
                <div key={i} className="border-b pb-3" style={{ borderColor: "var(--gold-light)" }}>
                  <div
                    className="text-xs uppercase tracking-wider mb-1"
                    style={{ color: "var(--sepia-light)", fontFamily: "'Crimson Text', serif" }}
                  >
                    {fact.label}
                  </div>
                  <div
                    className="text-base font-semibold"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                  >
                    {fact.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoundationSlide;
