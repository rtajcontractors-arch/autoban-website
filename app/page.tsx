import Link from "next/link";
import { Icon } from "@/components/icons";
import Reveal from "@/components/Reveal";

const features = [
  { icon: "receipt-2", title: "فواتير زاتكا", desc: "متوافق بالكامل مع المرحلتين الأولى والثانية" },
  { icon: "lock-dollar", title: "الاستقطاعات والضمانات", desc: "احتساب تلقائي لكل أنواع الاستقطاع" },
  { icon: "cash", title: "الدفعة المقدمة", desc: "تتبع الصرف والاسترداد التدريجي تلقائياً" },
  { icon: "building-skyscraper", title: "تعدد المشاريع", desc: "عزل كامل للتكاليف لكل مشروع" },
  { icon: "users", title: "رواتب WPS", desc: "متوافق مع نظام حماية الأجور السعودي" },
  { icon: "chart-bar", title: "تقارير متقدمة", desc: "تحليل مالي ومراجعة الانحرافات" },
];

const pillars = [
  { icon: "calculator", title: "البرنامج المحاسبي", desc: "محاسبة مقاولات كاملة بكل المعايير" },
  { icon: "users-group", title: "المجتمع الحصري", desc: "شبكة مقاولين ومحاسبين وموردين" },
  { icon: "briefcase", title: "سوق المهنيين", desc: "محاسبون معتمدون متخصصون في المقاولات" },
  { icon: "books", title: "المكتبة المعرفية", desc: "محتوى رسمي وخبرات ميدانية" },
];

