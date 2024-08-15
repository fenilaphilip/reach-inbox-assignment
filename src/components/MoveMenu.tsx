import { useState } from "react";
import { SlArrowDown } from "react-icons/sl";

import { MENU_ITEMS } from "../data";

export default function MoveMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  function handleMoveMenuToggle() {
    setIsOpen(!isOpen);
    console.log("Toggled isOpen");
  }

  return (
    <>
      <div>
        <button
          id="moveMenuDropDown"
          aria-label="Toggle dropdown"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={handleMoveMenuToggle}
          className="dark:bg-[#1F1F1F] flex items-center text-black dark:text-white border bg-white dark:border-[#343A40] rounded-md py-2 px-3 text-sm"
          type="button"
        >
          Move <SlArrowDown className=" ml-2" />
        </button>
        {isOpen && (
          <div
            aria-label="Dropdown menu"
            className="z-10 absolute mt-3 bg-white divide-y divide-gray-100 rounded-2xl shadow w-44 dark:bg-gray-700 "
          >
            <ul
              role="menu"
              aria-labelledby="moveMenuDropDown"
              aria-orientation="vertical"
              className="py-2 text-sm text-stone-800 bg-zinc-90 dark:bg-slate-50 dark:text-stone-800"
            >
              {MENU_ITEMS.map((item) => {
                return (
                  <li key={item.item}>
                    <a
                      href="https://"
                      className="px-4 py-2 item center text-stone-800 hover:bg-slate-50 dark:hover:bg-gray-500 dark:hover:text-stone-900 flex flex-row"
                    >
                      <span className="px-2">
                        <item.icon />
                      </span>
                      <span>{item.item}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}
