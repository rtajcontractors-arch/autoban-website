"use client";
import { useEffect, useState } from "react";
import { Icon } from "@/components/icons";

type Theme = "light" | "dark";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // localStorage/matchMedia only exist client-side, so the initial theme can't be
    // determined during SSR render — this effect syncs it in once on mount.
    const stored = window.localStorage.getItem("theme") as Theme | null;
    const initial = stored === "light" || stored === "dark"
      ? stored
      : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTheme(initial);
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    window.localStorage.setItem("theme", next);
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === "dark" ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center",
        width: 34, height: 34, background: "none", border: "0.5px solid var(--color-border-strong)",
        borderRadius: "var(--radius)", color: "var(--color-text)", cursor: "pointer", flexShrink: 0,
      }}
    >
      {theme && <Icon name={theme === "dark" ? "sun" : "moon"} size={16} />}
    </button>
  );
}
