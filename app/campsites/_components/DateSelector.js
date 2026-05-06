"use client";

export default function DateSelector({
  checkInDate,
  checkOutDate,
  setCheckInDate,
  setCheckOutDate,
}) {
  const defaultDate = new Date().toISOString().split("T")[0];

  return (
    <div className="grid grid-cols-2 border-b border-stone-300">
      {/* Check-in */}
      <div className="relative p-3 border-r border-stone-300 hover:bg-stone-50 cursor-pointer group">
        <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
          Check-in
        </label>

        <input
          type="date"
          min={defaultDate}
          value={checkInDate}
          onChange={(e) => setCheckInDate(e.target.value)}
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
          min={checkInDate}
          value={checkOutDate}
          onChange={(e) => setCheckOutDate(e.target.value)}
          className="w-full bg-transparent text-sm font-medium text-black border-none outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
