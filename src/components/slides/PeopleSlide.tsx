interface Person {
  name: string;
  years: string;
  title: string;
  description: string;
}

interface PeopleSlideProps {
  title: string;
  subtitle: string;
  persons: Person[];
}

const PeopleSlide = ({ title, subtitle, persons }: PeopleSlideProps) => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 flex-1 overflow-y-auto">
        {persons.map((person, i) => (
          <div
            key={i}
            className="flex gap-4 p-4"
            style={{
              backgroundColor: "var(--sepia-paper)",
              border: "1px solid var(--border-ornate)",
              borderLeft: "4px solid var(--gold)",
            }}
          >
            <div
              className="w-12 h-12 flex-shrink-0 flex items-center justify-center text-xl font-bold rounded-full"
              style={{
                backgroundColor: "var(--gold)",
                color: "var(--sepia-paper)",
                fontFamily: "'Playfair Display', serif",
              }}
            >
              {person.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3
                  className="text-base font-bold"
                  style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                >
                  {person.name}
                </h3>
                <span
                  className="text-xs px-2 py-0.5 flex-shrink-0"
                  style={{
                    backgroundColor: "var(--gold-light)",
                    color: "var(--sepia-dark)",
                    fontFamily: "'Crimson Text', serif",
                  }}
                >
                  {person.years}
                </span>
              </div>
              <div
                className="text-xs italic mb-1"
                style={{ color: "var(--gold-dark)", fontFamily: "'IM Fell English', serif" }}
              >
                {person.title}
              </div>
              <p
                className="text-sm leading-snug"
                style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "14px" }}
              >
                {person.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PeopleSlide;
