"use client";

import { useState } from "react";

export default function DateSelector() {
  // Use empty string or 'YYYY-MM-DD' format for value
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  return (
    <div className="grid grid-cols-2 border-b border-stone-300">
      {/* Check-in */}
      <div className="relative p-3 border-r border-stone-300 hover:bg-stone-50 cursor-pointer group">
        <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
          Check-in
        </label>

        {/* 
          The Input:
          - 'bg-transparent' ensures no background box appears
          - 'text-sm font-medium' matches your original text style
          - 'border-none outline-none' removes default browser borders
          - 'w-full' ensures it fills the space
        */}
        <input
          type="date"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          min={new Date().toISOString().split('T')[0]}
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
          min={new Date().toISOString().split('T')[0]}
          onChange={(e) => setCheckOut(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-black border-none outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
