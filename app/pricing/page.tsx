"use client";
import { useState } from "react";
import Link from "next/link";
import { Icon } from "@/components/icons";

type BillingType = "monthly" | "biannual" | "annual";

const plans = {
  monthly: {
    basic: { p: 20, period: "شهرياً", rows: [] as {cls:string,icon:string,text:string}[] },
    pro:   { p: 100, period: "شهرياً", rows: [] as {cls:string,icon:string,text:string}[] },
    ent:   { p: 200, period: "شهرياً", rows: [] as {cls:string,icon:string,text:string}[] },
  },
  biannual: {
    basic: { p: 18, period: "شهرياً (٦ أشهر)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ١٠٪ على الباقة السداسية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ١٠٨$ بدلاً من ١٢٠$ (توفير ١٢$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهر مجاني عند التعاقد" },
    ]},
    pro:   { p: 85, period: "شهرياً (٦ أشهر)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ١٥٪ على الباقة السداسية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ٥١٠$ بدلاً من ٦٠٠$ (توفير ٩٠$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهر مجاني عند التعاقد" },
    ]},
    ent:   { p: 160, period: "شهرياً (٦ أشهر)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ٢٠٪ على الباقة السداسية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ٩٦٠$ بدلاً من ١٢٠٠$ (توفير ٢٤٠$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهر مجاني عند التعاقد" },
    ]},
  },
  annual: {
    basic: { p: 17, period: "شهرياً (سنوي)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ١٥٪ على الباقة السنوية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ٢٠٤$ بدلاً من ٢٤٠$ (توفير ٣٦$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهران مجانيان عند التعاقد" },
    ]},
    pro:   { p: 80, period: "شهرياً (سنوي)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ٢٠٪ على الباقة السنوية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ٩٦٠$ بدلاً من ١٢٠٠$ (توفير ٢٤٠$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهران مجانيان عند التعاقد" },
    ]},
    ent:   { p: 150, period: "شهرياً (سنوي)", rows: [
      { cls: "discount", icon: "discount", text: "خصم ٢٥٪ على الباقة السنوية" },
      { cls: "saving",   icon: "calculator", text: "تدفع ١٨٠٠$ بدلاً من ٢٤٠٠$ (توفير ٦٠٠$)" },
      { cls: "free",     icon: "calendar-plus", text: "+ شهران مجانيان عند التعاقد" },
    ]},
  },
};

const infoRowStyle = (cls: string) => {
  const base = { display:"flex", alignItems:"center", gap:"6px", fontSize:"12px", borderRadius:"6px", padding:"5px 8px" };
  if (cls === "discount") return { ...base, background:"rgba(245,158,11,0.12)", color:"#F59E0B" };
  if (cls === "saving")   return { ...base, background:"rgba(255,255,255,0.04)", color:"var(--color-text-muted)", border:"0.5px solid rgba(255,255,255,0.08)" };
  if (cls === "free")     return { ...base, background:"rgba(34,197,94,0.1)", color:"#22C55E", border:"0.5px solid rgba(34,197,94,0.2)" };
  return base;
};

const compareRows = [
  { label: "البرنامج الكامل للمقاولات", basic: true, pro: true, ent: true },
  { label: "تقارير متقدمة ومراجعة انحرافات", basic: false, pro: true, ent: true },
  { label: "المجتمع الحصري للمقاولين", basic: false, pro: true, ent: true },
  { label: "سوق المحاسبين المعتمدين", basic: false, pro: false, ent: true },
  { label: "تجربة مجانية", basic: "شهر", pro: "شهر", ent: "شهر" },
  { label: "خصم الـ ٦ أشهر", basic: "١٠٪", pro: "١٥٪", ent: "٢٠٪" },
  { label: "أشهر مجانية عند ٦ أشهر", basic: "+ شهر", pro: "+ شهر", ent: "+ شهر" },
  { label: "خصم السنوي", basic: "١٥٪", pro: "٢٠٪", ent: "٢٥٪" },
  { label: "أشهر مجانية عند السنوي", basic: "+ شهران", pro: "+ شهران", ent: "+ شهران" },
];

