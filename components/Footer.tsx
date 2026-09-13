import Link from "next/link";

const cols = [
  {
    title: "المنتج",
    links: [
      { href: "/features", label: "المميزات" },
      { href: "/pricing", label: "الأسعار" },
      { href: "/tutorials", label: "الشروحات" },
      { href: "/library", label: "المكتبة المعرفية" },
    ],
  },
  {
    title: "المنظومة",
    links: [
      { href: "/community", label: "المجتمع الحصري" },
      { href: "/marketplace", label: "سوق المحاسبين" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { href: "/about", label: "من نحن" },
      { href: "/contact", label: "تواصل معنا" },
    ],
  },
];

export default function Footer() {
  return (
    <footer style={{
      borderTop: "0.5px solid var(--color-border)",
      background: "var(--color-surface)",
      padding: "3rem 2rem 1.5rem",
    }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: "2rem", marginBottom: "2rem" }}>
          {/* Brand */}
          <div>
            <div style={{ fontSize: "22px", fontWeight: 500, marginBottom: "0.75rem" }}>
              أوتو<span style={{ color: "var(--color-accent)" }}>بان</span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "260px" }}>
              المنصة المتكاملة لقطاع المقاولات — سهل للمقاول، دقيق للمحاسب.
            </p>
            <div style={{ display: "flex", gap: "10px", marginTop: "1rem" }}>
              {["brand-twitter", "brand-linkedin", "brand-whatsapp"].map(icon => (
                <div key={icon} style={{
                  width: 34, height: 34, background: "var(--color-surface-2)",
                  border: "0.5px solid var(--color-border)", borderRadius: "var(--radius)",
                  display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer",
                }}>
                  <i className={`ti ti-${icon}`} style={{ color: "var(--color-text-secondary)", fontSize: 16 }} />
                </div>
              ))}
            </div>
          </div>

          {/* Cols */}
          {cols.map(col => (
            <div key={col.title}>
              <div style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "0.75rem", fontWeight: 500 }}>
                {col.title}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {col.links.map(l => (
                  <Link key={l.href} href={l.href} style={{ fontSize: "13px", color: "var(--color-text-secondary)" }}>
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: "0.5px solid var(--color-border)", paddingTop: "1.25rem",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: "8px",
        }}>
          <span style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>
            © ٢٠٢٦ أوتوبان — جميع الحقوق محفوظة
          </span>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Link href="/privacy" style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>سياسة الخصوصية</Link>
            <Link href="/terms" style={{ fontSize: "12px", color: "var(--color-text-muted)" }}>الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
