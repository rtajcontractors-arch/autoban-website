import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "من نحن — أوتوبان",
  description: "قصة أوتوبان ورؤيتنا لبناء منظومة متكاملة لقطاع المقاولات في السعودية والكويت وقطر ومصر — برنامج محاسبي مخصص، مجتمع حصري، وسوق محاسبين معتمدين.",
};

const problems = [
  { icon: "ti-puzzle-off", title: "غياب التخصص", desc: "لا برنامج واحد في السوق بُني خصيصاً لمحاسبة المقاولات بكل تفاصيلها." },
  { icon: "ti-lock-dollar", title: "تعقيد الاستقطاعات", desc: "الاستقطاعات وضمانات الحسن الأداء والدفعات المقدمة تُحسَب يدوياً أو بأخطاء." },
  { icon: "ti-user-x", title: "صعوبة الاستخدام", desc: "البرامج المحاسبية معقدة — المقاول يحتاج محاسباً متفرغاً لمجرد إدخال البيانات." },
  { icon: "ti-chart-off", title: "نتائج غير دقيقة", desc: "البرامج العامة لا تنتج تقارير مالية طبقاً لمعايير محاسبة المقاولات الدولية." },
];

const solutions = [
  { icon: "ti-user-check", title: "واجهة يفهمها المقاول", desc: "لا يحتاج المقاول أن يكون محاسباً — البرنامج يترجم العمليات لمحاسبة احترافية تلقائياً." },
  { icon: "ti-certificate", title: "دقة المعايير الدولية", desc: "النتائج المالية مطابقة للمعايير المحاسبية الدولية والمتطلبات المحلية لكل دولة." },
  { icon: "ti-calculator", title: "محاسبة مقاولات حقيقية", desc: "استقطاعات، دفعة مقدمة، ضمانات، تعدد مشاريع — كل ما يخص المقاول محسوب تلقائياً." },
  { icon: "ti-building-community", title: "منظومة لا مجرد برنامج", desc: "برنامج + مجتمع + سوق محاسبين + مكتبة معرفية — كل ما يحتاجه المقاول في مكان واحد." },
];

const vision = [
  { icon: "ti-target", title: "التخصص أولاً", desc: "قطاع واحد، عمق لا يملكه أحد — المقاولات هي تخصصنا الوحيد والأبدي." },
  { icon: "ti-users", title: "مجتمع حقيقي", desc: "شبكة مقاولين ومحاسبين متخصصين تبني علاقات تجارية حقيقية." },
  { icon: "ti-certificate", title: "جهة اعتماد", desc: "شهادة أوتوبان للمحاسب المتخصص في المقاولات — معيار جديد في القطاع." },
  { icon: "ti-world", title: "توسع إقليمي", desc: "نفس النموذج، نفس التخصص — في دول الخليج ومصر." },
];

const markets = [
  { flag: "🇸🇦", name: "المملكة العربية السعودية", desc: "زاتكا — المرحلتان", status: "متاح الآن", active: true },
  { flag: "🇰🇼", name: "الكويت", desc: "معايير المحاسبة الكويتية", status: "قريباً", active: false },
  { flag: "🇶🇦", name: "قطر", desc: "معايير المحاسبة القطرية", status: "قريباً", active: false },
  { flag: "🇪🇬", name: "مصر", desc: "معايير المحاسبة المصرية", status: "قريباً", active: false },
];

const standards = [
  "IFRS — معايير التقارير الدولية",
  "SOCPA — هيئة المحاسبين السعوديين",
  "زاتكا — الفوترة الإلكترونية",
  "WPS — نظام حماية الأجور",
  "معايير المحاسبة المصرية",
  "معايير المحاسبة الكويتية",
  "معايير المحاسبة القطرية",
];

const values = [
  { num: "١", title: "التخصص", desc: "نرفض أن نكون برنامجاً عاماً — المقاولات هي تخصصنا الوحيد." },
  { num: "٢", title: "البساطة", desc: "نؤمن أن البرنامج الجيد لا يحتاج تدريباً طويلاً — يجب أن يكون بديهياً." },
  { num: "٣", title: "الدقة", desc: "البساطة لا تعني التساهل في الدقة المحاسبية — نجمع الاثنين معاً." },
  { num: "٤", title: "المجتمع", desc: "نبني شبكة متخصصة — ليس مجرد قاعدة مستخدمين." },
];

