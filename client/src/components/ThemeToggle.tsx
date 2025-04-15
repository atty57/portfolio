import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    window.dispatchEvent(new Event("storage"));
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="wrapper">
        <input
          id="theme-toggle"
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <label className="toggle" htmlFor="theme-toggle">
          <span className="toggle-button">
            <span className="crater crater-1" />
            <span className="crater crater-2" />
            <span className="crater crater-3" />
            <span className="crater crater-4" />
            <span className="crater crater-5" />
            <span className="crater crater-6" />
            <span className="crater crater-7" />
          </span>
          <span className="star star-1" />
          <span className="star star-2" />
          <span className="star star-3" />
          <span className="star star-4" />
          <span className="star star-5" />
          <span className="star star-6" />
          <span className="star star-7" />
          <span className="star star-8" />
        </label>
      </div>
    </div>
  );
}
