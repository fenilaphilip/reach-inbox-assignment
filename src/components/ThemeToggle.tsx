import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (darkMode) {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [darkMode]);
  const togglehandler = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <label className="flex cursor-pointer select-none items-center">
        <div className="relative ">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={togglehandler}
            className="sr-only"
          />

          <div className="block h-6 w-12 rounded-full bg-[#c6c7cb]"></div>
          <div className="dot absolute left-1 top-1 h-4 w-4 rounded-full bg-white transition"></div>
        </div>
      </label>
    </>
  );
}
