import { useState } from "react";
import Icon from "@/components/ui/icon";

// ─── Nav ────────────────────────────────────────────────────────────────────
const NAV_LINKS = [
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

// ─── Hero ───────────────────────────────────────────────────────────────────
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

// ─── Problem ────────────────────────────────────────────────────────────────
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

// ─── Solution ───────────────────────────────────────────────────────────────
const STEPS = [
  { num: "01", title: "Аудит за 48 часов", desc: "Анализируем документы и выявляем все нарушения до проверки Роструда." },
  { num: "02", title: "Устранение нарушений", desc: "Разрабатываем документы, проводим инструктажи, оформляем СОУТ." },
  { num: "03", title: "Постоянное сопровождение", desc: "Следим за изменениями законодательства и обновляем документы." },
  { num: "04", title: "Защита при проверках", desc: "Представляем ваши интересы при проверках Роструда и ГИТ." },
];

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

// ─── Calculator ──────────────────────────────────────────────────────────────
const VIOLATIONS = [
  { id: "soyt", label: "СОУТ не проведена / просрочена", fine: 80000 },
  { id: "briefing", label: "Инструктажи не проводились", fine: 30000 },
  { id: "ppe", label: "Отсутствие СИЗ у работников", fine: 50000 },
  { id: "docs", label: "Нет обязательной документации", fine: 20000 },
  { id: "med", label: "Не пройдены мед. осмотры", fine: 15000 },
];

function Calculator() {
  const [employees, setEmployees] = useState(25);
  const [selectedViolations, setSelectedViolations] = useState<string[]>(["soyt", "briefing"]);

  const toggleViolation = (id: string) => {
    setSelectedViolations((prev) =>
      prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]
    );
  };

  const baseFine = VIOLATIONS.filter((v) => selectedViolations.includes(v.id)).reduce(
    (sum, v) => sum + v.fine,
    0
  );

  const multiplier = employees >= 100 ? 2.5 : employees >= 50 ? 2 : employees >= 20 ? 1.5 : 1;
  const totalFine = Math.round(baseFine * multiplier);
  const repeat = totalFine * 2;

  return (
    <section id="calculator" className="section-padding bg-card">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Интерактивный калькулятор
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            Рассчитайте
            <br />
            <span className="text-orange">ваш риск</span>
          </h2>
          <p className="text-muted-foreground mt-3 text-sm">
            Приблизительный расчёт на основе КоАП РФ ст. 5.27.1
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="border border-border rounded-2xl p-6">
              <label className="text-sm font-semibold block mb-4">
                Количество сотрудников:{" "}
                <span className="text-green text-lg">{employees}</span>
              </label>
              <input
                type="range"
                min={1}
                max={500}
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full accent-green h-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-2">
                <span>1</span>
                <span>50</span>
                <span>100</span>
                <span>250</span>
                <span>500</span>
              </div>
            </div>

            <div className="border border-border rounded-2xl p-6">
              <p className="text-sm font-semibold mb-4">Выберите нарушения:</p>
              <div className="space-y-3">
                {VIOLATIONS.map((v) => (
                  <label
                    key={v.id}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      onClick={() => toggleViolation(v.id)}
                      className={`w-5 h-5 rounded border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                        selectedViolations.includes(v.id)
                          ? "bg-green border-green"
                          : "border-border group-hover:border-green/50"
                      }`}
                    >
                      {selectedViolations.includes(v.id) && (
                        <Icon name="Check" size={12} className="text-black" />
                      )}
                    </div>
                    <span
                      className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex-1"
                      onClick={() => toggleViolation(v.id)}
                    >
                      {v.label}
                    </span>
                    <span className="text-xs text-orange font-medium">
                      {v.fine.toLocaleString("ru")} ₽
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="border border-orange/40 rounded-2xl p-6 glow-orange flex-1 flex flex-col justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Ожидаемый штраф (первичное нарушение)
                </p>
                <div className="font-display text-5xl font-bold text-orange">
                  {totalFine > 0 ? `${totalFine.toLocaleString("ru")} ₽` : "0 ₽"}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  При {employees} сотрудниках (коэф. ×{multiplier})
                </p>
              </div>

              <div className="mt-6 space-y-3">
                <div className="bg-secondary rounded-xl p-4">
                  <p className="text-xs text-muted-foreground">При повторном нарушении</p>
                  <p className="font-display text-2xl font-bold text-red-400">
                    {repeat > 0 ? `до ${repeat.toLocaleString("ru")} ₽` : "0 ₽"}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    + возможная дисквалификация руководителя
                  </p>
                </div>

                <div className="bg-green/10 border border-green/30 rounded-xl p-4">
                  <p className="text-xs text-green font-semibold">
                    Наши услуги обойдутся в разы дешевле
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Аутсорсинг ОТ от 5 000 ₽/мес против потенциального штрафа
                  </p>
                </div>
              </div>
            </div>

            <a
              href="#contacts"
              className="bg-green text-black font-bold px-6 py-4 rounded-xl text-center hover:opacity-90 transition-opacity glow-green"
            >
              Защититься от штрафов →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Cases ──────────────────────────────────────────────────────────────────
const CASES = [
  {
    company: "Строительная компания",
    employees: 120,
    problem: "Проверка ГИТ без предупреждения. 14 нарушений.",
    result: "Все нарушения устранены за 3 дня. Штраф — 0 ₽",
    saved: "380 000 ₽",
    icon: "HardHat",
  },
  {
    company: "Производственный завод",
    employees: 350,
    problem: "СОУТ не проводилась 6 лет. Документация отсутствует.",
    result: "Полная документация под ключ за 3 недели",
    saved: "650 000 ₽",
    icon: "Factory",
  },
  {
    company: "Торговая сеть",
    employees: 80,
    problem: "Инструктажи не проводились 2 года. Жалоба сотрудника.",
    result: "Пакет документов, обучение персонала, представительство в ГИТ",
    saved: "220 000 ₽",
    icon: "ShoppingCart",
  },
];

function Cases() {
  return (
    <section id="cases" className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-green text-sm font-semibold uppercase tracking-widest">
            Реальные результаты
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            Кейсы наших
            <br />
            <span className="text-green">клиентов</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CASES.map((c) => (
            <div
              key={c.company}
              className="border border-border rounded-2xl p-6 hover:border-green/50 transition-colors group flex flex-col"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-green/10 flex items-center justify-center">
                  <Icon name={c.icon} fallback="Building2" size={20} className="text-green" />
                </div>
                <div>
                  <p className="font-semibold text-sm">{c.company}</p>
                  <p className="text-xs text-muted-foreground">{c.employees} сотрудников</p>
                </div>
              </div>
              <div className="flex-1 space-y-3">
                <div className="bg-orange/10 rounded-xl p-3">
                  <p className="text-xs text-orange font-semibold mb-1">Проблема</p>
                  <p className="text-sm text-muted-foreground">{c.problem}</p>
                </div>
                <div className="bg-green/10 rounded-xl p-3">
                  <p className="text-xs text-green font-semibold mb-1">Решение</p>
                  <p className="text-sm text-muted-foreground">{c.result}</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Сэкономлено</span>
                <span className="font-display text-xl font-bold text-green">{c.saved}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services ───────────────────────────────────────────────────────────────
const SERVICES = [
  {
    title: "Аутсорсинг охраны труда",
    price: "от 5 000 ₽/мес",
    desc: "Специалист по ОТ в штате — без найма. Полное ведение документации, инструктажи, СОУТ.",
    features: ["Разработка документации", "Проведение инструктажей", "Контроль изменений законодательства", "Сопровождение проверок"],
    highlight: true,
  },
  {
    title: "Аудит охраны труда",
    price: "от 15 000 ₽",
    desc: "Полная проверка текущего состояния ОТ на предприятии с выдачей заключения и плана устранения.",
    features: ["Анализ документации", "Выявление нарушений", "Письменное заключение", "План мероприятий"],
    highlight: false,
  },
  {
    title: "Обучение и инструктажи",
    price: "от 3 000 ₽/чел",
    desc: "Обучение работников и руководителей требованиям охраны труда. Онлайн и выезд.",
    features: ["Вводные инструктажи", "Обучение по ОТ", "Проверка знаний", "Оформление протоколов"],
    highlight: false,
  },
  {
    title: "Документация под ключ",
    price: "от 20 000 ₽",
    desc: "Полный пакет документов по ОТ для вашего предприятия. Инструкции, положения, журналы.",
    features: ["Инструкции по профессиям", "Положение по ОТ", "Журналы инструктажей", "Приказы и положения"],
    highlight: false,
  },
];

function Services() {
  return (
    <section id="services" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Что мы предлагаем
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            Наши
            <br />
            <span className="text-orange">услуги</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className={`rounded-2xl p-6 border flex flex-col ${
                s.highlight
                  ? "border-green/60 bg-green/5 glow-green"
                  : "border-border hover:border-green/30 transition-colors"
              }`}
            >
              {s.highlight && (
                <span className="text-xs font-semibold text-black bg-green px-2 py-0.5 rounded-full self-start mb-4">
                  Популярно
                </span>
              )}
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-display text-xl font-bold">{s.title}</h3>
                <span className="text-green font-bold text-sm text-right whitespace-nowrap ml-4">
                  {s.price}
                </span>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <ul className="space-y-2 flex-1">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={14} className="text-green flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contacts"
                className={`mt-6 px-4 py-3 rounded-xl font-semibold text-sm text-center transition-all ${
                  s.highlight
                    ? "bg-green text-black hover:opacity-90"
                    : "border border-green text-green hover:bg-green/10"
                }`}
              >
                Узнать подробнее
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FAQ ────────────────────────────────────────────────────────────────────
const FAQS = [
  {
    q: "Обязаны ли все компании соблюдать требования ОТ?",
    a: "Да, согласно ТК РФ, все работодатели обязаны обеспечивать безопасные условия труда вне зависимости от размера организации и формы собственности. Даже 1 сотрудник — уже обязанность.",
  },
  {
    q: "Как часто Роструд проводит проверки?",
    a: "Плановые проверки — раз в 3 года. Внеплановые — по жалобам сотрудников, после несчастных случаев или по запросу прокуратуры. Предупреждение может не поступить.",
  },
  {
    q: "Чем аутсорсинг ОТ лучше штатного специалиста?",
    a: "Штатный специалист — зарплата от 60 000 ₽ + налоги + оборудование рабочего места. Наш аутсорсинг от 5 000 ₽/мес при том же объёме задач и более широкой экспертизе.",
  },
  {
    q: "Сколько времени занимает приведение документации в порядок?",
    a: "Стандартный пакет документов — 5-10 рабочих дней. Срочный аудит и устранение критических нарушений — 48 часов.",
  },
  {
    q: "Работаете ли вы с компаниями не из нашего региона?",
    a: "Да, мы работаем по всей России. Большинство задач решаем дистанционно. При необходимости обеспечиваем выезд специалиста.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-green text-sm font-semibold uppercase tracking-widest">
            Частые вопросы
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            FAQ
          </h2>
        </div>
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl overflow-hidden"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-secondary/50 transition-colors"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm pr-4">{f.q}</span>
                <Icon
                  name={open === i ? "ChevronUp" : "ChevronDown"}
                  size={16}
                  className="text-muted-foreground flex-shrink-0"
                />
              </button>
              {open === i && (
                <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contacts ───────────────────────────────────────────────────────────────
function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", company: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacts" className="section-padding bg-card">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-orange text-sm font-semibold uppercase tracking-widest">
            Свяжитесь с нами
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold uppercase mt-2">
            Получите бесплатную
            <br />
            <span className="text-orange">консультацию</span>
          </h2>
          <p className="text-muted-foreground mt-3">
            Ответим в течение 30 минут в рабочее время
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            {[
              { icon: "Phone", label: "Телефон", value: "+7 (800) 000-00-00" },
              { icon: "Mail", label: "Email", value: "info@bezopastrud.ru" },
              { icon: "MapPin", label: "Адрес", value: "Москва, ул. Примерная, 1" },
              { icon: "Clock", label: "Режим работы", value: "Пн–Пт, 9:00–18:00" },
            ].map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-orange/10 flex items-center justify-center flex-shrink-0">
                  <Icon name={c.icon} fallback="Phone" size={18} className="text-orange" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">{c.label}</p>
                  <p className="font-medium text-sm">{c.value}</p>
                </div>
              </div>
            ))}

            <div className="border border-green/30 bg-green/5 rounded-2xl p-5 mt-4">
              <p className="text-green font-semibold text-sm mb-1">
                Бесплатный экспресс-аудит
              </p>
              <p className="text-muted-foreground text-sm">
                Пришлите скан любого документа по ОТ — дадим заключение бесплатно в течение 24 часов.
              </p>
            </div>
          </div>

          {sent ? (
            <div className="border border-green/40 rounded-2xl p-8 text-center glow-green">
              <div className="w-16 h-16 rounded-full bg-green/20 flex items-center justify-center mx-auto mb-4">
                <Icon name="CheckCircle" size={32} className="text-green" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-2">Заявка отправлена!</h3>
              <p className="text-muted-foreground text-sm">
                Наш специалист свяжется с вами в течение 30 минут.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="border border-border rounded-2xl p-6 space-y-4">
              {[
                { key: "name", label: "Ваше имя", placeholder: "Иван Иванов", type: "text" },
                { key: "phone", label: "Телефон", placeholder: "+7 (___) ___-__-__", type: "tel" },
                { key: "company", label: "Компания", placeholder: "ООО «Пример»", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="text-xs text-muted-foreground block mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    placeholder={field.placeholder}
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-green/60 transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="text-xs text-muted-foreground block mb-1">Опишите задачу</label>
                <textarea
                  rows={3}
                  placeholder="Кратко опишите вашу ситуацию..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-secondary border border-border rounded-xl px-4 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-green/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange text-white font-bold py-3.5 rounded-xl hover:opacity-90 transition-opacity glow-orange"
              >
                Отправить заявку
              </button>
              <p className="text-xs text-muted-foreground text-center">
                Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Footer ─────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-lg font-bold">
          <span className="text-green">Безопас</span>
          <span className="text-orange">Труд</span>
        </span>
        <p className="text-xs text-muted-foreground text-center">
          © 2026 БезопасТруд. Все права защищены.
        </p>
        <div className="flex gap-4">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Calculator />
      <Cases />
      <Services />
      <FAQ />
      <Contacts />
      <Footer />
    </div>
  );
}