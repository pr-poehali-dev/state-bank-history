interface SourceCategory {
  category: string;
  sources: string[];
}

interface SourcesSlideProps {
  title: string;
  subtitle: string;
  items: SourceCategory[];
}

const SourcesSlide = ({ title, subtitle, items }: SourcesSlideProps) => {
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 flex-1">
        {items.map((category, i) => (
          <div
            key={i}
            className="p-5"
            style={{
              backgroundColor: "var(--sepia-paper)",
              border: "1px solid var(--border-ornate)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            <h3
              className="text-sm font-bold mb-4 pb-2"
              style={{
                fontFamily: "'Playfair Display', serif",
                color: "var(--gold-dark)",
                borderBottom: "1px solid var(--border-ornate)",
                letterSpacing: "0.05em",
              }}
            >
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.sources.map((source, j) => (
                <li
                  key={j}
                  className="flex gap-2 text-sm leading-snug"
                  style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "14px" }}
                >
                  <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>✦</span>
                  <span>{source}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-6 text-center">
        <div className="ornate-divider w-full">
          <span style={{ color: "var(--gold)", fontSize: "20px" }}>❧</span>
        </div>
        <p
          className="mt-3 text-sm italic"
          style={{ fontFamily: "'IM Fell English', serif", color: "var(--sepia-light)" }}
        >
          Государственный банк Российской Империи · 1860–1917
        </p>
      </div>
    </div>
  );
};

export default SourcesSlide;
