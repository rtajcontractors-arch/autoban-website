"use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Icon } from "@/components/icons";

const countries = [
  { code: "+966", name: "السعودية" },
  { code: "+965", name: "الكويت" },
  { code: "+974", name: "قطر" },
  { code: "+20", name: "مصر" },
];

type Step = "phone" | "otp" | "success";

const inputStyle: React.CSSProperties = {
  width: "100%", background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
  borderRadius: "var(--radius)", padding: "10px 12px", fontSize: "14px", color: "var(--color-text)",
  fontFamily: "inherit", direction: "rtl", outline: "none",
};

export default function WaitlistPage() {
  const [step, setStep] = useState<Step>("phone");
  const [countryCode, setCountryCode] = useState(countries[0].code);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countryName = countries.find(c => c.code === countryCode)?.name ?? "";
  const fullPhone = `${countryCode}${phone.replace(/\D/g, "")}`;

  async function handleSendOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({ phone: fullPhone });
    setLoading(false);
    if (error) {
      setError("تعذّر إرسال رمز التحقق. تأكد من رقم الجوال وحاول مرة أخرى.");
      return;
    }
    setStep("otp");
  }

  async function handleVerifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createClient();
    const { error: verifyError } = await supabase.auth.verifyOtp({
      phone: fullPhone,
      token: otp,
      type: "sms",
    });
    if (verifyError) {
      setLoading(false);
      setError("رمز التحقق غير صحيح أو منتهي الصلاحية.");
      return;
    }
    const { error: insertError } = await supabase
      .from("waitlist")
      .insert({ phone: fullPhone, country: countryName });
    setLoading(false);
    if (insertError && insertError.code !== "23505") {
      setError("تعذّر إضافتك لقائمة الانتظار. حاول مرة أخرى.");
      return;
    }
    setStep("success");
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

      {step === "phone" && (
        <>
          <h1 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem" }}>
            كن أول من يجرّب أوتوبان
          </h1>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
            سجّل رقم جوالك وسنرسل لك رمز تحقق قصير — وستكون من أوائل المشتركين عند الإطلاق.
          </p>
          <form onSubmit={handleSendOtp}>
            <label htmlFor="phone" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
              رقم الجوال
            </label>
            <div style={{ display: "flex", gap: "8px", marginBottom: "1rem" }}>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                aria-label="كود الدولة"
                style={{ ...inputStyle, width: "110px", flexShrink: 0 }}
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code}>{c.name} {c.code}</option>
                ))}
              </select>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="5XXXXXXXX"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ ...inputStyle, flex: 1 }}
              />
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
              {loading ? "جارِ الإرسال..." : "انضم لقائمة الانتظار"}
            </button>
          </form>
        </>
      )}

      {step === "otp" && (
        <>
          <h1 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem" }}>
            أدخل رمز التحقق
          </h1>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8, marginBottom: "2rem" }}>
            أرسلنا رمزاً مكوّناً من ٦ أرقام إلى {fullPhone}
          </p>
          <form onSubmit={handleVerifyOtp}>
            <label htmlFor="otp" style={{ fontSize: "13px", color: "var(--color-text-secondary)", display: "block", marginBottom: "6px" }}>
              رمز التحقق
            </label>
            <input
              id="otp"
              name="otp"
              type="text"
              inputMode="numeric"
              autoComplete="one-time-code"
              required
              placeholder="123456"
              value={otp}
              onChange={e => setOtp(e.target.value)}
              style={{ ...inputStyle, marginBottom: "1rem", textAlign: "center", letterSpacing: "4px", fontSize: "18px" }}
            />
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
                opacity: loading ? 0.7 : 1, marginBottom: "0.75rem",
              }}
            >
              {loading ? "جارِ التحقق..." : "تحقق"}
            </button>
            <button
              type="button"
              onClick={() => { setStep("phone"); setOtp(""); setError(null); }}
              style={{
                width: "100%", background: "none", color: "var(--color-text-secondary)",
                border: "none", fontSize: "13px", cursor: "pointer", padding: "6px",
              }}
            >
              تغيير رقم الجوال
            </button>
          </form>
        </>
      )}

      {step === "success" && (
        <>
          <div style={{
            width: 56, height: 56, borderRadius: "50%", background: "var(--color-success-bg)",
            display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.25rem",
          }}>
            <Icon name="check" size={28} style={{ color: "var(--color-success)" }} />
          </div>
          <h1 style={{ fontSize: "clamp(24px,4vw,32px)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem" }}>
            تم تسجيلك بنجاح!
          </h1>
          <p style={{ fontSize: "15px", color: "var(--color-text-secondary)", lineHeight: 1.8 }}>
            أنت الآن ضمن قائمة انتظار أوتوبان — سنتواصل معك عبر جوالك فور توفر الوصول المبكر.
          </p>
        </>
      )}
    </section>
  );
}
