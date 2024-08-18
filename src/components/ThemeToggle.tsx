import { useState, useEffect } from "react";

import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";

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
          <button
            type="button"
            onClick={togglehandler}
            aria-label={darkMode ? "Toggle Dark Theme" : "Toggle Light Theme"}
            className="bg-[#c6c7cb] dark:bg-gray-900 w-14 h-4 xl:w-14 xl:h-7 rounded-full p-1 flex justify-between items-center transition duration-300 ease-out"
          >
            {!darkMode && <FaMoon className="text-[#e6f336]" size={18} />}
            <div className="bg-white w-4 h-4 xl:w-5 xl:h-5 rounded-full shadow-md"></div>
            {darkMode && <IoIosSunny className="text-secondary" size={20} />}
          </button>
        </div>
      </label>
    </>
  );
}
