import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "المكتبة المعرفية — أوتوبان",
  description: "محتوى رسمي وخبرات ميدانية في محاسبة المقاولات، زاتكا والضريبة، الاستقطاعات، ورواتب WPS — مرجعك الشامل لقطاع المقاولات.",
};

const categories = [
  { icon: "ti-calculator", title: "محاسبة المقاولات", desc: "معايير، قيود، تقارير — الأساس المحاسبي للقطاع.", count: "٤٢" },
  { icon: "ti-receipt-2", title: "زاتكا والضريبة", desc: "الفوترة الإلكترونية، VAT، الإقرارات الضريبية.", count: "٢٨" },
  { icon: "ti-file-contract", title: "العقود والمطالبات", desc: "بنود العقود، المطالبات، تسوية النزاعات.", count: "٣٥" },
  { icon: "ti-users", title: "نظام العمل والرواتب", desc: "نظام العمل السعودي، WPS، التأمينات.", count: "٢٢" },
  { icon: "ti-building-skyscraper", title: "إدارة المشاريع", desc: "تخطيط، جدولة، تكاليف، متابعة الإنجاز.", count: "١٨" },
  { icon: "ti-lock-dollar", title: "الاستقطاعات والضمانات", desc: "احتساب، متابعة، استرداد — دليل عملي شامل.", count: "١٥" },
  { icon: "ti-certificate", title: "المعايير المحاسبية", desc: "IFRS، SOCPA، المعايير المصرية والخليجية.", count: "٣١" },
  { icon: "ti-trending-up", title: "التحليل المالي", desc: "قراءة التقارير، مؤشرات الأداء، قرارات التسعير.", count: "٢٤" },
];

const articles = [
  { icon: "ti-receipt-2", cat: "زاتكا", official: true, title: "دليل الفوترة الإلكترونية للمقاولين — المرحلة الثانية", desc: "شرح شامل لمتطلبات زاتكا في مرحلة الربط مع التركيز على خصوصية فواتير المقاولات.", time: "٨ دقائق" },
  { icon: "ti-lock-dollar", cat: "استقطاعات", official: true, title: "كيف تحسب الاستقطاع وضمان الحسن الأداء بدقة؟", desc: "دليل عملي خطوة بخطوة لاحتساب الاستقطاعات على الدفعات الوسيطة والنهائية.", time: "١٢ دقيقة" },
  { icon: "ti-file-contract", cat: "عقود", official: false, title: "٥ بنود تحتاجها في كل عقد مقاولات لحماية حقوقك", desc: "من واقع تجربة ١٥ سنة في القطاع — بنود لا تتنازل عنها قبل التوقيع.", time: "٦ دقائق" },
  { icon: "ti-trending-up", cat: "تحليل", official: true, title: "كيف تقرأ قائمة الدخل لمشروع مقاولات؟", desc: "شرح مبسط للقوائم المالية بأمثلة من واقع مشاريع البناء والتشييد.", time: "١٠ دقائق" },
  { icon: "ti-users", cat: "رواتب", official: true, title: "نظام WPS للمقاولين — من الاحتساب حتى الرفع", desc: "دليل عملي لإعداد ملف WPS المتوافق مع متطلبات وزارة الموارد البشرية.", time: "٧ دقائق" },
  { icon: "ti-alert-triangle", cat: "دروس", official: false, title: "أخطاء محاسبية شائعة في مشاريع المقاولات وكيف تتجنبها", desc: "من تجربة محاسب متخصص — أكثر ١٠ أخطاء تكررت في الشركات الصغيرة والمتوسطة.", time: "٩ دقائق" },
];

const docs = [
  { icon: "ti-file-contract", title: "نموذج عقد مقاولات", desc: "عقد رئيسي شامل البنود الأساسية" },
  { icon: "ti-file-contract", title: "نموذج عقد باطن", desc: "عقد مقاول باطن مع بنود الضمان" },
  { icon: "ti-calculator", title: "جدول احتساب الاستقطاعات", desc: "Excel جاهز لكل أنواع الاستقطاع" },
  { icon: "ti-report", title: "تقرير إتمام المشروع", desc: "قالب تقرير الإنجاز للعميل" },
  { icon: "ti-cash", title: "جدول الدفعة المقدمة", desc: "تتبع صرف الدفعة واسترداداتها" },
  { icon: "ti-file-invoice", title: "نموذج كشف حساب", desc: "كشف حساب بين المقاول والعميل" },
];

