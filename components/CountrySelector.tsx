"use client";
import { countryData, countryOrder, useCountry } from "@/lib/country-context";

export default function CountrySelector() {
  const { country, setCountry } = useCountry();

  return (
    <div style={{
      display: "flex", justifyContent: "center", alignItems: "center", gap: "4px",
      background: "var(--color-surface)", borderBottom: "0.5px solid var(--color-border)",
      padding: "6px 1rem", direction: "rtl", flexWrap: "wrap",
    }}>
      {countryOrder.map(code => {
        const c = countryData[code];
        const active = code === country;
        return (
          <button
            key={code}
            onClick={() => setCountry(code)}
            aria-pressed={active}
            style={{
              display: "flex", alignItems: "center", gap: "5px",
              background: active ? "var(--color-accent-light)" : "transparent",
              color: active ? "var(--color-accent)" : "var(--color-text-secondary)",
              border: active ? "0.5px solid var(--color-accent-border)" : "0.5px solid transparent",
              borderRadius: "20px", padding: "3px 10px", fontSize: "12px",
              fontWeight: active ? 500 : 400, cursor: "pointer",
            }}
          >
            <span aria-hidden="true">{c.flag}</span> {c.name}
          </button>
        );
      })}
    </div>
  );
}
