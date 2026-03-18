import { useState, useEffect, useCallback } from "react";
import { slides } from "@/data/presentationData";
import CoverSlide from "@/components/slides/CoverSlide";
import FoundationSlide from "@/components/slides/FoundationSlide";
import FunctionsSlide from "@/components/slides/FunctionsSlide";
import ArchitectureSlide from "@/components/slides/ArchitectureSlide";
import ReformSlide from "@/components/slides/ReformSlide";
import TimelineSlide from "@/components/slides/TimelineSlide";
import ChartsSlide from "@/components/slides/ChartsSlide";
import InternationalSlide from "@/components/slides/InternationalSlide";
import PeopleSlide from "@/components/slides/PeopleSlide";
import DeclineSlide from "@/components/slides/DeclineSlide";
import LegacySlide from "@/components/slides/LegacySlide";
import SourcesSlide from "@/components/slides/SourcesSlide";
import Icon from "@/components/ui/icon";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const slideComponents: Record<string, React.ComponentType<any>> = {
  cover: CoverSlide,
  text: FoundationSlide,
  functions: FunctionsSlide,
  architecture: ArchitectureSlide,
  reform: ReformSlide,
  timeline: TimelineSlide,
  charts: ChartsSlide,
  international: InternationalSlide,
  people: PeopleSlide,
  decline: DeclineSlide,
  legacy: LegacySlide,
  sources: SourcesSlide,
};

const navLabels: Record<string, string> = {
  history: "История",
  foundation: "Основание",
  functions: "Функции",
  architecture: "Архитектура",
  reform: "Реформа 1897",
  development: "Развитие",
  activity: "Деятельность",
  international: "Мир. связи",
  people: "Люди",
  decline: "Закат",
  legacy: "Наследие",
  sources: "Источники",
};

const Index = () => {
  const [current, setCurrent] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const goTo = useCallback((index: number) => {
    if (index < 0 || index >= slides.length) return;
    setCurrent(index);
    setAnimKey((k) => k + 1);
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") goTo(current + 1);
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") goTo(current - 1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [current, goTo]);

  const slide = slides[current];
  const SlideComponent = slideComponents[slide.type];

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "var(--sepia-bg)", fontFamily: "'Crimson Text', serif" }}
    >
      {/* Шапка */}
      <header
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{
          backgroundColor: "var(--sepia-dark)",
          borderBottom: "2px solid var(--gold)",
        }}
      >
        <div className="flex items-center gap-3">
          <span style={{ color: "var(--gold)", fontSize: "20px" }}>⚜</span>
          <span
            className="text-sm font-semibold tracking-widest uppercase hidden sm:block"
            style={{ color: "var(--gold)", fontFamily: "'Playfair Display', serif", letterSpacing: "0.2em" }}
          >
            Государственный банк
          </span>
          <span
            className="text-xs tracking-wider hidden md:block"
            style={{ color: "rgba(201,168,76,0.6)", fontFamily: "'Crimson Text', serif" }}
          >
            · Российской Империи · 1860–1917
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span
            className="text-xs"
            style={{ color: "rgba(201,168,76,0.7)", fontFamily: "'Crimson Text', serif" }}
          >
            {current + 1} / {slides.length}
          </span>
          <button
            className="sm:hidden p-1"
            style={{ color: "var(--gold)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={20} />
          </button>
        </div>
      </header>

      <div className="flex flex-1 overflow-hidden relative">
        {/* Боковая навигация — десктоп */}
        <nav
          className="hidden sm:flex flex-col w-40 flex-shrink-0 py-4 overflow-y-auto"
          style={{
            backgroundColor: "var(--sepia-paper)",
            borderRight: "1px solid var(--border-ornate)",
          }}
        >
          <div
            className="text-xs uppercase tracking-widest text-center pb-3 mb-2"
            style={{
              color: "var(--gold)",
              borderBottom: "1px solid var(--gold-light)",
              fontFamily: "'Crimson Text', serif",
            }}
          >
            Разделы
          </div>
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i)}
              className="text-left px-3 py-2 text-sm transition-all relative"
              style={{
                fontFamily: "'Crimson Text', serif",
                fontSize: "14px",
                color: current === i ? "var(--sepia-dark)" : "var(--sepia-medium)",
                backgroundColor: current === i ? "rgba(201,168,76,0.2)" : "transparent",
                borderLeft: current === i ? "3px solid var(--gold)" : "3px solid transparent",
                fontWeight: current === i ? "600" : "400",
              }}
            >
              <span className="mr-1.5 text-xs" style={{ color: "var(--gold-light)" }}>{i + 1}.</span>
              {navLabels[s.id]}
            </button>
          ))}
        </nav>

        {/* Мобильное меню */}
        {menuOpen && (
          <div
            className="absolute inset-0 z-20 sm:hidden overflow-y-auto"
            style={{ backgroundColor: "var(--sepia-dark)" }}
          >
            <div className="p-4">
              <div
                className="text-xs uppercase tracking-widest text-center pb-3 mb-3"
                style={{
                  color: "var(--gold)",
                  borderBottom: "1px solid var(--gold-light)",
                  fontFamily: "'Crimson Text', serif",
                }}
              >
                Разделы
              </div>
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => goTo(i)}
                  className="block w-full text-left px-4 py-3 text-base"
                  style={{
                    fontFamily: "'Crimson Text', serif",
                    fontSize: "18px",
                    color: current === i ? "var(--gold)" : "rgba(201,168,76,0.7)",
                    borderBottom: "1px solid rgba(201,168,76,0.15)",
                  }}
                >
                  <span className="mr-2 text-sm" style={{ color: "var(--gold-light)" }}>{i + 1}.</span>
                  {navLabels[s.id]}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Основная область слайда */}
        <main className="flex-1 overflow-y-auto">
          <div
            key={animKey}
            className="slide-transition min-h-full"
            style={{
              background: `
                radial-gradient(ellipse at top left, rgba(201,168,76,0.06) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(92,61,30,0.08) 0%, transparent 50%),
                var(--sepia-bg)
              `,
            }}
          >
            {SlideComponent && <SlideComponent {...(slide as Record<string, unknown>)} />}
          </div>
        </main>
      </div>

      {/* Нижняя навигация */}
      <footer
        className="flex items-center justify-between px-6 py-3 flex-shrink-0"
        style={{
          backgroundColor: "var(--sepia-dark)",
          borderTop: "2px solid var(--gold)",
        }}
      >
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="flex items-center gap-2 px-4 py-1.5 text-sm transition-opacity disabled:opacity-30"
          style={{
            color: "var(--gold)",
            fontFamily: "'Crimson Text', serif",
            border: "1px solid var(--gold)",
            fontSize: "14px",
          }}
        >
          <Icon name="ChevronLeft" size={14} />
          Назад
        </button>

        {/* Индикатор прогресса */}
        <div className="flex gap-1 flex-wrap justify-center max-w-sm">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className="transition-all"
              style={{
                width: current === i ? "16px" : "5px",
                height: "5px",
                borderRadius: "3px",
                backgroundColor: current === i ? "var(--gold)" : "rgba(201,168,76,0.3)",
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === slides.length - 1}
          className="flex items-center gap-2 px-4 py-1.5 text-sm transition-opacity disabled:opacity-30"
          style={{
            color: "var(--gold)",
            fontFamily: "'Crimson Text', serif",
            border: "1px solid var(--gold)",
            fontSize: "14px",
          }}
        >
          Далее
          <Icon name="ChevronRight" size={14} />
        </button>
      </footer>
    </div>
  );
};

export default Index;