const contribSteps = ["١ — اكتب مقالتك", "٢ — أرسلها للمراجعة", "٣ — تُنشر باسمك", "٤ — المجتمع يقيّمها"];

export default function LibraryPage() {
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
          <i className="ti ti-books" /> المكتبة المعرفية
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          المرجع المتخصص
          <br /><span style={{ color: "var(--color-accent)" }}>لقطاع المقاولات</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2rem" }}>
          مكتبة معرفية شاملة تجمع المحتوى الرسمي من فريق أوتوبان وخبرات المجتمع الميدانية — كل ما يحتاجه المقاول والمحاسب في مكان واحد.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", paddingTop: "2rem", borderTop: "0.5px solid var(--color-border)", flexWrap: "wrap" }}>
          {[{ num: "رسمي", label: "محتوى موثوق" }, { num: "+ مجتمع", label: "خبرات ميدانية" }, { num: "مجاني", label: "للمشتركين" }].map(s => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 500, color: "var(--color-accent)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* SOURCES */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>المحتوى</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>مصدران، قيمة مضاعفة</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>المحتوى الرسمي يبني المصداقية — ومحتوى المجتمع يضيف الحياة الميدانية</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {[
              {
                icon: "ti-building-bank", title: "المحتوى الرسمي", featured: true,
                desc: "يكتبه فريق أوتوبان من متخصصين في المحاسبة والقانون والهندسة.",
                items: ["مقالات تقنية محاسبية موثقة", "شرح اللوائح والأنظمة المحدثة", "نماذج عقود وقوالب جاهزة", "تحديثات زاتكا ونظام العمل"],
              },
              {
                icon: "ti-users", title: "محتوى المجتمع", featured: false,
                desc: "يكتبه المحاسبون والمقاولون من واقع تجاربهم الميدانية.",
                items: ["حالات عملية من مشاريع حقيقية", "دروس مستفادة وأخطاء شائعة", "مقارنات وتحليلات من الميدان", "تقييم المجتمع يضمن الجودة"],
              },
            ].map(s => (
              <div key={s.title} style={{
                background: s.featured ? "var(--color-accent-light)" : "var(--color-surface)",
                border: s.featured ? "0.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.5rem",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  background: s.featured ? "var(--color-accent)" : "var(--color-accent-light)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem",
                }}>
                  <i className={`ti ${s.icon}`} style={{ color: s.featured ? "white" : "var(--color-accent)", fontSize: 22 }} />
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>{s.title}</h3>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginBottom: "1rem", lineHeight: 1.6 }}>{s.desc}</p>
                <ul style={{ listStyle: "none" }}>
                  {s.items.map(item => (
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

      {/* CATEGORIES */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الأقسام</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>تصفح حسب التخصص</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>ثمانية أقسام تغطي كل جوانب قطاع المقاولات</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "12px" }}>
            {categories.map(c => (
              <div key={c.title} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem", cursor: "pointer",
              }}>
                <div style={{
                  width: 38, height: 38, background: "var(--color-accent-light)",
                  borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "0.75rem",
                }}>
                  <i className={`ti ${c.icon}`} style={{ color: "var(--color-accent)", fontSize: 19 }} />
                </div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "3px" }}>{c.title}</h4>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "6px" }}>{c.desc}</p>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{c.count} مقالة</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* ARTICLES */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>أبرز المقالات</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "2rem" }}>محتوى يُفرق</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))", gap: "14px" }}>
            {articles.map(a => (
              <div key={a.title} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", overflow: "hidden", display: "flex", flexDirection: "column",
              }}>
                <div style={{
                  background: "var(--color-accent-light)", height: "80px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  borderBottom: "0.5px solid var(--color-border)",
                }}>
                  <i className={`ti ${a.icon}`} style={{ color: "var(--color-accent)", fontSize: 32 }} />
                </div>
                <div style={{ padding: "1rem", flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-accent)", marginBottom: "5px", display: "flex", alignItems: "center", gap: "4px" }}>
                    <i className={`ti ${a.official ? "ti-building-bank" : "ti-users"}`} style={{ fontSize: 12 }} />
                    {a.official ? "رسمي" : "مجتمع"} — {a.cat}
                  </div>
                  <h4 style={{ fontSize: "14px", fontWeight: 500, marginBottom: "5px", lineHeight: 1.4 }}>{a.title}</h4>
                  <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6, flex: 1, marginBottom: "0.75rem" }}>{a.desc}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "11px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                      <i className="ti ti-clock" style={{ fontSize: 12 }} />{a.time}
                    </span>
                    <span style={{
                      fontSize: "10px", padding: "2px 7px", borderRadius: "8px",
                      background: a.official ? "var(--color-accent-light)" : "rgba(34,197,94,0.1)",
                      color: a.official ? "var(--color-accent)" : "#22C55E",
                      border: a.official ? "0.5px solid var(--color-accent-border)" : "0.5px solid rgba(34,197,94,0.2)",
                    }}>{a.official ? "رسمي" : "مجتمع"}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* DOCS */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>النماذج والوثائق</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>قوالب جاهزة للاستخدام</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>وفّر وقتك — قوالب معتمدة تستخدمها مباشرة</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {docs.map(d => (
              <div key={d.title} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem",
                display: "flex", alignItems: "center", gap: "12px",
              }}>
                <div style={{
                  width: 40, height: 40, background: "var(--color-accent-light)",
                  borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                  justifyContent: "center", flexShrink: 0,
                }}>
                  <i className={`ti ${d.icon}`} style={{ color: "var(--color-accent)", fontSize: 20 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{d.title}</h4>
                  <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "5px" }}>{d.desc}</p>
                  <button style={{
                    fontSize: "11px", background: "var(--color-accent)", color: "white",
                    padding: "3px 10px", borderRadius: "6px", border: "none", cursor: "pointer",
                  }}>تحميل</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* CONTRIBUTE */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px", textAlign: "center" }}>ساهم في المعرفة</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem", textAlign: "center" }}>خبرتك تستحق أن تُشارَك</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem", textAlign: "center" }}>المشتركون في أوتوبان يمكنهم المساهمة بمقالاتهم وتجاربهم</p>
          <div style={{
            background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
            borderRadius: "var(--radius-lg)", padding: "1.5rem",
            maxWidth: "680px", margin: "0 auto",
            display: "flex", alignItems: "flex-start", gap: "16px",
          }}>
            <div style={{
              width: 48, height: 48, background: "var(--color-accent-light)",
              borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <i className="ti ti-edit" style={{ color: "var(--color-accent)", fontSize: 24 }} />
            </div>
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}>كيف تكتب في المكتبة؟</h3>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.75rem" }}>
                إذا كنت محاسباً أو مقاولاً وبالديك خبرة تستحق المشاركة — اكتب مقالتك وشاركها مع مجتمع أوتوبان. فريقنا يراجع كل مقالة قبل نشرها لضمان الجودة.
              </p>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {contribSteps.map(s => (
                  <span key={s} style={{
                    fontSize: "11px", background: "var(--color-accent-light)", color: "var(--color-accent)",
                    border: "0.5px solid var(--color-accent-border)", padding: "3px 10px", borderRadius: "8px",
                  }}>{s}</span>
                ))}
              </div>
            </div>
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
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>استكشف المكتبة المعرفية</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            مئات المقالات والنماذج والأدلة المتخصصة — متاحة لجميع المشتركين في أوتوبان.
          </p>
          <Link href="/pricing" style={{
            background: "var(--color-accent)", color: "white",
            padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
          }}>ابدأ شهرك المجاني</Link>
        </div>
      </section>
    </>
  );
}
