interface FunctionItem {
  icon: string;
  title: string;
  description: string;
}

interface FunctionsSlideProps {
  title: string;
  subtitle: string;
  items: FunctionItem[];
}

const FunctionsSlide = ({ title, subtitle, items }: FunctionsSlideProps) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-1">
        {items.map((item, i) => (
          <div
            key={i}
            className="p-5 relative"
            style={{
              backgroundColor: "var(--sepia-paper)",
              border: "1px solid var(--border-ornate)",
              borderRadius: "2px",
            }}
          >
            <div className="text-3xl mb-3">{item.icon}</div>
            <h3
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
            >
              {item.title}
            </h3>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "15px", lineHeight: "1.7" }}
            >
              {item.description}
            </p>
            <div
              className="absolute bottom-2 right-3 text-xs"
              style={{ color: "var(--gold-light)" }}
            >
              {i + 1}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunctionsSlide;
