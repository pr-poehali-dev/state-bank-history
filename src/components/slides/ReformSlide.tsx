interface ReformStage {
  year: string;
  title: string;
  description: string;
}

interface ReformSlideProps {
  title: string;
  subtitle: string;
  content: string;
  stages: ReformStage[];
}

const ReformSlide = ({ title, subtitle, content, stages }: ReformSlideProps) => {
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
        </div>

        <div className="md:w-72 flex-shrink-0">
          <div
            className="text-xs uppercase tracking-widest text-center pb-2 mb-4 font-semibold"
            style={{
              color: "var(--gold)",
              borderBottom: "1px solid var(--gold-light)",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            Этапы реформы
          </div>

          <div className="relative">
            <div
              className="absolute left-7 top-4 bottom-4 w-0.5"
              style={{ background: "linear-gradient(to bottom, var(--gold), var(--gold-light))" }}
            />
            <div className="space-y-4">
              {stages.map((stage, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div
                    className="w-14 h-14 flex-shrink-0 flex items-center justify-center text-xs font-bold z-10 relative"
                    style={{
                      backgroundColor: "var(--gold)",
                      color: "var(--sepia-paper)",
                      fontFamily: "'IM Fell English', serif",
                      fontSize: "11px",
                      lineHeight: "1.2",
                      textAlign: "center",
                      borderRadius: "50%",
                      boxShadow: "0 0 0 3px var(--sepia-bg), 0 0 0 5px var(--gold-light)",
                    }}
                  >
                    {stage.year}
                  </div>
                  <div
                    className="flex-1 p-3"
                    style={{
                      backgroundColor: "var(--sepia-paper)",
                      border: "1px solid var(--border-ornate)",
                    }}
                  >
                    <div
                      className="text-sm font-bold mb-1"
                      style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                    >
                      {stage.title}
                    </div>
                    <p
                      className="text-xs leading-snug"
                      style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "13px" }}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="mt-5 p-3 text-center"
            style={{
              backgroundColor: "rgba(154,123,47,0.12)",
              border: "1px solid var(--gold)",
              fontFamily: "'IM Fell English', serif",
            }}
          >
            <div style={{ color: "var(--gold-dark)", fontSize: "13px" }}>
              Курс золотого рубля
            </div>
            <div
              className="text-2xl font-bold my-1"
              style={{ color: "var(--sepia-dark)", fontFamily: "'Playfair Display', serif" }}
            >
              1 ₽ = 0,774 г Au
            </div>
            <div style={{ color: "var(--sepia-light)", fontSize: "12px" }}>
              с 1 января 1897 года
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReformSlide;
