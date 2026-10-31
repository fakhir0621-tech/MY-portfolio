import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(() => document.documentElement.getAttribute("data-theme") || "light");
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (e) { /* storage unavailable */ }
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#2B2D31" : "#F7F7F5");
  }, [theme]);
  return [theme, () => setTheme((t) => (t === "dark" ? "light" : "dark"))];
}
