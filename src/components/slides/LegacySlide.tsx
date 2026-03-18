interface Achievement {
  title: string;
  description: string;
}

interface LegacySlideProps {
  title: string;
  subtitle: string;
  content: string;
  achievements: Achievement[];
}

const LegacySlide = ({ title, subtitle, content, achievements }: LegacySlideProps) => {
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
        <div className="lg:w-96 flex-shrink-0">
          {content.split("\n\n").map((paragraph, i) => (
            <p
              key={i}
              className="leading-relaxed mb-4"
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
            className="p-4 mt-2 italic"
            style={{
              borderLeft: "3px solid var(--gold)",
              backgroundColor: "rgba(201,168,76,0.07)",
              fontFamily: "'IM Fell English', serif",
              color: "var(--sepia-medium)",
              lineHeight: "1.8",
              fontSize: "15px",
            }}
          >
            «За 57 лет деятельности банк из скромного учреждения с 15 миллионами рублей капитала вырос до хранителя крупнейшего золотого запаса Европы и архитектора твёрдейшей валюты континента»
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
            Главные достижения
          </div>
          <div className="space-y-3">
            {achievements.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-4"
                style={{
                  backgroundColor: "var(--sepia-paper)",
                  border: "1px solid var(--border-ornate)",
                }}
              >
                <div
                  className="w-8 h-8 flex-shrink-0 flex items-center justify-center text-sm font-bold rounded-full"
                  style={{
                    backgroundColor: "var(--gold)",
                    color: "var(--sepia-paper)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  {i + 1}
                </div>
                <div>
                  <div
                    className="text-sm font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                  >
                    {item.title}
                  </div>
                  <p
                    className="text-sm leading-snug"
                    style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "14px" }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 text-center">
            <div className="ornate-divider">
              <span style={{ color: "var(--gold)", fontSize: "20px" }}>❧</span>
            </div>
            <p
              className="mt-3 text-sm italic"
              style={{ fontFamily: "'IM Fell English', serif", color: "var(--sepia-light)" }}
            >
              1860 — 1917 · Государственный банк Российской Империи · Пятьдесят семь лет служения Отечеству
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegacySlide;
