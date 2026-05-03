"use client";

import Link from "next/link";
import { useState } from "react";

export default function HeroSearch() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-2 flex flex-col md:flex-row items-center opacity-80 gap-2 max-w-3xl mx-auto max-h-80">
      <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-3 gap-2 px-4 py-2">
        <div className="flex flex-col items-start text-left">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Location
          </label>
          <input
            className="w-full border-none focus:outline-none focus:border-transparent focus:ring-0 text-stone-800 font-semibold p-1 placeholder:text-stone-300"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Where to?"
            type="text"
          />
        </div>
        <div className="flex flex-col items-start text-left md:border-l border-stone-100 md:pl-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Check In
          </label>
          <input
            className="w-full border-none focus:outline-none focus:border-transparent focus:ring-0 text-stone-800 font-semibold p-1"
            type="date"
          />
        </div>
        <div className="flex flex-col items-start text-left md:border-l border-stone-100 md:pl-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Guests
          </label>
          <select className="w-full border-none focus:outline-none focus:border-transparent focus:ring-0 text-stone-800 font-semibold p-1">
            <option>2 Adults, 1 Child</option>
            <option>1 Adult</option>
            <option>2 Adults</option>
            <option>4+ Group</option>
          </select>
        </div>
      </div>
      <Link href={`/locations${search ? `?find=${search}` : ""}`}>
        <button className="w-full md:w-auto bg-[#fb8500] hover:bg-[#e67a00] text-white px-6 py-4 rounded-md font-bold flex items-center justify-center gap-2 transition-all transform active:scale-95">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 20.49 21.49 19 15.5 14zM9.5 14A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"
              stroke="white"
              fill="white"
            />
          </svg>
          Search
        </button>
      </Link>
    </div>
  );
}
