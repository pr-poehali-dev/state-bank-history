interface CoverSlideProps {
  title: string;
  subtitle: string;
  content: string;
  year: string;
}

const CoverSlide = ({ title, subtitle, content, year }: CoverSlideProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center px-8 py-12">
      <div className="mb-6 text-3xl" style={{ color: "var(--gold)" }}>
        ✦ ✦ ✦
      </div>

      <div
        className="text-sm tracking-[0.4em] uppercase mb-4 font-semibold"
        style={{ color: "var(--gold)", fontFamily: "'Crimson Text', serif" }}
      >
        Российская Империя
      </div>

      <h1
        className="text-4xl md:text-6xl font-bold leading-tight mb-4"
        style={{
          fontFamily: "'Playfair Display', serif",
          color: "var(--sepia-dark)",
          textShadow: "1px 1px 2px rgba(0,0,0,0.1)",
        }}
      >
        {title}
      </h1>

      <div
        className="text-2xl md:text-3xl italic mb-8"
        style={{
          fontFamily: "'IM Fell English', serif",
          color: "var(--gold)",
        }}
      >
        {subtitle}
      </div>

      <div className="ornate-divider w-64 mb-8">
        <span style={{ color: "var(--gold)" }}>❧</span>
      </div>

      <p
        className="max-w-2xl text-lg md:text-xl leading-relaxed mb-10"
        style={{
          fontFamily: "'Crimson Text', serif",
          color: "var(--sepia-medium)",
          lineHeight: "1.8",
        }}
      >
        {content}
      </p>

      <div
        className="px-6 py-2 border text-sm tracking-widest uppercase"
        style={{
          borderColor: "var(--gold)",
          color: "var(--gold-dark)",
          fontFamily: "'Crimson Text', serif",
          letterSpacing: "0.3em",
        }}
      >
        {year}
      </div>
    </div>
  );
};

export default CoverSlide;
