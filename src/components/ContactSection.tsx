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

            <div className="flex gap-3 pt-2">
              <a
                href="https://vk.com/leaderexp"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 text-sm font-medium hover:border-blue-400/60 hover:text-blue-400 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.79 3.236c-1.458 2.494-2.105 1.251-2.105-.796V7.5a.5.5 0 0 0-.5-.5h-3.6c-.248 0-.4.205-.4.4 0 0-.012 1.127.012 1.7.068 1.607.95 2.268.95 2.268s-2.082 3.763-2.61 4.688A.5.5 0 0 0 8 16.5h3.44a.5.5 0 0 0 .428-.243l1.632-2.808s2.5 2.702 3.27 3.043c.37.163.733.008.733.008h2.953a.5.5 0 0 0 .4-.8s-1.978-2.652-3.073-3.988c-.49-.595-.422-.85 0-1.376C18.76 9.13 21.5 7.46 21.5 7.46a.5.5 0 0 0-.047-.46h.094Z"/></svg>
                ВКонтакте
              </a>
              <a
                href="https://max.ru/id6311194141_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border rounded-xl px-4 py-2.5 text-sm font-medium hover:border-purple-400/60 hover:text-purple-400 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.27-1.67 7.87c-.12.54-.45.67-.91.42l-2.52-1.86-1.22 1.17c-.13.13-.25.25-.51.25l.18-2.57 4.67-4.22c.2-.18-.04-.28-.32-.1L7.9 14.97l-2.46-.77c-.54-.17-.55-.54.11-.8l9.62-3.71c.45-.16.84.11.7.78z"/></svg>
                MAX
              </a>
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
        <div className="flex items-center gap-4">
          <a
            href="https://vk.com/leaderexp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-blue-400 transition-colors"
            title="ВКонтакте"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M21.547 7h-3.29a.743.743 0 0 0-.655.392s-1.312 2.416-1.79 3.236c-1.458 2.494-2.105 1.251-2.105-.796V7.5a.5.5 0 0 0-.5-.5h-3.6c-.248 0-.4.205-.4.4 0 0-.012 1.127.012 1.7.068 1.607.95 2.268.95 2.268s-2.082 3.763-2.61 4.688A.5.5 0 0 0 8 16.5h3.44a.5.5 0 0 0 .428-.243l1.632-2.808s2.5 2.702 3.27 3.043c.37.163.733.008.733.008h2.953a.5.5 0 0 0 .4-.8s-1.978-2.652-3.073-3.988c-.49-.595-.422-.85 0-1.376C18.76 9.13 21.5 7.46 21.5 7.46a.5.5 0 0 0-.047-.46h.094Z"/></svg>
          </a>
          <a
            href="https://max.ru/id6311194141_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-purple-400 transition-colors"
            title="MAX"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.93 7.27-1.67 7.87c-.12.54-.45.67-.91.42l-2.52-1.86-1.22 1.17c-.13.13-.25.25-.51.25l.18-2.57 4.67-4.22c.2-.18-.04-.28-.32-.1L7.9 14.97l-2.46-.77c-.54-.17-.55-.54.11-.8l9.62-3.71c.45-.16.84.11.7.78z"/></svg>
          </a>
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