function PlanCard({ planKey, billing, featured }: { planKey: "basic"|"pro"|"ent", billing: BillingType, featured?: boolean }) {
  const data = plans[billing][planKey];
  const names = { basic: "الأساسية", pro: "الاحترافية", ent: "المتكاملة" };
  const extras: { icon: string; text: string }[] = planKey === "pro" ? [
    { icon: "chart-bar", text: "تقارير متقدمة وتحليل مالي" },
    { icon: "git-compare", text: "مراجعة الانحرافات لكل مشروع" },
    { icon: "users-group", text: "المجتمع الحصري للمقاولين" },
  ] : planKey === "ent" ? [
    { icon: "briefcase", text: "سوق المحاسبين المعتمدين" },
    { icon: "certificate", text: "اعتماد أوتوبان التخصصي" },
  ] : [];

  return (
    <div style={{
      background: "var(--color-surface-2)", border: featured ? "2px solid var(--color-accent)" : "0.5px solid var(--color-border)",
      borderRadius: "var(--radius-lg)", padding: "1.5rem", position: "relative",
      display: "flex", flexDirection: "column",
    }}>
      {featured && (
        <div style={{
          position: "absolute", top: -12, right: "50%", transform: "translateX(50%)",
          background: "var(--color-accent)", color: "white",
          fontSize: "11px", padding: "3px 14px", borderRadius: "20px", whiteSpace: "nowrap",
        }}>الأكثر طلباً</div>
      )}
      <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "6px" }}>{names[planKey]}</div>
      <div style={{ fontSize: "36px", fontWeight: 500, lineHeight: 1 }}>
        <sup style={{ fontSize: "16px", fontWeight: 400, verticalAlign: "super" }}>$</sup>{data.p}
      </div>
      <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginTop: "3px", marginBottom: "10px" }}>{data.period}</div>

      <div style={{ minHeight: "84px", display: "flex", flexDirection: "column", gap: "5px", marginBottom: "12px" }}>
        {data.rows.length > 0 ? data.rows.map((r, i) => (
          <div key={i} style={infoRowStyle(r.cls)}>
            <Icon name={r.icon} size={13} style={{ flexShrink: 0 }} />
            <span>{r.text}</span>
          </div>
        )) : <div style={{ height: "84px" }} />}
      </div>

      <div style={{ borderTop: "0.5px solid var(--color-border)", margin: "0.75rem 0" }} />

      {extras.length > 0 ? (
        <>
          <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "8px" }}>
            {planKey === "ent" ? "كل ما في الاحترافية، يُضاف إليه:" : "إضافات على البرنامج الكامل:"}
          </div>
          <ul style={{ listStyle: "none", flex: 1, marginBottom: "1.25rem" }}>
            {extras.map((e, i) => (
              <li key={i} style={{ fontSize: "13px", padding: "5px 0", display: "flex", alignItems: "flex-start", gap: "8px", borderBottom: "0.5px solid var(--color-border)" }}>
                <Icon name={e.icon} size={15} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: "1px" }} />
                {e.text}
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div style={{ fontSize: "11px", color: "var(--color-text-muted)", marginBottom: "8px" }}>لا توجد إضافات في هذه الباقة</div>
          <div style={{ fontSize: "13px", color: "var(--color-text-muted)", flex: 1, marginBottom: "1.25rem", lineHeight: 1.6 }}>
            البرنامج الكامل للمقاولات — مثالي للمقاول الفردي أو الشركة الناشئة.
          </div>
        </>
      )}

      <button style={{
        width: "100%", padding: "10px",
        borderRadius: "var(--radius)", fontSize: "14px", cursor: "pointer",
        marginTop: "auto",
        background: featured ? "var(--color-accent)" : "transparent",
        color: featured ? "white" : "var(--color-text)",
        border: featured ? "none" : "0.5px solid var(--color-border-strong)",
      }}>ابدأ شهرك المجاني</button>
    </div>
  );
}

