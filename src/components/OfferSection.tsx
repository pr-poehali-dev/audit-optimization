import { useState } from "react";
import Icon from "@/components/ui/icon";

const VIOLATIONS = [
  { id: "soyt", label: "СОУТ не проведена / просрочена", fine: 80000 },
  { id: "briefing", label: "Инструктажи не проводились", fine: 30000 },
  { id: "ppe", label: "Отсутствие СИЗ у работников", fine: 50000 },
  { id: "docs", label: "Нет обязательной документации", fine: 20000 },
  { id: "med", label: "Не пройдены мед. осмотры", fine: 15000 },
];

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

export default function OfferSection() {
  return (
    <>
      <Calculator />
      <Cases />
      <Services />
    </>
  );
}
