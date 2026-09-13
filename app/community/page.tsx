import Link from "next/link";

const members = [
  { icon: "ti-helmet", title: "مقاول رئيسي", desc: "شركات المقاولات الرئيسية — يبحثون عن باطن موثوق وموردين وكوادر متخصصة.", tags: ["مشاريع كبرى", "عقود"] },
  { icon: "ti-tools", title: "مقاول باطن", desc: "متخصصون في تخصص محدد — كهرباء، سباكة، تشطيبات — يبحثون عن فرص.", tags: ["كهرباء", "تشطيبات"] },
  { icon: "ti-truck", title: "مورّد متخصص", desc: "موردو مواد البناء والمعدات — يصلون لشبكة مقاولين مؤهلين مباشرة.", tags: ["مواد بناء", "معدات"] },
  { icon: "ti-calculator", title: "محاسب متخصص", desc: "محاسبون معتمدون بخبرة في المقاولات للتشغيل اليومي والاستشارات.", tags: ["SOCPA", "زاتكا"] },
  { icon: "ti-building", title: "مكتب محاسبة ومراجعة", desc: "مكاتب معتمدة تقدم التدقيق والمراجعة والإقرارات الضريبية لشركات المقاولات.", tags: ["تدقيق", "مراجعة", "ضريبة"], isNew: true },
  { icon: "ti-briefcase", title: "استشاري متخصص", desc: "مستشارون في إدارة المشاريع والعقود والمطالبات بخبرة ميدانية.", tags: ["عقود", "مطالبات"] },
  { icon: "ti-ruler-2", title: "مكتب استشارات هندسية", desc: "مكاتب التصميم والإشراف وإدارة المشاريع — الشريك الهندسي للمقاول.", tags: ["تصميم", "إشراف", "إدارة مشاريع"], isNew: true },
];

const activities = [
  { icon: "ti-message-circle", title: "نقاشات متخصصة", desc: "أسئلة محاسبية وهندسية وقانونية يجيب عليها متخصصون حقيقيون." },
  { icon: "ti-handshake", title: "فرص تعاون وشراكة", desc: "مقاول يبحث عن باطن، مكتب هندسي يبحث عن مقاول، مورد يعرض صفقة." },
  { icon: "ti-tag", title: "عروض الموردين", desc: "عروض حصرية لأعضاء أوتوبان على مواد البناء والمعدات." },
  { icon: "ti-book", title: "مشاركة الخبرات", desc: "دروس مستفادة من مشاريع حقيقية — نجاحات وأخطاء يتعلم منها الجميع." },
  { icon: "ti-news", title: "آخر المستجدات", desc: "زاتكا، أسعار مواد البناء، أنظمة العمل، اشتراطات البناء." },
  { icon: "ti-star", title: "تقييم الأطراف", desc: "تقييمات حقيقية للموردين والمحاسبين والمكاتب الهندسية من شركاء القطاع." },
];

const posts = [
  {
    icon: "ti-helmet",
    author: "أبو فهد المقاول — الرياض",
    time: "منذ ساعتين",
    body: "عندي مشروع مدرسة في القصيم، أبحث عن مقاول باطن متخصص في الكهرباء ومكتب استشارات هندسية للإشراف — الكمية حوالي ٢.٥ م ريال. من لديه خبرة يتواصل.",
    tag: "فرصة عمل",
    likes: "١٢",
    replies: "٨",
  },
  {
    icon: "ti-building",
    author: "مكتب الرشيد للمحاسبة — جدة",
    time: "منذ ٤ ساعات",
    body: "نقدم خدمات التدقيق والمراجعة المتخصصة في شركات المقاولات — إقرارات زاتكا، قوائم مالية معتمدة، تقارير للجهات التمويلية. متاح للتواصل مع الشركات في المنطقة الغربية.",
    tag: "خدمة مهنية",
    likes: "٢٣",
    replies: "١١",
  },
  {
    icon: "ti-truck",
    author: "شركة الخليج لمواد البناء — جدة",
    time: "منذ ٣ ساعات",
    body: "عرض حصري لأعضاء أوتوبان: خصم ١٢٪ على حديد التسليح لهذا الشهر مع توصيل مجاني للمشاريع داخل المدن الرئيسية. الكميات محدودة.",
    tag: "عرض مورّد",
    likes: "٢٨",
    replies: "١٤",
  },
  {
    icon: "ti-ruler-2",
    author: "مكتب الإبداع للاستشارات الهندسية — الدمام",
    time: "أمس",
    body: "درس مستفاد: في مشروع حديث واجهنا نزاعاً حول بنود العقد بسبب غموض في مواصفات التشطيبات. سأشارك ملاحظاتنا في تسلسل قادم حول كيف تحمي شركتك قبل توقيع العقد.",
    tag: "درس مستفاد",
    likes: "٤١",
    replies: "١٨",
  },
];

