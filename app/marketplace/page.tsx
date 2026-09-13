import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سوق المحاسبين المعتمدين — أوتوبان",
  description: "تواصل مع محاسبين معتمدين متخصصين في محاسبة المقاولات، فوترة زاتكا، والاستقطاعات — اختر المحاسب الأنسب لمشروعك.",
};

const accountants = [
  {
    icon: "ti-user",
    name: "م. خالد العمري",
    title: "محاسب مقاولات — ١٢ سنة خبرة",
    stars: 5,
    rating: "٤.٩",
    reviews: "٣٤",
    tags: ["اعتماد أوتوبان", "SOCPA", "زاتكا", "IFRS", "WPS"],
    cert: [true, true, false, false, false],
    location: "الرياض",
    type: "فردي",
  },
  {
    icon: "ti-building",
    name: "مكتب الرشيد للمحاسبة",
    title: "مكتب معتمد — ٨ محاسبين",
    stars: 5,
    rating: "٤.٨",
    reviews: "٢١",
    tags: ["اعتماد أوتوبان", "SOCPA", "تدقيق", "مراجعة", "ضريبة"],
    cert: [true, true, false, false, false],
    location: "جدة",
    type: "مكتب",
  },
  {
    icon: "ti-user",
    name: "أ. سارة المطيري",
    title: "محاسبة مقاولات — ٧ سنوات",
    stars: 4,
    rating: "٤.٧",
    reviews: "١٨",
    tags: ["SOCPA", "استقطاعات", "دفعة مقدمة", "زاتكا"],
    cert: [false, true, false, false, false],
    location: "الدمام",
    type: "فردي",
  },
];

const howItWorks = [
  { num: "١", title: "ابحث وفلتر", desc: "حدد نوع الخدمة، المنطقة، والاعتمادات المطلوبة." },
  { num: "٢", title: "راجع الملفات", desc: "اطلع على الخبرة والتقييمات والمشاريع السابقة." },
  { num: "٣", title: "تواصل مباشرة", desc: "تحدث مع المحاسب مباشرة بلا وسيط ولا عمولة خفية." },
  { num: "٤", title: "تعاقد وابدأ", desc: "اتفقوا على الشروط وابدأوا العمل — أوتوبان يوفر الأرضية." },
];

const certPhases = [
  {
    phase: "المرحلة الأولى — متاح الآن",
    title: "اعتماد SOCPA + خبرة موثقة",
    desc: "شهادة هيئة المحاسبين السعوديين مع خبرة موثقة في مشاريع مقاولات فعلية.",
    items: ["شهادة SOCPA سارية", "٣+ سنوات خبرة في المقاولات", "مراجعة السيرة الذاتية والمشاريع", "توصيتان من عملاء سابقين"],
    featured: false,
  },
  {
    phase: "المرحلة الثانية — قريباً",
    title: "شهادة أوتوبان التخصصية",
    desc: "اختبار عملي على سيناريوهات حقيقية من واقع محاسبة المقاولات.",
    items: ["اختبار استقطاعات ودفعة مقدمة", "اختبار محاسبة تعدد المشاريع", "اختبار زاتكا والإقرارات الضريبية", "تجديد سنوي للحفاظ على الشهادة"],
    featured: true,
  },
];

const joinSteps = [
  { num: "١", title: "أنشئ ملفك", desc: "خبرتك، شهاداتك، مشاريعك السابقة — كل ما يبني ثقة العميل." },
  { num: "٢", title: "تحقق من اعتمادك", desc: "أرسل شهادة SOCPA وتوثيق الخبرة — نراجعها خلال ٤٨ ساعة." },
  { num: "٣", title: "ظهر في نتائج البحث", desc: "ملفك يظهر للشركات التي تبحث عن تخصصك في منطقتك." },
  { num: "٤", title: "احصل على شهادة أوتوبان", desc: "الشهادة التخصصية تُميّزك عن كل محاسب آخر في القطاع." },
];

const filters = ["الكل", "محاسب فردي", "مكتب محاسبة", "الرياض", "جدة", "الدمام", "اعتماد أوتوبان", "SOCPA", "متاح الآن"];

