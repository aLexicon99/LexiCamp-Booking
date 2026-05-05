"use client";

import { useEffect, useState } from "react";

export default function DateSelector({ checkInDate, checkOutDate, guests, totalDays }) {

  const [checkIn, setCheckIn] = useState(() => new Date().toISOString().split('T')[0]);
  const [checkOut, setCheckOut] = useState("");
  

  useEffect(() => {
    if (!checkIn || !checkOut) return;

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    console.log("checkIn/Out", { checkIn, checkOut, totalDays });
  }, [checkIn, checkOut]);


  return (
    <div className="grid grid-cols-2 border-b border-stone-300">
      {/* Check-in */}
      <div className="relative p-3 border-r border-stone-300 hover:bg-stone-50 cursor-pointer group">
        <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
          Check-in
        </label>

        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={new Date().toISOString().split("T")[0]}
          className="w-full bg-transparent text-sm font-medium text-black border-none outline-none cursor-pointer"
        />
      </div>

      {/* Check-out */}
      <div className="relative p-3 hover:bg-stone-50 cursor-pointer group">
        <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
          Check-out
        </label>

        <input
          type="date"
          value={checkOut}
          min={new Date().toISOString().split("T")[0]}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-black border-none outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
