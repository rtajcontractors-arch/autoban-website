"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/features", label: "المميزات" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/community", label: "المجتمع" },
  { href: "/marketplace", label: "سوق المحاسبين" },
  { href: "/library", label: "المكتبة" },
  { href: "/tutorials", label: "الشروحات" },
  { href: "/about", label: "من نحن" },
  { href: "/contact", label: "تواصل" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--color-border)",
        padding: "0 1.5rem",
        display: "grid", gridTemplateColumns: "auto 1fr auto",
        alignItems: "center", direction: "rtl", height: "60px",
      }}>

        {/* Logo — يمين — يأخذ للرئيسية */}
        <Link href="/" style={{
          fontSize: "20px", fontWeight: 700,
          color: "var(--color-text)", whiteSpace: "nowrap",
          textDecoration: "none",
        }}>
          أوتو<span style={{ color: "var(--color-accent)" }}>بان</span>
        </Link>

        {/* روابط الوسط — سطح المكتب */}
        <div style={{
          display: "flex", gap: "1.25rem", alignItems: "center",
          justifyContent: "center",
        }} className="desktop-nav">
          <Link
            href="/"
            className={`nav-link${pathname === "/" ? " nav-link-active" : ""}`}
            aria-current={pathname === "/" ? "page" : undefined}
            style={{ fontSize: "15px", fontWeight: 500 }}
          >الرئيسية</Link>
          {links.map(l => (
            <Link
              key={l.href}
              href={l.href}
              className={`nav-link${pathname === l.href ? " nav-link-active" : ""}`}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{ fontSize: "15px", fontWeight: 500 }}
            >{l.label}</Link>
          ))}
        </div>

        {/* زر ابدأ مجاناً — يسار */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <ThemeToggle />
          <Link href="/pricing" style={{
            background: "var(--color-accent)", color: "white",
            padding: "8px 18px", borderRadius: "var(--radius)",
            fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap",
          }} className="cta-btn">ابدأ مجاناً</Link>

          {/* زر الجوال */}
          <button
            onClick={() => setOpen(!open)}
            className="mobile-btn"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            style={{
              display: "none", background: "none", border: "none",
              cursor: "pointer", color: "var(--color-text)",
              fontSize: "22px", padding: "4px", lineHeight: 1,
            }}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* القائمة المنسدلة للجوال */}
      {open && (
        <div id="mobile-menu" role="navigation" aria-label="القائمة الرئيسية" style={{
          position: "fixed", top: "60px", right: 0, left: 0,
          background: "var(--color-surface)",
          borderBottom: "0.5px solid var(--color-border)",
          padding: "1rem 1.5rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "4px",
          zIndex: 99, boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}>
          {[{ href: "/", label: "الرئيسية" }, ...links].map(l => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              aria-current={pathname === l.href ? "page" : undefined}
              style={{
                fontSize: "15px", fontWeight: pathname === l.href ? 700 : 400,
                color: pathname === l.href ? "var(--color-accent)" : "var(--color-text)",
                padding: "10px 0",
                borderBottom: "0.5px solid var(--color-border)",
                display: "block",
              }}>{l.label}</Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} style={{
            background: "var(--color-accent)", color: "white",
            padding: "12px 16px", borderRadius: "var(--radius)",
            fontSize: "15px", textAlign: "center",
            marginTop: "10px", display: "block", fontWeight: 500,
          }}>ابدأ مجاناً</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-btn { display: block !important; }
        }
        @media (min-width: 901px) {
          .mobile-btn { display: none !important; }
        }
        .nav-link {
          position: relative;
          padding-bottom: 4px;
          color: var(--color-text-secondary);
        }
        .nav-link::after {
          content: "";
          position: absolute;
          bottom: 0;
          right: 0;
          width: 0;
          height: 2px;
          background: var(--color-accent);
          transition: width 0.2s ease;
        }
        .nav-link:hover {
          color: var(--color-accent);
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link-active {
          color: var(--color-accent);
        }
        .nav-link-active::after {
          width: 100%;
        }
        .cta-btn {
          display: inline-block;
        }
        .cta-btn:hover {
          filter: brightness(1.1);
          transform: scale(1.02);
        }
      `}</style>
    </>
  );
}
