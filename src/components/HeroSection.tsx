import { useState } from "react";
import Icon from "@/components/ui/icon";

export const NAV_LINKS = [
  { href: "#problem", label: "Проблема" },
  { href: "#solution", label: "Решение" },
  { href: "#cases", label: "Кейсы" },
  { href: "#services", label: "Услуги" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-wide">
            <span className="text-green">Безопас</span>
            <span className="text-orange">Труд</span>
          </span>
        </a>
        <nav className="hidden md:flex gap-6">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacts"
          className="hidden md:inline-flex bg-green text-black font-semibold text-sm px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
        >
          Получить консультацию
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <Icon name={open ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 pb-4 pt-2 flex flex-col gap-3">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm py-1 text-muted-foreground hover:text-foreground"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacts"
            className="bg-green text-black font-semibold text-sm px-4 py-2 rounded-lg text-center mt-2"
            onClick={() => setOpen(false)}
          >
            Получить консультацию
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg pt-16"
    >
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-green/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-orange/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-slide-up">
        <div className="inline-flex items-center gap-2 border border-green/40 text-green text-xs px-3 py-1.5 rounded-full mb-6 font-medium tracking-wider uppercase">
          <Icon name="ShieldCheck" size={14} />
          Охрана труда & Промышленная безопасность
        </div>

        <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 uppercase tracking-tight">
          Защитим ваш бизнес
          <br />
          от{" "}
          <span className="text-orange">штрафов</span>{" "}
          <span className="text-green">до 200 000 ₽</span>
        </h1>

        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Комплексное сопровождение по охране труда — аутсорсинг, аудит,
          обучение сотрудников и полный пакет документов под ключ.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contacts"
            className="bg-green text-black font-bold px-8 py-4 rounded-xl text-base hover:opacity-90 transition-all glow-green inline-flex items-center justify-center gap-2"
          >
            <Icon name="PhoneCall" size={18} />
            Получить консультацию
          </a>
          <a
            href="#calculator"
            className="border border-orange text-orange font-bold px-8 py-4 rounded-xl text-base hover:bg-orange/10 transition-all inline-flex items-center justify-center gap-2"
          >
            <Icon name="Calculator" size={18} />
            Рассчитать штраф
          </a>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl mx-auto">
          {[
            { value: "500+", label: "компаний под защитой" },
            { value: "8 лет", label: "на рынке" },
            { value: "0 ₽", label: "штрафов у клиентов" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-green">
                {s.value}
              </div>
              <div className="text-muted-foreground text-xs mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <>
      <Navbar />
      <Hero />
    </>
  );
}
