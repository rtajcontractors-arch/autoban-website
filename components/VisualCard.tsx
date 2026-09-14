export type VisualRow = {
  label: string;
  value?: string;
  badge?: string;
  accent?: boolean;
  green?: boolean;
  yellow?: boolean;
  blue?: boolean;
};

export function VisualCard({ rows }: { rows: VisualRow[] }) {
  return (
    <div style={{
      background: "var(--color-surface-2)", border: "0.5px solid var(--color-border)",
      borderRadius: "var(--radius-lg)", padding: "1.5rem",
      display: "flex", flexDirection: "column", gap: "8px",
    }}>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: "var(--color-surface)", border: "0.5px solid var(--color-border)",
          borderRadius: "var(--radius)", padding: "8px 12px",
        }}>
          <span style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}>{r.label}</span>
          {r.badge ? (
            <span style={{
              fontSize: "11px", padding: "2px 8px", borderRadius: "8px",
              background: r.green ? "rgba(34,197,94,0.12)" : r.yellow ? "rgba(245,158,11,0.12)" : "var(--color-accent-light)",
              color: r.green ? "#22C55E" : r.yellow ? "#F59E0B" : "var(--color-accent)",
            }}>{r.badge}</span>
          ) : (
            <span style={{ fontSize: "13px", fontWeight: 500, color: r.accent ? "var(--color-accent)" : "var(--color-text)" }}>{r.value}</span>
          )}
        </div>
      ))}
    </div>
  );
}
