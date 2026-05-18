import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "@/components/HeroSection";

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

export default function ContactSection() {
  return (
    <>
      <FAQ />
      <Contacts />
      <Footer />
    </>
  );
}
