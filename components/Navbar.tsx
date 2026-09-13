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
  { href: "/contact", label: "تواصل" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: "sticky", top: 0, zIndex: 100,
        background: "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "0.5px solid var(--color-border)",
        padding: "0 1.5rem",
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "60px",
      }}>

        {/* Logo — يسار — يأخذ للرئيسية -->
        <Link href="/" style={{
          fontSize: "20px", fontWeight: 700,
          color: "var(--color-text)", whiteSpace: "nowrap",
          textDecoration: "none",
        }}>
          أوتو<span style={{ color: "var(--color-accent)" }}>بان</span>
        </Link>

        {/* روابط الوسط — سطح المكتب */}
        <div style={{
          display: "flex", gap: "1rem", alignItems: "center",
        }} className="desktop-nav">
          <Link href="/" style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
          >الرئيسية</Link>
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{ fontSize: "14px", color: "var(--color-text-secondary)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--color-accent)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--color-text-secondary)")}
            >{l.label}</Link>
          ))}
        </div>

        {/* زر ابدأ مجاناً — يمين */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Link href="/pricing" style={{
            background: "var(--color-accent)", color: "white",
            padding: "8px 18px", borderRadius: "var(--radius)",
            fontSize: "14px", fontWeight: 500, whiteSpace: "nowrap",
          }} className="cta-btn">ابدأ مجاناً</Link>

          {/* زر الجوال */}
          <button onClick={() => setOpen(!open)} className="mobile-btn" style={{
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
        <div style={{
          position: "fixed", top: "60px", right: 0, left: 0,
          background: "var(--color-surface)",
          borderBottom: "0.5px solid var(--color-border)",
          padding: "1rem 1.5rem 1.5rem",
          display: "flex", flexDirection: "column", gap: "4px",
          zIndex: 99, boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        }}>
          {[{ href: "/", label: "الرئيسية" }, ...links].map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              fontSize: "15px", color: "var(--color-text)",
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
      `}</style>
    </>
  );
}
