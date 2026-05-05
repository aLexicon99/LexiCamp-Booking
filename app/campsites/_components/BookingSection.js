export default function BookingSection({ campingsite }) {
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
            {/* <!-- <span className="text-stone-400">·</span> --> */}
            {/* <!-- <span className="text-stone-500 underline">128 reviews</span> --> */}
          </div>
        </div>

        {/* <!-- Booking Fields --> */}
        <div className="border border-stone-300 rounded-xl overflow-hidden mb-6">
          <div className="grid grid-cols-2 border-b border-stone-300">
            <div className="p-3 border-r border-stone-300 hover:bg-stone-50 cursor-pointer">
              <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
                Check-in
              </label>
              <div className="text-sm font-medium">6/15/2024</div>
            </div>
            <div className="p-3 hover:bg-stone-50 cursor-pointer">
              <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
                Check-out
              </label>
              <div className="text-sm font-medium">6/20/2024</div>
            </div>
          </div>
          <div className="p-3 hover:bg-stone-50 cursor-pointer flex justify-between items-center">
            <div>
              <label className="block text-[10px] font-black uppercase text-emerald-900 mb-0.5">
                Guests
              </label>
              <div className="text-sm font-medium">2 guests</div>
            </div>
            <span className="material-symbols-outlined" data-icon="expand_more">
              expand_more
            </span>
          </div>
        </div>

        {/* <!-- CTA Button --> */}
        <button className="w-full bg-[#FF8C42] text-white font-extrabold py-4 rounded-xl shadow-lg hover:brightness-110 active:scale-[0.98] transition-all mb-4">
          Book Now
        </button>
        <p className="text-center text-stone-500 text-sm mb-6">
          {"You won't be charged yet"}
        </p>

        {/* <!-- Price Breakdown --> */}
        <div className="space-y-3 mb-6">
          <div className="flex justify-between text-stone-600">
            <span className="underline">
              {campingsite.pricePerNight} x 5 nights
            </span>
            <span>$425</span>
          </div>
          <div className="flex justify-between text-stone-600">
            <span className="underline">Cleaning fee</span>
            <span>$40</span>
          </div>
          <div className="flex justify-between text-stone-600">
            <span className="underline">LexiCamp service fee</span>
            <span>$65</span>
          </div>
        </div>
        <div className="border-t border-stone-200 pt-4 flex justify-between font-extrabold text-emerald-900 text-lg">
          <span>Total before taxes</span>
          <span>$530</span>
        </div>
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