export default function PricingPage() {
  const [billing, setBilling] = useState<BillingType>("monthly");

  const tabs: { key: BillingType; label: string; pill?: string }[] = [
    { key: "monthly", label: "شهري" },
    { key: "biannual", label: "٦ أشهر", pill: "+ شهر مجاني" },
    { key: "annual", label: "سنوي", pill: "+ شهران مجانيان" },
  ];

  return (
    <>
      <section style={{ padding: "3rem 1.5rem 1.5rem", textAlign: "center" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الأسعار</p>
        <h1 style={{ fontSize: "36px", fontWeight: 500, marginBottom: "0.5rem" }}>سعر واضح، بدون مفاجآت</h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>
          جميع الباقات تشمل البرنامج كاملاً — الفرق فقط في الخدمات الإضافية
        </p>

        {/* Base box */}
        <div style={{
          background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
          borderRadius: "var(--radius-lg)", padding: "1rem 1.5rem",
          maxWidth: "700px", margin: "0 auto 1.25rem",
          display: "flex", alignItems: "center", gap: "12px",
        }}>
          <div style={{
            width: 40, height: 40, background: "var(--color-accent-light)",
            borderRadius: "var(--radius)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
          }}>
            <Icon name="building-skyscraper" size={20} style={{ color: "var(--color-accent)" }} />
          </div>
          <div style={{ textAlign: "right" }}>
            <strong style={{ fontSize: "14px", display: "block", marginBottom: "2px" }}>
              جميع الباقات تشمل: البرنامج المحاسبي الكامل المخصص للمقاولات
            </strong>
            <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>
              محاسبة، زاتكا، استقطاعات، دفعة مقدمة، رواتب WPS — بدون استثناء
            </span>
          </div>
        </div>

        {/* Trial banner */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "rgba(34,197,94,0.1)", border: "0.5px solid rgba(34,197,94,0.2)",
          borderRadius: "var(--radius)", padding: "8px 20px",
          fontSize: "13px", color: "#22C55E", marginBottom: "2rem",
        }}>
          <Icon name="gift" size={14} /> شهر تجربة مجاني لجميع الباقات — بدون بطاقة
        </div>

        {/* Billing tabs */}
        <div style={{
          display: "inline-flex", border: "0.5px solid var(--color-border-strong)",
          borderRadius: "var(--radius)", overflow: "hidden", marginBottom: "2.5rem",
        }}>
          {tabs.map(t => (
            <button key={t.key} onClick={() => setBilling(t.key)} aria-pressed={billing === t.key} style={{
              padding: "8px 20px", fontSize: "14px", cursor: "pointer",
              background: billing === t.key ? "var(--color-accent)" : "transparent",
              color: billing === t.key ? "white" : "var(--color-text-secondary)",
              border: "none", position: "relative",
            }}>
              {t.label}
              {t.pill && (
                <span style={{
                  position: "absolute", top: -8, left: -6,
                  background: "#16A34A", color: "white",
                  fontSize: "10px", padding: "2px 6px", borderRadius: "10px",
                  whiteSpace: "nowrap",
                }}>{t.pill}</span>
              )}
            </button>
          ))}
        </div>

        {/* Plans */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px", maxWidth: "900px", margin: "0 auto 2rem",
        }}>
          <PlanCard planKey="basic" billing={billing} />
          <PlanCard planKey="pro" billing={billing} featured />
          <PlanCard planKey="ent" billing={billing} />
        </div>

        {/* Summary box for non-monthly */}
        {billing !== "monthly" && (
          <div style={{
            background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
            borderRadius: "var(--radius-lg)", padding: "1.25rem",
            maxWidth: "900px", margin: "0 auto 2rem",
            display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px,1fr))", gap: "12px",
          }}>
            {[
              { num: billing === "annual" ? "١٨٠٠$" : "٩٦٠$", label: "المتكاملة — تدفع" },
              { num: billing === "annual" ? "٦٠٠$" : "٢٤٠$", label: "توفير على السعر الشهري" },
              { num: billing === "annual" ? "١٤ شهراً" : "٧ أشهر", label: "مدة الخدمة الفعلية" },
              { num: "شهر مجاناً", label: "تجربة قبل أي دفع" },
            ].map(s => (
              <div key={s.label} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "20px", fontWeight: 500, color: "var(--color-accent)" }}>{s.num}</div>
                <div style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Compare table */}
      <section style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto 4rem" }}>
        <h2 style={{ fontSize: "20px", fontWeight: 500, textAlign: "center", marginBottom: "1.5rem" }}>مقارنة الباقات</h2>
        <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "13px", minWidth: "480px" }}>
          <thead>
            <tr>
              {["البند", "الأساسية", "الاحترافية", "المتكاملة"].map(h => (
                <th key={h} style={{
                  background: "var(--color-surface)", padding: "10px 12px",
                  textAlign: h === "البند" ? "right" : "center",
                  border: "0.5px solid var(--color-border)", fontWeight: 500,
                }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareRows.map((row, i) => (
              <tr key={row.label} style={{ background: i % 2 === 0 ? "transparent" : "rgba(255,255,255,0.02)" }}>
                <td style={{ padding: "9px 12px", border: "0.5px solid var(--color-border)", color: "var(--color-text-secondary)", textAlign: "right" }}>{row.label}</td>
                {(["basic", "pro", "ent"] as const).map(k => {
                  const val = row[k];
                  return (
                    <td key={k} style={{ padding: "9px 12px", border: "0.5px solid var(--color-border)", textAlign: "center" }}>
                      {val === true ? <Icon name="check" size={16} style={{ color: "#22C55E" }} />
                       : val === false ? <Icon name="x" size={16} style={{ color: "var(--color-text-muted)" }} />
                       : <span style={{ fontSize: "12px", background: "var(--color-accent-light)", color: "var(--color-accent)", padding: "2px 7px", borderRadius: "8px" }}>{val}</span>}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </section>

      {/* Payment methods */}
      <section style={{ padding: "2rem 1.5rem", background: "var(--color-surface)" }}>
        <p style={{ fontSize: "12px", color: "var(--color-accent)", textAlign: "center", marginBottom: "6px" }}>طرق الدفع</p>
        <h2 style={{ fontSize: "24px", fontWeight: 500, textAlign: "center", marginBottom: "1.5rem" }}>ادفع بالطريقة التي تناسبك</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", maxWidth: "700px", margin: "0 auto" }}>
          {[
            { icon: "credit-card", label: "فيزا / ماستركارد" },
            { icon: "device-mobile", label: "Apple Pay" },
            { icon: "currency-riyal", label: "مدى" },
            { icon: "building-bank", label: "تحويل بنكي" },
            { icon: "file-invoice", label: "فاتورة للشركات" },
          ].map(m => (
            <div key={m.label} style={{
              display: "flex", alignItems: "center", gap: "8px",
              background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
              borderRadius: "var(--radius)", padding: "10px 16px",
              fontSize: "13px",
            }}>
              <Icon name={m.icon} size={18} style={{ color: "var(--color-accent)" }} />
              {m.label}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
          borderRadius: "var(--radius-lg)", padding: "2rem 1.5rem", textAlign: "center",
        }}>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.75rem" }}>ابدأ اليوم — شهر مجاني بدون بطاقة</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            جرّب أوتوبان الآن واكتشف كيف تبدو المحاسبة حين تُبنى خصيصاً للمقاولين.
          </p>
          <Link href="#" style={{
            background: "var(--color-accent)", color: "white",
            padding: "12px 30px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
          }}>أنشئ حسابك مجاناً</Link>
        </div>
      </section>
    </>
  );
}
