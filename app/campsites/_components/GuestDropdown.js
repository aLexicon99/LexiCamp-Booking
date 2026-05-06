"use client";

import { useEffect, useRef, useState } from "react";

export default function GuestDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [guests, setGuests] = useState(2);
  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelect = (count) => {
    setGuests(count);
    setIsOpen(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="p-3 hover:bg-stone-50 cursor-pointer flex justify-between items-center relative"
    >
      <div className="flex-1 min-w-0">
        <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
          Guests
        </label>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sm font-medium text-left w-full focus:outline-none"
        >
          {guests} guest{guests !== 1 ? "s" : ""}
        </button>

        {isOpen && (
          <div className="left-3 top-full mt-1 w-32 bg-white border border-stone-200 rounded-md shadow-lg py-1 z-50">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <button
                key={num}
                onClick={() => handleSelect(num)}
                className={`
                  w-full text-left px-4 py-2 text-sm
                  hover:bg-stone-100
                  ${guests === num ? "font-bold text-emerald-700" : "text-stone-700"}
                `}
              >
                {num} guest{num !== 1 ? "s" : ""}
              </button>
            ))}
          </div>
        )}
      </div>

      <span
        className={`material-symbols-outlined transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        data-icon="expand_more"
      >
        expand_more
      </span>
    </div>
  );
}
