interface Building {
  city: string;
  description: string;
  year: string;
}

interface ArchitectureSlideProps {
  title: string;
  subtitle: string;
  content: string;
  buildings: Building[];
}

const ArchitectureSlide = ({ title, subtitle, content, buildings }: ArchitectureSlideProps) => {
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
                fontSize: "17px",
              }}
            >
              {paragraph}
            </p>
          ))}

          <div
            className="mt-4 p-4 italic text-base"
            style={{
              borderLeft: "3px solid var(--gold)",
              backgroundColor: "rgba(201,168,76,0.07)",
              fontFamily: "'IM Fell English', serif",
              color: "var(--sepia-medium)",
              lineHeight: "1.8",
            }}
          >
            «Здание банка должно быть храмом порядка и доверия — каждый камень в его стенах есть залог незыблемости рубля»
            <div
              className="mt-1 text-sm not-italic"
              style={{ color: "var(--gold-dark)", fontFamily: "'Crimson Text', serif" }}
            >
              — из наставлений управляющим отделениями, 1895 г.
            </div>
          </div>
        </div>

        <div className="md:w-72 flex-shrink-0">
          <div
            className="text-xs uppercase tracking-widest text-center pb-2 mb-3 font-semibold"
            style={{
              color: "var(--gold)",
              borderBottom: "1px solid var(--gold-light)",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            Важнейшие здания
          </div>
          <div className="space-y-3">
            {buildings.map((b, i) => (
              <div
                key={i}
                className="p-3 flex gap-3"
                style={{
                  backgroundColor: "var(--sepia-paper)",
                  border: "1px solid var(--border-ornate)",
                  borderLeft: "3px solid var(--gold)",
                }}
              >
                <div className="flex-shrink-0">
                  <div
                    className="text-xs font-bold px-2 py-0.5 text-center"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--sepia-paper)",
                      fontFamily: "'IM Fell English', serif",
                      minWidth: "40px",
                    }}
                  >
                    {b.year}
                  </div>
                </div>
                <div>
                  <div
                    className="text-sm font-bold mb-0.5"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                  >
                    {b.city}
                  </div>
                  <p
                    className="text-xs leading-snug"
                    style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "13px" }}
                  >
                    {b.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureSlide;