export default function MarketplacePage() {
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
          <i className="ti ti-briefcase" /> سوق المحاسبين
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          المحاسب المتخصص
          <br /><span style={{ color: "var(--color-accent)" }}>على بُعد خطوة</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2rem" }}>
          أول سوق عمل في المنطقة مخصص للمحاسبين المتخصصين في قطاع المقاولات — شركات تجد الكادر المناسب، ومحاسبون يجدون العملاء الذين يقدّرون تخصصهم.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", paddingTop: "2rem", borderTop: "0.5px solid var(--color-border)", flexWrap: "wrap" }}>
          {[{ num: "متخصص", label: "مقاولات فقط" }, { num: "SOCPA", label: "اعتماد مُتحقَّق" }, { num: "مباشر", label: "بلا وسطاء" }].map(s => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 500, color: "var(--color-accent)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* TWO SIDES */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>من يستفيد؟</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>طرفان يحتاجان بعضهما</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>السوق يخدم الشركات والمحاسبين في آنٍ واحد</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              {
                icon: "ti-building-skyscraper", title: "شركة المقاولات", featured: true,
                desc: "تبحث عن محاسب يفهم طبيعة عملها — لا وقت لتدريب شخص من الصفر.",
                items: ["محاسب يعرف الاستقطاعات والدفعة المقدمة", "خبرة موثقة في مشاريع مشابهة", "اعتماد مُتحقَّق من أوتوبان", "تعاقد مباشر بلا وسيط"],
              },
              {
                icon: "ti-calculator", title: "المحاسب المتخصص", featured: false,
                desc: "يمتلك خبرة عميقة في المقاولات لكنه يبحث عن العميل الذي يقدّر هذا التخصص.",
                items: ["ملف مهني يعرض خبرته بوضوح", "عملاء مؤهلون ومستعدون للتعاون", "شهادة أوتوبان تُميّزه في السوق", "تقييمات حقيقية تبني سمعته"],
              },
            ].map(side => (
              <div key={side.title} style={{
                background: side.featured ? "var(--color-accent-light)" : "var(--color-surface)",
                border: side.featured ? "0.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.5rem",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: side.featured ? "var(--color-accent)" : "var(--color-accent-light)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem",
                }}>
                  <i className={`ti ${side.icon}`} style={{ color: side.featured ? "white" : "var(--color-accent)", fontSize: 22 }} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>{side.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "1rem", lineHeight: 1.6 }}>{side.desc}</p>
                <ul style={{ listStyle: "none" }}>
                  {side.items.map(item => (
                    <li key={item} style={{ fontSize: "13px", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: "8px", borderBottom: "0.5px solid var(--color-border)" }}>
                      <i className="ti ti-check" style={{ color: "var(--color-accent)", fontSize: 14, flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* SEARCH + ACCOUNTANTS */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>البحث</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>ابحث عن المحاسب المناسب</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>فلترة دقيقة تصل بك للكادر المناسب في دقائق</p>

          {/* Search bar */}
          <div style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
            borderRadius: "var(--radius)", padding: "10px 14px",
            maxWidth: "560px", margin: "0 auto 1.25rem",
          }}>
            <i className="ti ti-search" style={{ color: "var(--color-text-muted)", fontSize: 16 }} />
            <span style={{ fontSize: "13px", color: "var(--color-text-muted)" }}>ابحث بالاسم أو التخصص أو المنطقة...</span>
          </div>

          {/* Filters */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", justifyContent: "center", marginBottom: "2rem" }}>
            {filters.map((f, i) => (
              <span key={f} style={{
                fontSize: "12px", padding: "5px 14px", borderRadius: "20px", cursor: "pointer",
                background: i === 0 ? "var(--color-accent)" : "var(--color-surface-2)",
                color: i === 0 ? "white" : "var(--color-text-secondary)",
                border: i === 0 ? "none" : "0.5px solid var(--color-border)",
              }}>{f}</span>
            ))}
          </div>

          {/* Accountant cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "14px" }}>
            {accountants.map(a => (
              <div key={a.name} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}>
                  <div style={{
                    width: 46, height: 46, background: "var(--color-accent-light)",
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <i className={`ti ${a.icon}`} style={{ color: "var(--color-accent)", fontSize: 22 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 500 }}>{a.name}</div>
                    <div style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{a.title}</div>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "4px", marginBottom: "0.75rem" }}>
                  <span style={{ color: "#F59E0B", fontSize: "13px", letterSpacing: "1px" }}>{"★".repeat(a.stars)}{"☆".repeat(5 - a.stars)}</span>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>{a.rating} ({a.reviews} تقييم)</span>
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "0.75rem" }}>
                  {a.tags.map((t, i) => (
                    <span key={t} style={{
                      fontSize: "11px", padding: "2px 7px", borderRadius: "6px",
                      background: a.cert[i] ? "rgba(34,197,94,0.1)" : "var(--color-surface)",
                      color: a.cert[i] ? "#22C55E" : "var(--color-text-secondary)",
                      border: a.cert[i] ? "0.5px solid rgba(34,197,94,0.2)" : "0.5px solid var(--color-border)",
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                    <i className="ti ti-map-pin" style={{ fontSize: 13 }} />{a.location}
                  </span>
                  <button style={{
                    fontSize: "12px", background: "var(--color-accent)", color: "white",
                    padding: "5px 12px", borderRadius: "var(--radius)", border: "none", cursor: "pointer",
                  }}>تواصل</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* HOW IT WORKS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>كيف يعمل؟</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>من البحث إلى التعاقد في خطوات</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>عملية واضحة ومباشرة بدون تعقيد</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "14px" }}>
            {howItWorks.map(s => (
              <div key={s.num} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center",
              }}>
                <div style={{
                  width: 36, height: 36, background: "var(--color-accent)", color: "white",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "15px", fontWeight: 500, margin: "0 auto 0.75rem",
                }}>{s.num}</div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "4px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* CERTIFICATION */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الاعتماد</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>ضمان الجودة — مرحلتان</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>كل محاسب في السوق مُتحقَّق منه — لا أسماء عشوائية</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {certPhases.map(c => (
              <div key={c.title} style={{
                background: c.featured ? "var(--color-accent-light)" : "var(--color-surface-2)",
                border: c.featured ? "1.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.5rem",
              }}>
                <div style={{ fontSize: "11px", color: c.featured ? "var(--color-accent)" : "var(--color-text-muted)", marginBottom: "6px" }}>{c.phase}</div>
                <h3 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}>{c.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginTop: "4px", marginBottom: "1rem" }}>{c.desc}</p>
                <ul style={{ listStyle: "none" }}>
                  {c.items.map(item => (
                    <li key={item} style={{ fontSize: "12px", color: "var(--color-text-secondary)", padding: "4px 0", display: "flex", alignItems: "flex-start", gap: "7px", borderBottom: "0.5px solid var(--color-border)" }}>
                      <i className="ti ti-check" style={{ color: "var(--color-accent)", fontSize: 13, flexShrink: 0, marginTop: 2 }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* FOR ACCOUNTANTS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>للمحاسبين</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>أنت محاسب متخصص في المقاولات؟</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>أوتوبان يُبرز تخصصك ويوصلك بالعملاء الذين يبحثون عنك تحديداً</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "14px" }}>
            {joinSteps.map(s => (
              <div key={s.num} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center",
              }}>
                <div style={{
                  width: 36, height: 36, background: "var(--color-accent)", color: "white",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "15px", fontWeight: 500, margin: "0 auto 0.75rem",
                }}>{s.num}</div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "4px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
          borderRadius: "var(--radius-lg)", padding: "2rem 1.5rem", textAlign: "center",
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>ابحث عن محاسبك المتخصص</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            سواء كنت شركة تبحث عن كادر، أو محاسباً يريد بناء حضوره — سوق أوتوبان هو المكان الصحيح.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" style={{
              background: "var(--color-accent)", color: "white",
              padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
            }}>ادخل السوق الآن</Link>
            <Link href="/pricing" style={{
              background: "transparent", color: "var(--color-text)",
              padding: "12px 28px", borderRadius: "var(--radius)",
              border: "0.5px solid var(--color-border-strong)", fontSize: "15px",
            }}>انضم كمحاسب</Link>
          </div>
        </div>
      </section>
    </>
  );
}
