"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Icon } from "@/components/icons";

const countries = ["السعودية", "الكويت", "قطر", "مصر"];

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
  borderRadius: "var(--radius)", padding: "10px 12px", fontSize: "14px", color: "var(--color-text)",
  fontFamily: "inherit", direction: "rtl", outline: "none",
};

export default function WaitlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState(countries[0]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ name, email, phone: phone || null, country });
    setLoading(false);
    if (insertError) {
      if (insertError.code === "23505") {
        setError("هذا البريد الإلكتروني مسجّل بالفعل في قائمة الانتظار.");
      } else {
        setError("تعذّر إضافتك لقائمة الانتظار. حاول مرة أخرى.");
      }
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <section style={{ padding: "3rem 1.5rem", maxWidth: "480px", margin: "0 auto", minHeight: "60vh" }}>
        <div style={{
          width: 56, height: 56, borderRadius: "50%", background: "var(--color-success-bg)",
          display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem",
        }}>
          <Icon name="check" size={28} style={{ color: "var(--color-success)" }} />
        </div>
        <h1 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem" }}>
          تم تسجيلك بنجاح، {name}!
        </h1>
        <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
          أنت الآن ضمن قائمة انتظار أوتوبان — سنراسلك على {email} فور توفر الوصول المبكر.
        </p>
      </section>
    );
  }

  return (
    <section style={{ padding: "3rem 1.5rem", maxWidth: "480px", margin: "0 auto", minHeight: "60vh" }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "6px",
        background: "var(--color-accent-light)", color: "var(--color-accent)",
        fontSize: "13px", padding: "7px 18px", borderRadius: "20px",
        border: "1.5px solid var(--color-accent-border)", marginBottom: "1.5rem",
      }}>
        <Icon name="users" size={15} /> قائمة الانتظار
      </div>

      <h1 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem" }}>
        كن أول من يجرّب أوتوبان
      </h1>
      <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
        سجّل بياناتك وستكون من أوائل من نتواصل معهم عند الإطلاق.
      </p>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
            الاسم
          </label>
          <input
            id="name" name="name" type="text" required
            placeholder="اسمك الكريم"
            value={name}
            onChange={e => setName(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
            البريد الإلكتروني
          </label>
          <input
            id="email" name="email" type="email" required
            placeholder="example@company.com"
            value={email}
            onChange={e => setEmail(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="phone" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
            رقم الجوال <span style={{ color: "var(--color-text-muted)" }}>(اختياري)</span>
          </label>
          <input
            id="phone" name="phone" type="tel"
            placeholder="+966 5X XXX XXXX"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="country" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
            الدولة
          </label>
          <select
            id="country" name="country" required
            value={country}
            onChange={e => setCountry(e.target.value)}
            style={inputStyle}
          >
            {countries.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        {error && (
          <p role="alert" style={{ fontSize: "13px", color: "#EF4444", marginBottom: "1rem" }}>{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-scale"
          style={{
            width: "100%", background: "var(--color-accent)", color: "white",
            border: "none", borderRadius: "var(--radius)", padding: "12px",
            fontSize: "15px", fontWeight: 500, cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "جارِ التسجيل..." : "انضم لقائمة الانتظار"}
        </button>
      </form>
    </section>
  );
}
