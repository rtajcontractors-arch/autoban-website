import Link from "next/link";

const mainFeatures = [
  {
    icon: "ti-receipt-2",
    title: "فوترة زاتكا — المرحلتان",
    desc: "إصدار الفواتير الإلكترونية المتوافقة مع متطلبات هيئة الزكاة والضريبة والجمارك، المرحلة الأولى والثانية — بضغطة واحدة.",
    bullets: ["ملف XML متوافق مع ZATCA", "رمز QR مدمج في كل فاتورة", "إرسال تلقائي لبوابة زاتكا", "أرشفة وبحث فوري"],
    visual: [
      { label: "رقم الفاتورة", value: "INV-2026-0412" },
      { label: "المبلغ قبل الضريبة", value: "٥٠,٠٠٠ ر.س" },
      { label: "ضريبة القيمة المضافة ١٥٪", value: "٧,٥٠٠ ر.س" },
      { label: "الإجمالي", value: "٥٧,٥٠٠ ر.س", accent: true },
      { label: "حالة زاتكا", badge: "مُرسَلة ✓", green: true },
    ],
  },
  {
    icon: "ti-lock-dollar",
    title: "الاستقطاعات والدفعة المقدمة",
    desc: "أكثر ما يُعقّد محاسبة المقاولات — أوتوبان يحسبها تلقائياً ويتابعها على مدى دورة العقد بالكامل.",
    bullets: ["احتساب تلقائي لنسب الاستقطاع", "تتبع الدفعة المقدمة واسترداداتها", "ضمانات الحسن الأداء لكل عقد", "تنبيهات عند استحقاق الاسترداد"],
    visual: [
      { label: "قيمة العقد", value: "٢,٠٠٠,٠٠٠ ر.س" },
      { label: "دفعة مقدمة ١٠٪", value: "٢٠٠,٠٠٠ ر.س" },
      { label: "استقطاع حسن الأداء ٥٪", badge: "١٠٠,٠٠٠ ر.س", yellow: true },
      { label: "المُستردّ حتى الآن", value: "٦٠,٠٠٠ ر.س" },
      { label: "المتبقي محجوز", badge: "٤٠,٠٠٠ ر.س", blue: true },
    ],
    reverse: true,
  },
  {
    icon: "ti-building-skyscraper",
    title: "إدارة تعدد المشاريع",
    desc: "كل مشروع له حساباته المستقلة — تكاليف، إيرادات، ربحية. ولوحة تحكم موحدة ترى الصورة الكاملة.",
    bullets: ["عزل كامل للتكاليف لكل مشروع", "مقارنة ربحية المشاريع", "تقرير إتمام نسبة الإنجاز", "مشاريع غير محدودة"],
    visual: [
      { label: "مشروع أ — برج سكني", badge: "ربح ٢٣٪", green: true },
      { label: "مشروع ب — طريق", badge: "تعادل ٢٪", yellow: true },
      { label: "مشروع ج — مدرسة", badge: "ربح ١٨٪", green: true },
      { label: "إجمالي الإيرادات", value: "٨.٣ م ر.س", accent: true },
    ],
  },
  {
    icon: "ti-users",
    title: "الرواتب ونظام WPS",
    desc: "كشوف رواتب متوافقة مع نظام العمل السعودي ونظام حماية الأجور — من الاحتساب حتى الرفع تلقائياً.",
    bullets: ["احتساب الراتب الأساسي والبدلات", "خصومات التأمينات الاجتماعية", "توليد ملف WPS جاهز", "إشعارات الدفع للموظفين"],
    visual: [
      { label: "إجمالي الرواتب", value: "٣٢٠,٠٠٠ ر.س" },
      { label: "التأمينات الاجتماعية", value: "٣٦,٨٠٠ ر.س" },
      { label: "عدد الموظفين", value: "٨٥ موظف" },
      { label: "ملف WPS", badge: "جاهز للرفع ✓", green: true },
    ],
    reverse: true,
  },
  {
    icon: "ti-report-analytics",
    title: "التقارير المالية الكاملة",
    desc: "قوائم مالية معيارية طبقاً للمعايير الدولية والمحلية — جاهزة في ثوانٍ لا أيام.",
    bullets: ["الميزانية العمومية", "قائمة الدخل", "قائمة التدفقات النقدية", "تقارير ربحية المشاريع", "مراجعة الانحرافات"],
    visual: [
      { label: "الإيرادات", value: "٤.٢ م ر.س" },
      { label: "التكاليف المباشرة", value: "٣.١ م ر.س" },
      { label: "إجمالي الربح", badge: "١.١ م ر.س", green: true },
      { label: "هامش الربح", badge: "٢٦.٢٪", green: true },
      { label: "انحراف عن الميزانية", badge: "+٣.١٪", yellow: true },
    ],
  },
];