const stats = [
  { num: "متخصص", label: "للمقاولات فقط" },
  { num: "زاتكا", label: "متوافق بالكامل" },
  { num: "٤ دول", label: "السعودية، الكويت، قطر، مصر" },
  { num: "سحابي", label: "وصول من أي مكان وجهاز" },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        padding: "3rem 1.5rem 2rem", textAlign: "center", maxWidth: "1100px", margin: "0 auto",
        position: "relative", background: "radial-gradient(circle at 50% 35%, rgba(59,123,246,0.15), transparent 65%)",
      }}>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          background: "var(--color-accent-light)", color: "var(--color-accent)",
          fontSize: "13px", padding: "7px 18px", borderRadius: "20px",
          border: "1.5px solid var(--color-accent-border)", marginBottom: "1.5rem",
        }}>
          <Icon name="building-skyscraper" size={15} /> المنصة المتكاملة لقطاع المقاولات
        </div>

        <h1 style={{
          fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500,
          lineHeight: 1.2, color: "var(--color-text)",
          marginBottom: "1.25rem", letterSpacing: "-1px",
        }}>
          كل ما يحتاجه المقاول
          <br />
          <span style={{ color: "var(--color-accent)" }}>في مكان واحد</span>
        </h1>

        <p style={{
          fontSize: "17px", color: "var(--color-text-secondary)",
          lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2.5rem",
        }}>
          برنامج محاسبة مخصص للمقاولين + مجتمع حصري + سوق محاسبين معتمدين — أوتوبان ليس برنامجاً، هو منظومة.
        </p>

        <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          <Link href="/pricing" className="btn-scale" style={{
            background: "var(--color-accent)", color: "white",
            padding: "13px 30px", borderRadius: "var(--radius)",
            fontSize: "15px", fontWeight: 500,
          }}>ابدأ شهرك المجاني</Link>
          <Link href="/features" className="btn-scale" style={{
            background: "transparent", color: "var(--color-text)",
            padding: "13px 30px", borderRadius: "var(--radius)",
            border: "0.5px solid var(--color-border-strong)", fontSize: "15px",
          }}>تعرف على المميزات ←</Link>
        </div>

        {/* Stats */}
        <div style={{
          display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap",
        }}>
          {stats.map(s => (
            <div key={s.num} style={{
              textAlign: "center", background: "var(--color-surface)",
              border: "0.5px solid var(--color-border)", borderRadius: "var(--radius-lg)",
              padding: "1rem 1.75rem",
            }}>
              <div style={{ fontSize: "24px", fontWeight: 500, color: "var(--color-text)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* GOLDEN QUOTE */}
      <section style={{ padding: "0 1.5rem 2.5rem" }}>
        <Reveal>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem", textAlign: "center",
        }}>
          <div style={{ fontSize: "clamp(18px, 3vw, 26px)", fontWeight: 500, color: "var(--color-text)", lineHeight: 1.4 }}>
            &quot;سهل للمقاول — دقيق للمحاسب&quot;
          </div>
          <div style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginTop: "8px" }}>
            هذه الجملة هي جوهر أوتوبان — وهو ما لا يقدمه أي منافس في السوق اليوم
          </div>
        </div>
        </Reveal>
      </section>

      {/* PILLARS */}
      <section style={{ padding: "2rem 1.5rem", background: "var(--color-surface)" }}>
        <Reveal>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", textAlign: "center", marginBottom: "6px" }}>المنصة</p>
          <h2 style={{ fontSize: "28px", fontWeight: 500, textAlign: "center", marginBottom: "0.5rem" }}>أربعة أعمدة، منظومة واحدة</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", textAlign: "center", marginBottom: "2.5rem" }}>
            كلما ضاق التخصص، ارتفعت القيمة
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {pillars.map(p => (
              <div key={p.title} className="hover-card" style={{
                background: "var(--color-surface-2)",
                borderRadius: "var(--radius-lg)", padding: "1.5rem",
              }}>
                <div style={{
                  width: 40, height: 40, background: "var(--color-accent-light)",
                  borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "1rem",
                }}>
                  <Icon name={p.icon} size={20} style={{ color: "var(--color-accent)" }} />
                </div>
                <h3 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "5px" }}>{p.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </Reveal>
      </section>

      {/* FEATURES */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <Reveal>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", textAlign: "center", marginBottom: "6px" }}>المميزات</p>
          <h2 style={{ fontSize: "28px", fontWeight: 500, textAlign: "center", marginBottom: "0.5rem" }}>مُصمَّم لما يشغل بال المقاول</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", textAlign: "center", marginBottom: "2.5rem" }}>
            برامج المحاسبة العامة لا تفهم هذه التفاصيل — أوتوبان بُني لها
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "14px" }}>
            {features.map(f => (
              <div key={f.title} className="hover-card" style={{
                background: "var(--color-surface)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem",
              }}>
                <Icon name={f.icon} size={22} style={{ color: "var(--color-accent)", display: "block", marginBottom: "10px" }} />
                <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "4px" }}>{f.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <Link href="/features" style={{
              color: "var(--color-accent)", fontSize: "14px",
              border: "0.5px solid var(--color-accent-border)",
              padding: "9px 22px", borderRadius: "var(--radius)",
            }}>عرض جميع المميزات ←</Link>
          </div>
        </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section style={{ padding: "2rem 1.5rem" }}>
        <Reveal>
        <div style={{
          maxWidth: "700px", margin: "0 auto",
          background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
          borderRadius: "var(--radius-lg)", padding: "2.5rem 1.5rem", textAlign: "center",
        }}>
          <h2 style={{ fontSize: "26px", fontWeight: 500, marginBottom: "0.75rem" }}>ابدأ اليوم — شهر مجاني بدون بطاقة</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "2rem", lineHeight: 1.7 }}>
            جرّب أوتوبان الآن واكتشف كيف تبدو المحاسبة حين تُبنى خصيصاً للمقاولين.
          </p>
          <Link href="/pricing" className="btn-scale" style={{
            background: "var(--color-accent)", color: "white",
            padding: "13px 32px", borderRadius: "var(--radius)",
            fontSize: "15px", fontWeight: 500,
          }}>أنشئ حسابك مجاناً</Link>
        </div>
        </Reveal>
      </section>
    </>
  );
}
