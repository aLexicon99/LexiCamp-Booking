"use client";

const CLEANING_FEE_PERCENTAGE = 0.5;
const SERVICE_FEE_PERCENTAGE = 0.2;

export default function BookingDetails({campground, checkin, checkout}) {
    const checkinDate = new Date(checkin);
    const checkoutDate = new Date(checkout);
    const nights = Math.ceil((checkoutDate - checkinDate) / (1000 * 60 * 60 * 24));
    const campingPrice = Math.ceil(campground.pricePerNight * nights);
    const cleaningFee = Math.ceil(campground.pricePerNight * CLEANING_FEE_PERCENTAGE);
    const serviceFee = Math.ceil(campingPrice * SERVICE_FEE_PERCENTAGE);
    const totalPrice = campingPrice + cleaningFee + serviceFee;

    return (
        <div className="bg-white rounded-xl shadow-[0_8px_30px_rgba(27,67,50,0.08)] border border-stone-100 overflow-hidden">
            <div className="relative h-48 w-full">
                <img
                    className="w-full h-full object-cover"
                     data-alt="serene glamping tent in a pine forest at sunrise with soft atmospheric mist and warm wooden deck"
                     src= {campground.imageUrl}
                />
                <div
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter text-emerald-900">
                    Rare Find
                </div>
            </div>
            <div className="p-8">
                <div className="mb-6">
                    <span className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-1 block">Luxury Escape</span>
                    <h3 className="text-2xl font-bold text-primary leading-tight">
                        {campground.name}
                    </h3>
                    <p className="text-stone-500 text-sm mt-1">
                        {campground.city}
                    </p>
                </div>
                <div className="flex justify-between items-center py-4 border-y border-stone-100 mb-6">
                    <div className="text-center flex-1">
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">
                            Check-in
                        </p>
                        <p className="font-bold text-stone-800">{checkinDate.toLocaleDateString('en-US',{month:'short', day:'2-digit', year: 'numeric'})}</p>
                    </div>
                    <div className="w-px h-8 bg-stone-100"></div>
                    <div className="text-center flex-1">
                        <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">
                            Check-out
                        </p>
                        <p className="font-bold text-stone-800">{checkoutDate.toLocaleDateString('en-US',{month:'short', day:'2-digit', year: 'numeric'})}</p>
                    </div>
                </div>
                <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-stone-600">
                        <span>{campground.pricePerNight} kr x {nights} nights</span>
                        <span className="font-semibold text-stone-900">{campingPrice} kr</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                        <span>Cleaning fee</span>
                        <span className="font-semibold text-stone-900">{cleaningFee} kr</span>
                    </div>
                    <div className="flex justify-between text-stone-600">
                        <span>LexiCamp service fee</span>
                        <span className="font-semibold text-stone-900">{serviceFee} kr</span>
                    </div>
                    <div className="pt-4 border-t border-stone-100 flex justify-between items-end">
                        <span className="text-lg font-bold text-primary">Total</span>
                        <span className="text-3xl font-black text-primary">{totalPrice} kr</span>
                    </div>
                </div>
                <button className="w-full bg-accent hover:bg-accent-hover text-white font-extrabold py-5 rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] uppercase tracking-widest text-sm">
                    Confirm &amp; Pay
                </button>
                <p className="text-center text-[10px] text-stone-400 mt-4 uppercase font-bold tracking-widest">
                    <span className="material-symbols-outlined text-[12px] align-middle mr-1" data-icon="lock">lock</span>
                    SSL Encrypted Payment
                </p>
            </div>
        </div>
    );
}
