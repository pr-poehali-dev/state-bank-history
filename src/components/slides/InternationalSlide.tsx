interface Partner {
  country: string;
  institution: string;
  description: string;
  flag: string;
}

interface InternationalSlideProps {
  title: string;
  subtitle: string;
  content: string;
  partners: Partner[];
}

const InternationalSlide = ({ title, subtitle, content, partners }: InternationalSlideProps) => {
  return (
    <div className="flex flex-col h-full px-8 py-10">
      <div className="mb-6">
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

      <div className="flex flex-col lg:flex-row gap-8 flex-1">
        <div className="lg:w-80 flex-shrink-0">
          {content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed mb-4"
              style={{
                fontFamily: "'Crimson Text', serif",
                color: "var(--sepia-medium)",
                lineHeight: "1.9",
                fontSize: "16px",
              }}
            >
              {paragraph}
            </p>
          ))}

          <div
            className="p-4 mt-2"
            style={{
              backgroundColor: "var(--sepia-paper)",
              border: "1px solid var(--border-ornate)",
              borderTop: "3px solid var(--gold)",
            }}
          >
            <div
              className="text-xs uppercase tracking-wider mb-3 font-semibold"
              style={{ color: "var(--gold)", fontFamily: "'Crimson Text', serif" }}
            >
              Иностранные инвестиции в Россию
            </div>
            {[
              { year: "1890", pct: 10, value: "~0,2 млрд ₽" },
              { year: "1897", pct: 28, value: "~0,8 млрд ₽" },
              { year: "1905", pct: 55, value: "~2,1 млрд ₽" },
              { year: "1913", pct: 100, value: "~4,0 млрд ₽" },
            ].map((item, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between text-xs mb-1" style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)" }}>
                  <span>{item.year} г.</span>
                  <span style={{ color: "var(--gold-dark)", fontWeight: "600" }}>{item.value}</span>
                </div>
                <div className="h-2 rounded-sm overflow-hidden" style={{ backgroundColor: "rgba(201,168,76,0.2)" }}>
                  <div
                    className="h-full"
                    style={{
                      width: `${item.pct}%`,
                      background: "linear-gradient(to right, var(--gold-dark), var(--gold))",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1">
          <div
            className="text-xs uppercase tracking-widest text-center pb-2 mb-4 font-semibold"
            style={{
              color: "var(--gold)",
              borderBottom: "1px solid var(--gold-light)",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            Ключевые партнёры
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="p-4"
                style={{
                  backgroundColor: "var(--sepia-paper)",
                  border: "1px solid var(--border-ornate)",
                }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{partner.flag}</span>
                  <div>
                    <div
                      className="text-sm font-bold"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                    >
                      {partner.country}
                    </div>
                    <div
                      className="text-xs italic"
                      style={{ fontFamily: "'IM Fell English', serif", color: "var(--gold-dark)" }}
                    >
                      {partner.institution}
                    </div>
                  </div>
                </div>
                <p
                  className="text-xs leading-snug"
                  style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "13px" }}
                >
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InternationalSlide;