const ecoFlows = [
  "المقاول الرئيسي يجد باطناً موثوقاً ومكتباً هندسياً في نفس المكان",
  "المورد يصل لشبكة مقاولين مؤهلين مباشرة بدون وسطاء",
  "مكتب المحاسبة يجد شركات مقاولات تحتاج تدقيقاً متخصصاً",
  "المكتب الهندسي يتعاون مع مقاولين على مشاريع مشتركة",
];

const joinSteps = [
  { num: "١", title: "اشترك في أوتوبان", desc: "اختر باقة الاحترافية أو المتكاملة وابدأ شهرك المجاني." },
  { num: "٢", title: "حدد فئتك", desc: "من السبع فئات — كل فئة لها مساحتها ودورها في الشبكة." },
  { num: "٣", title: "أكمل ملفك", desc: "تخصصك، منطقتك، خبرتك — هذا ما يجعل شبكتك قيّمة." },
  { num: "٤", title: "شارك وابنِ علاقاتك", desc: "كلما شاركت، كلما كبرت شبكتك في القطاع." },
];

export default function CommunityPage() {
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
          <i className="ti ti-users-group" /> المجتمع الحصري
        </div>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem" }}>
          شبكة قطاع المقاولات
          <br /><span style={{ color: "var(--color-accent)" }}>في مكان واحد</span>
        </h1>
        <p style={{ fontSize: "17px", color: "var(--color-text-secondary)", lineHeight: 1.8, maxWidth: "560px", margin: "0 auto 2rem" }}>
          المجتمع الوحيد في المنطقة الذي يجمع كل أطراف منظومة المقاولات — حصري للمشتركين في أوتوبان.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", paddingTop: "2rem", borderTop: "0.5px solid var(--color-border)", flexWrap: "wrap" }}>
          {[{ num: "٧ فئات", label: "من الأعضاء" }, { num: "حصري", label: "للمشتركين فقط" }, { num: "٢٤/٧", label: "نقاشات وفرص" }].map(s => (
            <div key={s.num} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "24px", fontWeight: 500, color: "var(--color-accent)" }}>{s.num}</div>
              <div style={{ fontSize: "13px", color: "var(--color-text-secondary)", marginTop: "3px" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* MEMBERS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الأعضاء</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>سبع فئات — منظومة متكاملة</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>كل طرف في دورة حياة مشروع المقاولات موجود هنا</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px,1fr))", gap: "12px" }}>
            {members.map(m => (
              <div key={m.title} style={{
                background: m.isNew ? "var(--color-accent-light)" : "var(--color-surface)",
                border: m.isNew ? "1.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.1rem", display: "flex", flexDirection: "column",
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: "50%",
                  background: m.isNew ? "var(--color-accent)" : "var(--color-accent-light)",
                  display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.65rem",
                }}>
                  <i className={`ti ${m.icon}`} style={{ color: m.isNew ? "white" : "var(--color-accent)", fontSize: 20 }} />
                </div>
                {m.isNew && (
                  <span style={{
                    display: "inline-block", fontSize: "10px",
                    background: "var(--color-accent)", color: "white",
                    padding: "1px 7px", borderRadius: "8px", marginBottom: "5px", width: "fit-content",
                  }}>مضاف حديثاً</span>
                )}
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "4px" }}>{m.title}</h4>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", lineHeight: 1.6, marginBottom: "0.65rem", flex: 1 }}>{m.desc}</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                  {m.tags.map(t => (
                    <span key={t} style={{
                      fontSize: "10px", background: "var(--color-surface-2)",
                      border: "0.5px solid var(--color-border)", color: "var(--color-text-secondary)",
                      padding: "2px 6px", borderRadius: "6px",
                    }}>{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* ECOSYSTEM */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الاقتصاد الداخلي</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>كيف يخلق المجتمع قيمة حقيقية؟</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>كل فئة تحتاج الأخرى — وأوتوبان هو المكان الذي يلتقون فيه</p>
          <div style={{
            background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
            borderRadius: "var(--radius-lg)", padding: "1.75rem", maxWidth: "720px", margin: "0 auto",
          }}>
            <div style={{ fontSize: "13px", color: "var(--color-text-muted)", textAlign: "center", marginBottom: "1.25rem" }}>العلاقات داخل المنظومة</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "8px", marginBottom: "1.25rem" }}>
              {[
                { icon: "ti-helmet", label: "مقاول رئيسي" },
                { icon: "ti-tools", label: "مقاول باطن" },
                { icon: "ti-truck", label: "مورّد" },
                { icon: "ti-calculator", label: "محاسب" },
              ].map(n => (
                <div key={n.label} style={{
                  background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "8px 6px", textAlign: "center",
                }}>
                  <i className={`ti ${n.icon}`} style={{ color: "var(--color-accent)", fontSize: 18, display: "block", marginBottom: "3px" }} />
                  <span style={{ fontSize: "11px" }}>{n.label}</span>
                </div>
              ))}
              <div style={{
                background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
                borderRadius: "var(--radius)", padding: "8px 6px", textAlign: "center", gridColumn: "span 2",
              }}>
                <i className="ti ti-building-skyscraper" style={{ color: "var(--color-accent)", fontSize: 20, display: "block", marginBottom: "3px" }} />
                <span style={{ fontSize: "12px", color: "var(--color-accent)", fontWeight: 500 }}>منصة أوتوبان</span>
              </div>
              {[
                { icon: "ti-building", label: "مكتب محاسبة" },
                { icon: "ti-briefcase", label: "استشاري" },
              ].map(n => (
                <div key={n.label} style={{
                  background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "var(--radius)", padding: "8px 6px", textAlign: "center",
                }}>
                  <i className={`ti ${n.icon}`} style={{ color: "var(--color-accent)", fontSize: 18, display: "block", marginBottom: "3px" }} />
                  <span style={{ fontSize: "11px" }}>{n.label}</span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {ecoFlows.map(f => (
                <div key={f} style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  fontSize: "12px", color: "var(--color-text-secondary)",
                  background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                  borderRadius: "7px", padding: "6px 10px",
                }}>
                  <i className="ti ti-arrow-right" style={{ color: "var(--color-accent)", fontSize: 13, flexShrink: 0 }} />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* ACTIVITIES */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>داخل المجتمع</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>ماذا يحدث هنا؟</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "2rem" }}>أكثر من مجرد منتدى — شبكة تجارية ومعرفية متخصصة</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(190px,1fr))", gap: "12px" }}>
            {activities.map(a => (
              <div key={a.title} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1rem",
              }}>
                <div style={{
                  width: 34, height: 34, background: "var(--color-accent-light)",
                  borderRadius: "var(--radius)", display: "flex", alignItems: "center",
                  justifyContent: "center", marginBottom: "0.65rem",
                }}>
                  <i className={`ti ${a.icon}`} style={{ color: "var(--color-accent)", fontSize: 17 }} />
                </div>
                <h4 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "3px" }}>{a.title}</h4>
                <p style={{ fontSize: "12px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* POSTS FEED */}
      <section style={{ padding: "2.5rem 1.5rem", background: "var(--color-surface)" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px", textAlign: "center" }}>نموذج</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem", textAlign: "center" }}>كيف يبدو المجتمع؟</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem", textAlign: "center" }}>أمثلة على التفاعل الحقيقي داخل الشبكة</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "680px", margin: "0 auto" }}>
            {posts.map(p => (
              <div key={p.author} style={{
                background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "0.65rem" }}>
                  <div style={{
                    width: 34, height: 34, background: "var(--color-accent-light)",
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    <i className={`ti ${p.icon}`} style={{ color: "var(--color-accent)", fontSize: 17 }} />
                  </div>
                  <div>
                    <div style={{ fontSize: "13px", fontWeight: 500 }}>{p.author}</div>
                    <div style={{ fontSize: "11px", color: "var(--color-text-muted)" }}>{p.time}</div>
                  </div>
                </div>
                <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, marginBottom: "0.65rem" }}>{p.body}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                  <span style={{
                    fontSize: "11px", background: "var(--color-accent-light)", color: "var(--color-accent)",
                    border: "0.5px solid var(--color-accent-border)", padding: "2px 8px", borderRadius: "8px",
                  }}>{p.tag}</span>
                  <div style={{ display: "flex", gap: "10px", marginRight: "auto" }}>
                    {[{ icon: "ti-heart", val: p.likes }, { icon: "ti-message", val: `${p.replies} ردود` }].map(a => (
                      <span key={a.icon} style={{ fontSize: "12px", color: "var(--color-text-muted)", display: "flex", alignItems: "center", gap: "4px" }}>
                        <i className={`ti ${a.icon}`} style={{ fontSize: 14 }} />{a.val}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div style={{ borderTop: "0.5px solid var(--color-border)", maxWidth: "900px", margin: "0 auto" }} />

      {/* JOIN STEPS */}
      <section style={{ padding: "2.5rem 1.5rem" }}>
        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          <p style={{ fontSize: "12px", color: "var(--color-accent)", marginBottom: "6px" }}>الانضمام</p>
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>كيف تنضم للمجتمع؟</h2>
          <p style={{ fontSize: "14px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>المجتمع حصري — يدخله المشتركون في باقة الاحترافية أو المتكاملة فقط</p>
          <div style={{
            background: "var(--color-accent-light)", border: "0.5px solid var(--color-accent-border)",
            borderRadius: "var(--radius-lg)", padding: "1.25rem",
            display: "flex", alignItems: "flex-start", gap: "16px", marginBottom: "1.5rem",
          }}>
            <i className="ti ti-lock" style={{ fontSize: 26, color: "var(--color-accent)", flexShrink: 0 }} />
            <div>
              <h3 style={{ fontSize: "15px", fontWeight: 500, marginBottom: "4px" }}>مجتمع مغلق — لأسباب وجيهة</h3>
              <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.6 }}>
                الحصرية تضمن جودة الأعضاء لا كميتهم — كل من في المجتمع جاد ومتخصص وهذا ما يجعل الشبكة ذات قيمة حقيقية.
              </p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(175px,1fr))", gap: "12px" }}>
            {joinSteps.map(s => (
              <div key={s.num} style={{
                background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
                borderRadius: "var(--radius-lg)", padding: "1.25rem", textAlign: "center",
              }}>
                <div style={{
                  width: 34, height: 34, background: "var(--color-accent)", color: "white",
                  borderRadius: "50%", display: "flex", alignItems: "center",
                  justifyContent: "center", fontSize: "15px", fontWeight: 500, margin: "0 auto 0.65rem",
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
          <h2 style={{ fontSize: "24px", fontWeight: 500, marginBottom: "0.5rem" }}>انضم إلى منظومة قطاع المقاولات</h2>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            سواء كنت مقاولاً أو مورداً أو مكتب محاسبة أو استشارات هندسية — مكانك هنا.
          </p>
          <Link href="/pricing" style={{
            background: "var(--color-accent)", color: "white",
            padding: "12px 28px", borderRadius: "var(--radius)", fontSize: "15px", fontWeight: 500,
          }}>انضم للمجتمع الآن</Link>
        </div>
      </section>
    </>
  );
}
