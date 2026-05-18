import Icon from "@/components/ui/icon";

const PROBLEMS = [
  {
    icon: "AlertTriangle",
    title: "Штрафы до 200 000 ₽",
    desc: "За нарушения охраны труда Роструд назначает штрафы на должностных и юридических лиц. Повторные нарушения — дисквалификация до 3 лет.",
  },
  {
    icon: "FileX",
    title: "Документы не в порядке",
    desc: "Инструктажи не проведены, журналы не заполнены, СОУТ просрочена — проверка выявит это мгновенно.",
  },
  {
    icon: "UserX",
    title: "Нет специалиста",
    desc: "Держать штатного специалиста по ОТ дорого. При этом закон обязывает обеспечить охрану труда вне зависимости от размера компании.",
  },
  {
    icon: "Clock",
    title: "Нет времени разбираться",
    desc: "Законодательство меняется каждый год. Уследить за всеми изменениями без профильного специалиста практически невозможно.",
  },
];

const STEPS = [
  { num: "01", title: "Аудит за 48 часов", desc: "Анализируем документы и выявляем все нарушения до проверки Роструда." },
  { num: "02", title: "Устранение нарушений", desc: "Разрабатываем документы, проводим инструктажи, оформляем СОУТ." },
  { num: "03", title: "Постоянное сопровождение", desc: "Следим за изменениями законодательства и обновляем документы." },
  { num: "04", title: "Защита при проверках", desc: "Представляем ваши интересы при проверках Роструда и ГИТ." },
];

function Problem() {
  return (
    <section id="problem" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Реальные риски
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            С чем сталкиваются
            <br />
            <span className="text-orange">большинство компаний</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {PROBLEMS.map((p) => (
            <div
              key={p.title}
              className="border border-border rounded-2xl p-6 flex gap-4 hover:border-orange/50 transition-colors group"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-orange/10 flex items-center justify-center group-hover:bg-orange/20 transition-colors">
                <Icon name={p.icon} fallback="AlertTriangle" size={22} className="text-orange" />
              </div>
              <div>
                <h3 className="font-semibold text-base mb-1">{p.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green text-sm font-semibold uppercase tracking-widest">
            Как мы работаем
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            Наш подход —
            <br />
            <span className="text-green">системная защита</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.num} className="relative">
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-green/40 to-transparent z-0" />
              )}
              <div className="relative z-10 border border-border rounded-2xl p-6 hover:border-green/50 transition-colors group">
                <div className="font-display text-4xl font-bold text-green/20 group-hover:text-green/40 transition-colors mb-4">
                  {s.num}
                </div>
                <h3 className="font-semibold text-base mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AboutSection() {
  return (
    <>
      <Problem />
      <Solution />
    </>
  );
}