const miniFeatures = [
  { icon: "ti-building", title: "تعدد الشركات", desc: "أدر أكثر من شركة أو فرع من حساب واحد مع عزل كامل للبيانات." },
  { icon: "ti-device-mobile", title: "واجهة عربية كاملة", desc: "النظام بالكامل بالعربية، متجاوب مع الجوال والحاسب واللوحي." },
  { icon: "ti-cloud", title: "سحابي بالكامل", desc: "لا تثبيت، لا صيانة — وصول من أي مكان وأي جهاز في أي وقت." },
  { icon: "ti-shield-check", title: "أمان عالي المستوى", desc: "تشفير AES-256 ونسخ احتياطية يومية على خوادم منطقة الشرق الأوسط." },
  { icon: "ti-api", title: "تكامل API", desc: "ربط أوتوبان مع أنظمتك الحالية عبر API مفتوح وموثق." },
  { icon: "ti-bell", title: "تنبيهات ذكية", desc: "إشعارات تلقائية عند استحقاق الدفعات والاستقطاعات وتواريخ العقود." },
];

type VisualRow = {
  label: string;
  value?: string;
  badge?: string;
  accent?: boolean;
  green?: boolean;
  yellow?: boolean;
  blue?: boolean;
};

function VisualCard({ rows }: { rows: VisualRow[] }) {
  return (
    <div style={{
      background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
      borderRadius: "var(--radius-lg)", padding: "1.5rem",
      display: "flex", flexDirection: "column", gap: "8px",
    }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
          borderRadius: "var(--radius)", padding: "8px 12px",
        }}>
          <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{r.label}</span>
          {r.badge ? (
            <span style={{
              fontSize: "11px", padding: "2px 8px", borderRadius: "8px",
              background: r.green ? "rgba(34,197,94,0.12)" : r.yellow ? "rgba(245,158,11,0.12)" : "var(--color-accent-light)",
              color: r.green ? "#22C55E" : r.yellow ? "#F59E0B" : "var(--color-accent)",
            }}>{r.badge}</span>
          ) : (
            <span style={{ fontSize: "13px", fontWeight: 500, color: r.accent ? "var(--color-accent)" : "var(--color-text)" }}>{r.value}</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FeaturesPage() {
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
          <i className="ti ti-sparkles" /> المميزات
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          برنامج يفهم
          <br /><span style={{ color: "var(--color-accent)" }}>طبيعة عملك</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto" }}>
          كل ميزة في أوتوبان بُنيت بناءً على تحدٍّ حقيقي يواجهه المقاول يومياً — لا مميزات تسويقية لا تُستخدم.
        </p>
      </section>

      {/* Main Features */}
      {mainFeatures.map((f, idx) => (
        <section key={f.title} style={{
          padding: "2.5rem 1.5rem",
          background: idx % 2 !== 0 ? "var(--color-surface)" : "transparent",
        }}>
          <div style={{
            maxWidth: "900px", margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            alignItems: "center",
            direction: f.reverse ? "ltr" : "rtl",
          }}>
            <div style={{ direction: "rtl" }}>
              <div style={{
                width: 44, height: 44, background: "var(--color-accent-light)",
                borderRadius: "var(--radius)", display: "flex",
                alignItems: "center", justifyContent: "center", marginBottom: "1rem",
              }}>
                <i className={`ti ${f.icon}`} style={{ color: "var(--color-accent)", fontSize: 22 }} />
              </div>
              <h2 style={{ fontSize: "22px", fontWeight: 500, marginBottom: "0.75rem" }}>{f.title}</h2>
              <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{f.desc}</p>
              <ul style={{ listStyle: "none" }}>
                {f.bullets.map(b => (
                  <li key={b} style={{
                    fontSize: "13px", padding: "6px 0",
                    display: "flex", alignItems: "flex-start", gap: "8px",
                    borderBottom: "0.5px solid var(--color-border)",
                  }}>
                    <i className="ti ti-check" style={{ color: "var(--color-accent)", fontSize: 14, flexShrink: 0, marginTop: 2 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ direction: "rtl" }}>
              <VisualCard rows={f.visual} />
            </div>
          </div>
        </section>
      ))}

      {/* Mini features */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>المزيد</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>مميزات تكمل المنظومة</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>تفاصيل تجعل العمل اليومي أسرع وأدق</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {miniFeatures.map(m => (
              <div key={m.title} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem",
              }}>
                <i className={`ti ${m.icon}`} style={{ color: "var(--color-accent)", fontSize: 20, display: "block", marginBottom: "8px" }} />
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{m.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{m.desc}</p>
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
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.75rem" }}>جرّب كل هذه المميزات مجاناً</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            شهر تجريبي كامل — بدون بطاقة ائتمانية، بصلاحيات كاملة على جميع المميزات.
          </p>
          <div style={{ display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/pricing" style={{
              background: "var(--color-accent)", color: "white",
              padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
            }}>ابدأ شهرك المجاني</Link>
            <Link href="/pricing" style={{
              background: "transparent", color: "var(--color-text)",
              padding: "12px 28px", borderRadius: "var(--radius)",
              border: "0.5px solid var(--color-border-strong)", fontSize: "15px",
            }}>عرض الأسعار</Link>
          </div>
        </div>
      </section>
    </>
  );
}
