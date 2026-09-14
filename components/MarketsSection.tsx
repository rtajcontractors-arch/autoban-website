"use client";
import { useCountry, type CountryCode } from "@/lib/country-context";

const gulfMarkets: { code: CountryCode; flag: string; name: string; desc: string; status: string; active: boolean }[] = [
  { code: "SA", flag: "🇸🇦", name: "المملكة العربية السعودية", desc: "زاتكا — المرحلتان", status: "متاح الآن", active: true },
  { code: "KW", flag: "🇰🇼", name: "الكويت", desc: "معايير المحاسبة الكويتية", status: "قريباً", active: false },
  { code: "QA", flag: "🇶🇦", name: "قطر", desc: "معايير المحاسبة القطرية", status: "قريباً", active: false },
];

const egyptMarket = { code: "EG" as CountryCode, flag: "🇪🇬", name: "مصر", desc: "معايير المحاسبة المصرية", status: "قريباً", active: false };

function MarketCard({ market, isSelected }: { market: typeof egyptMarket; isSelected: boolean }) {
  return (
    <div style={{
      background: isSelected ? "var(--color-accent-light)" : "var(--color-surface-2)",
      border: isSelected ? "1.5px solid var(--color-accent-border)" : "0.5px solid var(--color-border)",
      borderRadius: "var(--radius-lg)", padding: "1rem",
      display: "flex", alignItems: "center", gap: "10px", position: "relative",
    }}>
      <span style={{ fontSize: "26px" }}>{market.flag}</span>
      <div>
        <h3 style={{ fontSize: "13px", fontWeight: 500, marginBottom: "2px" }}>{market.name}</h3>
        <p style={{ fontSize: "11px", color: "var(--color-text-secondary)", marginBottom: "4px" }}>{market.desc}</p>
        <span style={{
          fontSize: "10px", padding: "2px 7px", borderRadius: "8px",
          background: market.active ? "rgba(34,197,94,0.1)" : "rgba(245,158,11,0.1)",
          color: market.active ? "#22C55E" : "#F59E0B",
        }}>{market.status}</span>
      </div>
      {isSelected && (
        <span style={{
          position: "absolute", top: -8, left: 10,
          background: "var(--color-accent)", color: "white",
          fontSize: "10px", padding: "2px 8px", borderRadius: "8px", whiteSpace: "nowrap",
        }}>دولتك</span>
      )}
    </div>
  );
}

export default function MarketsSection() {
  const { country } = useCountry();

  return (
    <>
      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        دول الخليج العربي
        <span style={{ flex: 1, height: "0.5px", background: "var(--color-border)", display: "block" }} />
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: "10px", marginBottom: "1.5rem" }}>
        {gulfMarkets.map(m => (
          <MarketCard key={m.name} market={m} isSelected={m.code === country} />
        ))}
      </div>

      <p style={{ fontSize: "12px", color: "var(--color-text-muted)", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
        شمال أفريقيا
        <span style={{ flex: 1, height: "0.5px", background: "var(--color-border)", display: "block" }} />
      </p>
      <div style={{ maxWidth: "260px" }}>
        <MarketCard market={egyptMarket} isSelected={egyptMarket.code === country} />
      </div>
    </>
  );
}
