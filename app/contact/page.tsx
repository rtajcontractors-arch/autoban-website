"use client";
import { useState } from "react";
import { Icon } from "@/components/icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xwlkdodn";

const channels = [
  { icon: "brand-whatsapp", title: "واتساب", desc: "الأسرع — تحدث مع فريقنا مباشرة", badge: "رد خلال ساعة", green: true, primary: true },
  { icon: "mail", title: "البريد الإلكتروني", desc: "للاستفسارات التفصيلية والمراسلات الرسمية", badge: "رد خلال ٢٤ ساعة", yellow: true },
  { icon: "video", title: "عرض توضيحي", desc: "جلسة مباشرة نشرح فيها البرنامج لفريقك", badge: "يُحجز مسبقاً", blue: true },
  { icon: "headset", title: "فريق المبيعات", desc: "للباقات المؤسسية والعروض المخصصة", badge: "بالتنسيق المسبق", blue: true },
];

const hours = [
  { day: "الأحد — الخميس", time: "٨:٠٠ ص — ١٠:٠٠ م", status: "دعم كامل", green: true },
  { day: "الجمعة", time: "١٢:٠٠ م — ٦:٠٠ م", status: "دعم محدود", yellow: true },
  { day: "السبت", time: "١٠:٠٠ ص — ٦:٠٠ م", status: "دعم كامل", green: true },
  { day: "الأعياد الرسمية", time: "دعم طارئ فقط", status: "واتساب فقط", yellow: true },
];

const countries = [
  { flag: "🇸🇦", name: "المملكة العربية السعودية", desc: "المقر الرئيسي — دعم كامل", active: true },
  { flag: "🇰🇼", name: "الكويت", desc: "دعم باللهجة المحلية", active: false },
  { flag: "🇶🇦", name: "قطر", desc: "دعم باللهجة المحلية", active: false },
  { flag: "🇪🇬", name: "مصر", desc: "دعم باللهجة المحلية", active: false },
];