export default function AboutPage() {
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
          <i className="ti ti-heart" /> قصتنا
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          بُنيَ من داخل القطاع
          <br /><span style={{ color: "var(--color-accent)" }}>لخدمة أهله</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto" }}>
          أوتوبان لم يُولد في مكتب تقني بعيد عن الميدان — وُلد من إحساس حقيقي بمعاناة المقاول مع البرامج التي لا تفهم طبيعة عمله.
        </p>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* PROBLEM */}
      <section style={{ padding: "2.5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>المشكلة</p>
        <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "1rem" }}>ماذا كان ينقص السوق؟</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          منذ زمن، كان المقاولون يعانون مع برامج محاسبية عامة لم تُصمَّم لهم — سواء كانت كبيرة أو صغيرة، محلية أو عالمية.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
          {problems.map(p => (
            <div key={p.title} style={{
              background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
              borderRadius: "var(--radius-lg)", padding: "1.1rem",
            }}>
              <i className={`ti ${p.icon}`} style={{ color: "#F59E0B", fontSize: 20, display: "block", marginBottom: "8px" }} />
              <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{p.title}</h4>
              <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* SOLUTION */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الحل</p>
          <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "1.5rem" }}>فكرة بسيطة، تأثير عميق</h2>
          <div style={{
            background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
            borderRadius: "var(--radius-lg)", padding: "2rem", textAlign: "center", marginBottom: "2rem",
          }}>
            <div style={{ fontSize: "clamp(18px,3vw,24px)", fontWeight: 500, lineHeight: 1.4 }}>
              "<span style={{ color: "var(--color-accent)" }}>سهل للمقاول</span> — دقيق للمحاسب"
            </div>
            <div style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "8px" }}>
              هذه الجملة هي جوهر أوتوبان — وهو ما لا يقدمه أي منافس في السوق اليوم
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {solutions.map(s => (
              <div key={s.title} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem",
              }}>
                <i className={`ti ${s.icon}`} style={{ color: "var(--color-accent)", fontSize: 20, display: "block", marginBottom: "8px" }} />
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{s.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* VISION */}
      <section style={{ padding: "2.5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>رؤيتنا</p>
        <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "0.75rem" }}>إلى أين نتجه؟</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          نؤمن بأن التخصص العميق هو المصدر الحقيقي للتميز. هدفنا أن يصبح أوتوبان المرجع الرقمي الأول لقطاع المقاولات في دول الخليج ومصر.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
          {vision.map(v => (
            <div key={v.title} style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
              <div style={{
                width: 36, height: 36, background: "var(--color-accent-light)",
                borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                justifyContent: "center", flexShrink: 0,
              }}>
                <i className={`ti ${v.icon}`} style={{ color: "var(--color-accent)", fontSize: 18 }} />
              </div>
              <div>
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{v.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* MARKETS */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>أسواقنا</p>
          <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "0.5rem" }}>دول الخليج ومصر — منصة واحدة</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            مُصمَّم من البداية لخدمة المنطقة مع مراعاة متطلبات الفوترة والمعايير المحاسبية لكل دولة.
          </p>

          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "10px", display:"flex", alignItems:"center", gap:"8px" }}>
            دول الخليج العربي
            <span style={{ flex:1, height:"0.5px", background:"var(--color-border)", display:"block" }} />
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "10px", marginBottom: "1.5rem" }}>
            {markets.slice(0,3).map(m => (
              <div key={m.name} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1rem",
                display: "flex", alignItems: "center", gap: "10px",
              }}>
                <span style={{ fontSize: "26px" }}>{m.flag}</span>
                <div>
                  <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{m.name}</h4>
                  <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>{m.desc}</p>
                  <span style={{
                    fontSize: "10px", padding: "2px 7px", borderRadius: "8px",
                    background: m.active ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
                    color: m.active ? "#22C55E" : "#F59E0B",
                  }}>{m.status}</span>
                </div>
              </div>
            ))}
          </div>

          <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "10px", display:"flex", alignItems:"center", gap:"8px" }}>
            شمال أفريقيا
            <span style={{ flex:1, height:"0.5px", background:"var(--color-border)", display:"block" }} />
          </p>
          <div style={{ maxWidth: "260px" }}>
            <div style={{
              background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
              borderRadius: "var(--radius-lg)", padding: "1rem",
              display: "flex", alignItems: "center", gap: "10px",
            }}>
              <span style={{ fontSize: "26px" }}>🇪🇬</span>
              <div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>مصر</h4>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>معايير المحاسبة المصرية</p>
                <span style={{ fontSize: "10px", padding: "2px 7px", borderRadius: "8px", background: "rgba(245,158,11,0.1)", color: "#F59E0B" }}>قريباً</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* STANDARDS */}
      <section style={{ padding: "2.5rem 1.5rem", maxWidth: "900px", margin: "0 auto" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>المعايير</p>
        <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "0.5rem" }}>متوافق مع المعايير الدولية والمحلية</h2>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
          النتائج المالية في أوتوبان مبنية على أساس محاسبي صحيح — ليس تبسيطاً على حساب الدقة.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
          {standards.map(s => (
            <div key={s} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
              borderRadius: "var(--radius)", padding: "9px 14px", fontSize: "13px",
            }}>
              <i className="ti ti-certificate" style={{ color: "var(--color-accent)", fontSize: 16 }} />
              {s}
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>قيمنا</p>
          <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "1.5rem" }}>ما الذي يحركنا؟</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {values.map(v => (
              <div key={v.title} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center",
              }}>
                <div style={{ fontSize: "32px", fontWeight: 500, color: "var(--color-accent)", marginBottom: "6px" }}>{v.num}</div>
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{v.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{v.desc}</p>
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
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>انضم إلى منظومة أوتوبان</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem", lineHeight: 1.7 }}>
            سواء كنت مقاولاً يبحث عن نظام يفهمه، أو محاسباً يريد التخصص — أوتوبان بُني لك.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" style={{
              background: "var(--color-accent)", color: "white",
              padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
            }}>ابدأ شهرك المجاني</Link>
            <Link href="/features" style={{
              background: "transparent", color: "var(--color-text)",
              padding: "12px 28px", borderRadius: "var(--radius)",
              border: "0.5px solid var(--color-border-strong)", fontSize: "15px",
            }}>تعرف على المنصة</Link>
          </div>
        </div>
      </section>
    </>
  );
}
