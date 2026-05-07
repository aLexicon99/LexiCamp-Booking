"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Button from "./Button";

export default function HeroSearch() {
  const [search, setSearch] = useState("");
  const [guests, setGuests] = useState("3");
  const [checkIn, setCheckIn] = useState("");

  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const hasGuest = searchParams.get("guests");
  useEffect(() => {
    if (location) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      return setSearch(location.trim());
    } else {
      setSearch("");
    }
    if (hasGuest) {
      return setGuests(hasGuest);
    }
  }, [location, hasGuest]);

  const guestOptions = [
    { value: 3, text: "2 Adults, 1 Child" },
    { value: 1, text: "1 Adult" },
    { value: 2, text: "2 Adults" },
    { value: "group", text: "+4 Group" },
  ];

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-3 rounded-2xl bg-white/95 opacity-75 p-3 shadow-2xl md:flex-row md:items-center md:gap-2">
      <div className="grid w-full flex-1 grid-cols-1 gap-3 px-2 py-2 sm:grid-cols-3 md:gap-2 md:px-4">
        <div className="flex min-w-0 flex-col items-start text-left">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Location
          </label>
          <input
            className="min-h-10 w-full border-none p-1 text-sm font-semibold text-stone-900 placeholder:text-stone-300 focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Where to?"
            value={search}
            type="text"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start border-stone-100 text-left sm:border-l sm:pl-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Check In
          </label>
          <input
            className="min-h-10 w-full border-none p-1 text-sm font-semibold text-stone-800 focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
            onChange={(e) => setCheckIn(e.target.value)}
            type="date"
          />
        </div>
        <div className="flex min-w-0 flex-col items-start border-stone-100 text-left sm:border-l sm:pl-4">
          <label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 px-1">
            Guests
          </label>

          <select
            onChange={(e) => setGuests(e.target.value)}
            className="min-h-10 w-full border-none p-1 text-sm font-semibold text-stone-800 focus:border-transparent focus:outline-none focus:ring-0 sm:text-base"
          >
            {guestOptions.map((g) => (
              <option key={g.value} value={g.value}>
                {g.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Link
        className="w-full md:w-auto"
        href={`/campsites${search && `?location=${search.trim()}${checkIn && `&checkIn=${checkIn}`}${guests && `&guests=${guests}`}`}`}
      >
        <Button
          variant="primary"
          extraCssClasses="flex w-full transform items-center justify-center gap-2 rounded-md bg-[#fb8500] px-6 py-4 font-bold text-lg text-white transition-all hover:bg-[#e67a00] active:scale-95 md:w-auto"
        >
          <span className="material-symbols-outlined text-[20px]">Search</span>
          Search
        </Button>
      </Link>
    </div>
  );
}