const faqs = [
  { q: "كم يستغرق الرد على رسائل الدعم؟", a: "واتساب: رد خلال ساعة في أوقات العمل. البريد الإلكتروني: خلال ٢٤ ساعة. الدعم الفني للمشكلات الطارئة يُعالَج فوراً بأولوية قصوى." },
  { q: "هل يمكنني طلب عرض توضيحي لفريقي؟", a: "نعم — نقدم جلسات عرض توضيحي مباشرة عبر الفيديو لفريقك كاملاً. مدة الجلسة ٤٥-٦٠ دقيقة، ونضبط المحتوى حسب طبيعة شركتك." },
  { q: "هل الدعم متاح لجميع الباقات بنفس المستوى؟", a: "نعم — جميع المشتركين يحصلون على نفس مستوى الدعم بنفس الأولوية والسرعة. هذا من مبادئ أوتوبان الأساسية." },
  { q: "كيف أنقل بياناتي من برنامجي الحالي لأوتوبان؟", a: "فريقنا يساعدك في نقل البيانات من أي برنامج محاسبي — تواصل معنا وسنحدد آلية النقل المناسبة لبياناتك." },
  { q: "هل يمكنني طلب تدريب لفريق المحاسبة في شركتي؟", a: "بالتأكيد — نقدم جلسات تدريبية مخصصة لفرق المحاسبة. تواصل معنا لتنسيق موعد مناسب وتحديد المواضيع التي تحتاجها." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <>
      {/* HERO */}
      <section style={{ padding: "3rem 1.5rem 2.5rem", textAlign: "center", maxWidth: "720px", margin: "0 auto" }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "var(--color-accent-light)", color: "var(--color-accent)",
          fontSize: "12px", padding: "5px 14px", borderRadius: "20px",
          border: "0.5px solid var(--color-accent-border)", marginBottom: "1.5rem",
        }}>
          <Icon name="message-circle" size={14} /> تواصل معنا
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          نحن هنا
          <br /><span style={{ color: "var(--color-accent)" }}>لمساعدتك</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto" }}>
          فريق أوتوبان جاهز للإجابة على أسئلتك — سواء كنت عميلاً حالياً أو تفكر في الاشتراك.
        </p>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* CHANNELS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>كيف تتواصل؟</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>اختر الطريقة الأنسب لك</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>أربع قنوات — استجابة متساوية بنفس الجودة لجميع المشتركين</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "14px" }}>
            {channels.map(c => (
              <div key={c.title} style={{
                background: c.primary ? "var(--color-accent-light)" : "var(--color-surface)",
                border: c.primary ? "1.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center", cursor: "pointer",
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: "50%", margin: "0 auto 0.75rem",
                  background: c.primary ? "var(--color-accent)" : "var(--color-accent-light)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Icon name={c.icon} size={24} style={{ color: c.primary ? "white" : "var(--color-accent)" }} />
                </div>
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "3px" }}>{c.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginBottom: "8px", lineHeight: 1.5 }}>{c.desc}</p>
                <span style={{
                  display: "inline-block", fontSize: "11px", padding: "2px 10px", borderRadius: "8px",
                  background: c.green ? "rgba(34,197,94,0.1)" : c.yellow ? "rgba(245,158,11,0.1)" : "var(--color-accent-light)",
                  color: c.green ? "#22C55E" : c.yellow ? "#F59E0B" : "var(--color-accent)",
                }}>{c.badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* FORM + INFO */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>راسلنا</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>أرسل رسالتك</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>سنرد عليك في أقرب وقت ممكن</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "2rem", alignItems: "start" }}>

            {/* Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "brand-whatsapp", title: "واتساب", val: "+966 5X XXX XXXX" },
                { icon: "mail", title: "البريد الإلكتروني", val: "ayman15477@gmail.com" },
                { icon: "mail", title: "الدعم التقني", val: "ayman15477@gmail.com" },
                { icon: "map-pin", title: "المقر الرئيسي", val: "المملكة العربية السعودية — منطقة القصيم" },
              ].map(info => (
                <div key={info.title} style={{
                  background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius-lg)", padding: "1rem",
                  display: "flex", alignItems: "flex-start", gap: "12px",
                }}>
                  <div style={{
                    width: 36, height: 36, background: "var(--color-accent-light)",
                    borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                    justifyContent: "center", flexShrink: 0,
                  }}>
                    <Icon name={info.icon} size={18} style={{ color: "var(--color-accent)" }} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{info.title}</h4>
                    <p style={{ fontSize: "12px", color: "var(--color-accent)" }}>{info.val}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{
              background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
              borderRadius: "var(--radius-lg)", padding: "1.5rem",
            }}>
              <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "1.25rem" }}>أرسل رسالتك مباشرة</h3>
              {/* حقل فخّ للبوتات — يتعرف عليه Formspree تلقائياً ويتجاهل أي رسالة تملأه */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }} aria-hidden="true" />
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "1rem" }}>
                {[{ name: "name", label: "الاسم الكامل", placeholder: "اسمك الكريم", type: "text" }, { name: "phone", label: "رقم الجوال", placeholder: "+966 5X XXX XXXX", type: "tel" }].map(f => (
                  <div key={f.label}>
                    <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "5px" }}>{f.label}</label>
                    <input name={f.name} required type={f.type} placeholder={f.placeholder} style={{
                      width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                      borderRadius: "var(--radius)", padding: "9px 12px", fontSize: "13px", color: "var(--color-text)",
                      fontFamily: "inherit", direction: "rtl", outline: "none",
                    }} />
                  </div>
                ))}
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "5px" }}>البريد الإلكتروني</label>
                <input name="email" required type="email" placeholder="example@company.com" style={{
                  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "9px 12px", fontSize: "13px", color: "var(--color-text)",
                  fontFamily: "inherit", direction: "rtl", outline: "none",
                }} />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "5px" }}>الدولة</label>
                <select name="country" style={{
                  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "9px 12px", fontSize: "13px", color: "var(--color-text)",
                  fontFamily: "inherit", direction: "rtl", outline: "none",
                }}>
                  {["المملكة العربية السعودية", "الكويت", "قطر", "مصر"].map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "5px" }}>موضوع التواصل</label>
                <select name="subject" style={{
                  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "9px 12px", fontSize: "13px", color: "var(--color-text)",
                  fontFamily: "inherit", direction: "rtl", outline: "none",
                }}>
                  {["استفسار عن الأسعار والباقات", "طلب عرض توضيحي", "دعم فني", "الانضمام كمحاسب في السوق", "شراكة أو تعاون", "اقتراح أو ملاحظة"].map(o => <option key={o}>{o}</option>)}
                </select>
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ fontSize: "12px", color: "var(--color-text-secondary)", display: "block", marginBottom: "5px" }}>رسالتك</label>
                <textarea name="message" required placeholder="اكتب رسالتك هنا..." style={{
                  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "9px 12px", fontSize: "13px", color: "var(--color-text)",
                  fontFamily: "inherit", direction: "rtl", outline: "none", resize: "vertical", minHeight: "100px",
                }} />
              </div>
              <button type="submit" disabled={formStatus === "sending"} style={{
                width: "100%", background: "var(--color-accent)", color: "white",
                border: "none", borderRadius: "var(--radius)", padding: "11px",
                fontSize: "14px", cursor: formStatus === "sending" ? "not-allowed" : "pointer", fontFamily: "inherit",
                display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                opacity: formStatus === "sending" ? 0.7 : 1,
              }}>
                <Icon name="send" size={14} /> {formStatus === "sending" ? "جارِ الإرسال..." : "أرسل الرسالة"}
              </button>
              {formStatus === "success" && (
                <p style={{ fontSize: "13px", color: "#22C55E", marginTop: "10px", textAlign: "center" }}>
                  تم إرسال رسالتك بنجاح — سنتواصل معك قريباً.
                </p>
              )}
              {formStatus === "error" && (
                <p style={{ fontSize: "13px", color: "#EF4444", marginTop: "10px", textAlign: "center" }}>
                  تعذّر إرسال الرسالة. حاول مرة أخرى أو تواصل معنا عبر الواتساب.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* HOURS + COUNTRIES */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }}>
            <div>
              <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>أوقات العمل</p>
              <h2 style={{ fontSize: "20px", fontWeight: 500, marginBottom: "1.25rem" }}>متى نكون متاحين؟</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {hours.map(h => (
                  <div key={h.day} style={{
                    background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)", padding: "1rem",
                  }}>
                    <div style={{ fontSize: "13px", fontWeight: 500, marginBottom: "3px" }}>{h.day}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-secondary)", marginBottom: "6px" }}>{h.time}</div>
                    <span style={{
                      fontSize: "11px", padding: "2px 8px", borderRadius: "8px",
                      background: h.green ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                      color: h.green ? "#22C55E" : "#F59E0B",
                    }}>{h.status}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الدول</p>
              <h2 style={{ fontSize: "20px", fontWeight: 500, marginBottom: "1.25rem" }}>ندعم عملاءنا في كل مكان</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                {countries.map(c => (
                  <div key={c.name} style={{
                    background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                    borderRadius: "var(--radius-lg)", padding: "1rem",
                    display: "flex", alignItems: "center", gap: "10px",
                  }}>
                    <span style={{ fontSize: "24px" }}>{c.flag}</span>
                    <div>
                      <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{c.name}</h4>
                      <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>{c.desc}</p>
                      <span style={{
                        fontSize: "10px", padding: "1px 7px", borderRadius: "6px",
                        background: c.active ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                        color: c.active ? "#22C55E" : "#F59E0B",
                      }}>{c.active ? "متاح الآن" : "قريباً"}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* FAQ */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px", textAlign: "center" }}>أسئلة شائعة</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem", textAlign: "center" }}>قبل أن تتواصل</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem", textAlign: "center" }}>ربما تجد إجابتك هنا</p>
          <div style={{ maxWidth: "680px", margin: "0 auto" }}>
            {faqs.map((f, i) => (
              <div key={f.q} style={{ borderBottom: "0.5px solid var(--color-border)" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "1rem 0", width: "100%", textAlign: "right",
                  fontSize: "14px", color: "var(--color-text)",
                  background: "none", border: "none", cursor: "pointer", gap: "12px",
                }}>
                  {f.q}
                  <Icon name={openFaq === i ? "chevron-up" : "chevron-down"} size={16} style={{ color: "var(--color-text-secondary)", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, paddingBottom: "1rem" }}>{f.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
          borderRadius: "var(--radius-lg)", padding: "2rem 1.5rem", textAlign: "center",
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>لا تتردد في التواصل</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            سواء كان لديك سؤال بسيط أو تريد عرضاً مفصلاً — فريقنا جاهز وسعيد بمساعدتك.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <button style={{
              background: "var(--color-accent)", color: "white",
              padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500, border: "none", cursor: "pointer",
            }}>تواصل عبر الواتساب</button>
            <button style={{
              background: "transparent", color: "var(--color-text)",
              padding: "12px 28px", borderRadius: "var(--radius)",
              border: "0.5px solid var(--color-border-strong)", fontSize: "15px", cursor: "pointer",
            }}>احجز عرضاً توضيحياً</button>
          </div>
        </div>
      </section>
    </>
  );
}
