"use client";

import { useEffect, useState } from "react";
import DateSelector from "./DateSelector";
import GuestDropdown from "./GuestDropdown";
import PriceCalculation from "./PriceCalculation";

export default function BookingSection({ campingsite }) {
  const today = new Date().toISOString().split("T")[0];

  // sets a default checkout-date the day after
  const nextDay = new Date(today);
  nextDay.setDate(nextDay.getDate() + 1);

  const [checkOut, setCheckOut] = useState(nextDay.toISOString().split("T")[0]);
  const [checkIn, setCheckIn] = useState(today);
  const [days, setTotalDays] = useState(0);

  useEffect(() => {
    if (!checkIn || !checkOut) return;

    const startDate = new Date(checkIn);
    const endDate = new Date(checkOut);

    const timeDiff = endDate.getTime() - startDate.getTime();
    const totalDays = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTotalDays(totalDays);
  }, [checkIn, checkOut]);

  return (
    <div className="relative">
      <div className="sticky top-28 bg-white border border-stone-200 rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
        <div className="flex justify-between items-start mb-6">
          <div>
            <span className="text-2xl font-extrabold text-emerald-900">
              {campingsite.pricePerNight}
            </span>
            <span className="text-stone-500 font-medium"> kr/ night</span>
          </div>
          <div className="flex items-center gap-1 text-sm font-medium">
            <span
              className="material-symbols-outlined text-orange-500 text-xs"
              data-icon="star"
            >
              star
            </span>
            <span>{campingsite.rating}</span>
          </div>
        </div>

        {/* <!-- Booking Fields --> */}
        <div className="border border-stone-300 rounded-xl overflow-hidden mb-6">
          <div className="grid grid-cols-1 border-b border-stone-300">
            <DateSelector
              checkInDate={checkIn}
              checkOutDate={checkOut}
              setCheckInDate={setCheckIn}
              setCheckOutDate={setCheckOut}
            />
          </div>
          <GuestDropdown />
        </div>

        <button className="w-full cursor-pointer bg-[#FF8C42] text-white font-extrabold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all mb-4">
          Book Now
        </button>
        <p className="text-center text-stone-500 text-sm mb-6">
          {"You won't be charged yet"}
        </p>

        <PriceCalculation price={campingsite.pricePerNight} days={days} />

        <div className="mt-8 flex items-center justify-center gap-4 text-stone-400">
          <div className="flex items-center gap-1 text-xs">
            <span
              className="material-symbols-outlined text-base"
              data-icon="verified_user"
            >
              verified_user
            </span>
            Safe Payment
          </div>
          <div className="flex items-center gap-1 text-xs">
            <span
              className="material-symbols-outlined text-base"
              data-icon="cancel"
            >
              cancel
            </span>
            Free Cancellation
          </div>
        </div>
      </div>
    </div>
  );
}
