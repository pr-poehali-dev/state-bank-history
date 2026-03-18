interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

interface TimelineSlideProps {
  title: string;
  subtitle: string;
  events: TimelineEvent[];
}

const TimelineSlide = ({ title, subtitle, events }: TimelineSlideProps) => {
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

      <div className="flex-1 overflow-y-auto">
        <div className="relative">
          <div
            className="absolute left-20 top-0 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, var(--gold), var(--gold-light), var(--gold))" }}
          />

          <div className="space-y-4">
            {events.map((event, i) => (
              <div key={i} className="flex gap-0 items-start">
                <div
                  className="w-20 text-right pr-4 pt-1 flex-shrink-0"
                  style={{
                    fontFamily: "'IM Fell English', serif",
                    color: "var(--gold-dark)",
                    fontSize: "13px",
                    fontWeight: "600",
                  }}
                >
                  {event.year}
                </div>

                <div className="relative flex-shrink-0 w-0">
                  <div
                    className="absolute -left-2 top-2 w-4 h-4 rounded-full border-2 z-10"
                    style={{
                      backgroundColor: "var(--sepia-bg)",
                      borderColor: "var(--gold)",
                      boxShadow: "0 0 0 3px var(--sepia-bg)",
                    }}
                  />
                </div>

                <div
                  className="ml-6 flex-1 p-4"
                  style={{
                    backgroundColor: i % 2 === 0 ? "var(--sepia-paper)" : "transparent",
                    border: i % 2 === 0 ? "1px solid var(--border-ornate)" : "none",
                    borderLeft: "3px solid var(--gold-light)",
                    borderRadius: "0 2px 2px 0",
                  }}
                >
                  <h3
                    className="text-base font-bold mb-1"
                    style={{ fontFamily: "'Playfair Display', serif", color: "var(--sepia-dark)" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "'Crimson Text', serif", color: "var(--sepia-medium)", fontSize: "15px" }}
                  >
                    {event.description}
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

export default TimelineSlide;
