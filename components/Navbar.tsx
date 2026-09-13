"use client";
import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/features", label: "المميزات" },
  { href: "/pricing", label: "الأسعار" },
  { href: "/community", label: "المجتمع" },
  { href: "/marketplace", label: "سوق المحاسبين" },
  { href: "/library", label: "المكتبة" },
  { href: "/tutorials", label: "الشروحات" },
  { href: "/about", label: "من نحن" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "var(--nav-bg)",
      backdropFilter: "blur(12px)",
      borderBottom: "0.5px solid var(--color-border)",
      padding: "0 1.5rem",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", height: "60px",
    }}>
      {/* زر ابدأ مجاناً */}
      <Link href="/pricing" style={{
        background: "var(--color-accent)", color: "white",
        padding: "7px 16px", borderRadius: "var(--radius)",
        fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap",
      }}>ابدأ مجاناً</Link>

      {/* روابط — سطح المكتب */}
      <div style={{
        display: "flex", gap: "1.25rem",
        alignItems: "center",
      }} className="desktop-links">
        {/* رابط الرئيسية */}
        <Link href="/" style={{
          fontSize: "14px", color: "var(--color-text-secondary)",
          transition: "color 0.15s",
        }}
        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
        >الرئيسية</Link>

        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontSize: "14px", color: "var(--color-text-secondary)",
            transition: "color 0.15s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = "var(--color-text)")}
          onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
          >{l.label}</Link>
        ))}
      </div>

      {/* Logo — يأخذ للرئيسية */}
      <Link href="/" style={{
        fontSize: "20px", fontWeight: 700,
        color: "var(--color-text)", whiteSpace: "nowrap",
      }}>
        أوتو<span style={{ color: "var(--color-accent)" }}>بان</span>
      </Link>

      {/* زر الجوال */}
      <button
        onClick={() => setOpen(!open)}
        className="mobile-menu-btn"
        style={{
          display: "none",
          background: "none", border: "none", cursor: "pointer",
          color: "var(--color-text)", fontSize: "24px", padding: "4px",
        }}
        aria-label="القائمة"
      >
        {open ? "✕" : "☰"}
      </button>

      {/* القائمة المنسدلة للجوال */}
      {open && (
        <div style={{
          position: "absolute", top: "60px", right: 0, left: 0,
          background: "var(--color-surface)",
          borderBottom: "0.5px solid var(--color-border)",
          padding: "1rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "0.75rem",
          zIndex: 99,
        }} className="mobile-menu">
          <Link href="/" onClick={() => setOpen(false)} style={{ fontSize: "15px", color: "var(--color-text)", padding: "6px 0", borderBottom: "0.5px solid var(--color-border)" }}>الرئيسية</Link>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontSize: "15px", color: "var(--color-text-secondary)",
              padding: "6px 0", borderBottom: "0.5px solid var(--color-border)",
            }}>{l.label}</Link>
          ))}
          <Link href="/pricing" onClick={() => setOpen(false)} style={{
            background: "var(--color-accent)", color: "white",
            padding: "10px 16px", borderRadius: "var(--radius)",
            fontSize: "15px", textAlign: "center", marginTop: "4px",
          }}>ابدأ مجاناً</Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
        @media (min-width: 769px) {
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
