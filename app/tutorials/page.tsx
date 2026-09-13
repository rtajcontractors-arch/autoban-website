import Link from "next/link";

const tracks = [
  { icon: "ti-rocket", title: "البداية السريعة", desc: "إعداد حسابك وأول فاتورة في أقل من ٣٠ دقيقة.", count: "٥ فيديوهات", duration: "٢٥ دقيقة" },
  { icon: "ti-receipt-2", title: "الفوترة وزاتكا", desc: "كل ما يخص الفواتير الإلكترونية والمتطلبات الضريبية.", count: "٧ فيديوهات", duration: "٤٠ دقيقة" },
  { icon: "ti-building-skyscraper", title: "إدارة المشاريع", desc: "إنشاء مشروع، تتبع التكاليف، متابعة الإنجاز.", count: "٦ فيديوهات", duration: "٣٥ دقيقة" },
  { icon: "ti-users", title: "الرواتب وWPS", desc: "كشوف الرواتب وملف WPS خطوة بخطوة.", count: "٤ فيديوهات", duration: "٢٢ دقيقة" },
  { icon: "ti-chart-bar", title: "التقارير والتحليل", desc: "قراءة التقارير المالية وتحليل أداء المشاريع.", count: "٨ فيديوهات", duration: "٥٠ دقيقة" },
];

const videos = [
  { icon: "ti-rocket", cat: "البداية", title: "إعداد شركتك من الصفر", desc: "إنشاء الشركة وضبط الإعدادات الأساسية.", dur: "٥:٣٠", level: "مبتدئ", views: "٢,٤٠٠", green: true },
  { icon: "ti-building-skyscraper", cat: "مشاريع", title: "إضافة مشروعك الأول", desc: "إنشاء مشروع وربطه بالعميل وتحديد الميزانية.", dur: "٤:١٥", level: "مبتدئ", views: "١,٨٠٠", green: true },
  { icon: "ti-receipt-2", cat: "زاتكا", title: "إصدار فاتورة زاتكا خطوة بخطوة", desc: "من إدخال البيانات حتى الإرسال لهيئة زاتكا.", dur: "٦:٤٥", level: "مبتدئ", views: "٣,١٠٠", green: true },
  { icon: "ti-lock-dollar", cat: "استقطاعات", title: "إعداد الاستقطاعات وضمان الحسن الأداء", desc: "كيف تضبط نسب الاستقطاع وتتابع الاسترداد.", dur: "٨:٢٠", level: "متوسط", views: "١,٥٠٠", yellow: true },
  { icon: "ti-cash", cat: "استقطاعات", title: "إدارة الدفعة المقدمة واسترداداتها", desc: "تتبع صرف الدفعة المقدمة على مدى دورة العقد.", dur: "٧:٠٠", level: "متوسط", views: "١,٢٠٠", yellow: true },
  { icon: "ti-users", cat: "رواتب", title: "إعداد كشف الرواتب الشهري", desc: "من إضافة الموظفين حتى تصدير ملف WPS.", dur: "٥:٥٠", level: "مبتدئ", views: "٢,٠٠٠", green: true },
  { icon: "ti-chart-bar", cat: "تقارير", title: "كيف تقرأ تقاريرك المالية؟", desc: "شرح مبسط للميزانية العمومية وقائمة الدخل.", dur: "١٠:١٥", level: "متوسط", views: "٩٨٠", yellow: true },
  { icon: "ti-git-compare", cat: "تقارير", title: "مراجعة الانحرافات بين المخطط والفعلي", desc: "كيف تكتشف الانحرافات المالية قبل أن تتفاقم.", dur: "٩:٣٠", level: "متقدم", views: "٧٥٠", blue: true },
  { icon: "ti-building", cat: "متقدم", title: "إدارة أكثر من شركة من حساب واحد", desc: "إعداد تعدد الشركات والفروع مع العزل الكامل للبيانات.", dur: "٦:٠٠", level: "متقدم", views: "٦٢٠", blue: true },
];

const pathSteps = [
  { num: "١", title: "إعداد شركتك وبياناتها", desc: "الاسم، السنة المالية، بيانات زاتكا", dur: "٥:٣٠" },
  { num: "٢", title: "إضافة عملائك ومورديك", desc: "بناء دليل الحسابات الأساسي", dur: "٤:٠٠" },
  { num: "٣", title: "إنشاء أول مشروع", desc: "ربط المشروع بالعميل وتحديد الميزانية", dur: "٤:١٥" },
  { num: "٤", title: "إصدار أول فاتورة زاتكا", desc: "من إدخال البيانات حتى الإرسال", dur: "٦:٤٥" },
  { num: "٥", title: "قراءة أول تقرير مالي", desc: "كيف تفهم أرقامك في دقائق", dur: "٥:٠٠" },
];

export default function TutorialsPage() {
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
          <i className="ti ti-player-play" /> الشروحات
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          تعلّم أوتوبان
          <br /><span style={{ color: "var(--color-accent)" }}>بخطوات بسيطة</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "520px", margin: "0 auto 2rem" }}>
          فيديوهات قصيرة وواضحة تشرح كل ميزة في أوتوبان — من الإعداد الأول حتى التقارير المتقدمة. لا تحتاج خبرة مسبقة.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", paddingTop: "2rem", borderTop: "0.5px solid var(--color-border)", flexWrap: "wrap" }}>
          {[{ num: "٣٠+", label: "فيديو شرح" }, { num: "٣-١٠", label: "دقائق لكل فيديو" }, { num: "٥ مسارات", label: "حسب مستواك" }].map(s => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 500, color: "var(--color-accent)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* TRACKS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>مسارات التعلم</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>ابدأ من حيث أنت</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>اختر المسار المناسب لمستواك واحتياجك</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px,1fr))", gap: "12px" }}>
            {tracks.map((t, i) => (
              <div key={t.title} style={{
                background: i === 0 ? "var(--color-accent-light)" : "var(--color-surface)",
                border: i === 0 ? "2px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem", cursor: "pointer",
              }}>
                <div style={{
                  width: 40, height: 40, background: i === 0 ? "var(--color-accent)" : "var(--color-accent-light)",
                  borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "0.75rem",
                }}>
                  <i className={`ti ${t.icon}`} style={{ color: i === 0 ? "white" : "var(--color-accent)", fontSize: 19 }} />
                </div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "3px" }}>{t.title}</h4>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "6px" }}>{t.desc}</p>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{t.count} • {t.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* FEATURED VIDEO */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>ابدأ من هنا</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "1.5rem" }}>الفيديو الأول — إعداد حسابك</h2>
          <div style={{
            background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
            borderRadius: "var(--radius-lg)", overflow: "hidden",
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0,
          }}>
            <div style={{
              background: "var(--color-accent-light)", minHeight: "200px",
              display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
            }}>
              <div style={{
                width: 56, height: 56, background: "var(--color-accent)", borderRadius: "50%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <i className="ti ti-player-play" style={{ color: "white", fontSize: 26, marginRight: "-3px" }} />
              </div>
              <div style={{
                position: "absolute", bottom: 10, left: 10,
                background: "rgba(0,0,0,0.65)", color: "white",
                fontSize: "12px", padding: "3px 8px", borderRadius: "5px",
              }}>٥:٣٠</div>
            </div>
            <div style={{ padding: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: "rgba(245,158,11,0.1)", color: "#F59E0B",
                fontSize: "11px", padding: "3px 10px", borderRadius: "8px", marginBottom: "0.75rem", width: "fit-content",
              }}>
                <i className="ti ti-star" /> ابدأ هنا
              </div>
              <h3 style={{ fontSize: "18px", fontWeight: 500, marginBottom: "0.5rem", lineHeight: 1.3 }}>إعداد شركتك على أوتوبان — من الصفر</h3>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "1rem" }}>
                في هذا الفيديو ستتعلم كيف تُنشئ شركتك، تضبط السنة المالية، تضيف موظفيك، وتعد بيانات زاتكا — كل ذلك في أقل من ٦ دقائق.
              </p>
              <div style={{ display: "flex", gap: "12px", fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "1rem" }}>
                {[{ icon: "ti-clock", val: "٥:٣٠" }, { icon: "ti-eye", val: "٢,٤٠٠ مشاهدة" }, { icon: "ti-signal", val: "مبتدئ" }].map(m => (
                  <span key={m.val} style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <i className={`ti ${m.icon}`} />{m.val}
                  </span>
                ))}
              </div>
              <button style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                background: "var(--color-accent)", color: "white",
                padding: "8px 18px", borderRadius: "var(--radius)",
                border: "none", cursor: "pointer", fontSize: "13px", width: "fit-content",
              }}>
                <i className="ti ti-player-play" /> شاهد الآن
              </button>
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* VIDEOS GRID */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>جميع الفيديوهات</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "2rem" }}>تصفح حسب الموضوع</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: "14px" }}>
            {videos.map(v => (
              <div key={v.title} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", overflow: "hidden", cursor: "pointer",
              }}>
                <div style={{
                  background: "var(--color-accent-light)", height: "130px",
                  display: "flex", alignItems: "center", justifyContent: "center", position: "relative",
                }}>
                  <div style={{
                    width: 44, height: 44, background: "var(--color-accent)", borderRadius: "50%",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}>
                    <i className="ti ti-player-play" style={{ color: "white", fontSize: 20, marginRight: "-2px" }} />
                  </div>
                  <div style={{
                    position: "absolute", bottom: 8, left: 8,
                    background: "rgba(0,0,0,0.65)", color: "white", fontSize: "11px", padding: "2px 7px", borderRadius: "4px",
                  }}>{v.dur}</div>
                  <div style={{
                    position: "absolute", top: 8, right: 8, fontSize: "10px", padding: "2px 7px", borderRadius: "8px",
                    background: v.green ? "rgba(34,197,94,0.15)" : v.yellow ? "rgba(245,158,11,0.15)" : "rgba(59,123,246,0.15)",
                    color: v.green ? "#22C55E" : v.yellow ? "#F59E0B" : "var(--color-accent)",
                  }}>{v.level}</div>
                </div>
                <div style={{ padding: "0.9rem" }}>
                  <div style={{ fontSize: "11px", color: "var(--color-accent)", marginBottom: "4px", display: "flex", alignItems: "center", gap: "3px" }}>
                    <i className={`ti ${v.icon}`} style={{ fontSize: 12 }} />{v.cat}
                  </div>
                  <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "4px", lineHeight: 1.4 }}>{v.title}</h4>
                  <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", lineHeight: 1.5, marginBottom: "0.65rem" }}>{v.desc}</p>
                  <div style={{ fontSize: "11px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "3px" }}>
                    <i className="ti ti-eye" style={{ fontSize: 12 }} />{v.views}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* LEARNING PATH */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px", textAlign: "center" }}>للمبتدئين</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem", textAlign: "center" }}>مسار البداية السريعة</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem", textAlign: "center" }}>٥ فيديوهات تُعدّك لاستخدام أوتوبان بالكامل في ٢٥ دقيقة</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "680px", margin: "0 auto" }}>
            {pathSteps.map(s => (
              <div key={s.num} style={{
                display: "flex", alignItems: "center", gap: "12px",
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1rem",
              }}>
                <div style={{
                  width: 32, height: 32, background: "var(--color-accent)", color: "white",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "13px", fontWeight: 500, flexShrink: 0,
                }}>{s.num}</div>
                <div style={{ flex: 1 }}>
                  <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{s.title}</h4>
                  <p style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>{s.desc}</p>
                </div>
                <div style={{ fontSize: "11px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "3px", flexShrink: 0 }}>
                  <i className="ti ti-clock" style={{ fontSize: 13 }} />{s.dur}
                </div>
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
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>جاهز تبدأ؟</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            اشترك في أوتوبان وشاهد جميع الشروحات مجاناً — شهر تجريبي كامل بدون بطاقة.
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
            }}>عرض الباقات</Link>
          </div>
        </div>
      </section>
    </>
  );
}
