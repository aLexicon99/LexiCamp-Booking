"use client";

export default function PriceCalculation({ price, days }) {
  const CLEANING_FEE_PERCENTAGE = 0.5;
  const SERVICE_FEE_PERCENTAGE = 0.2;

  const campingPrice = Math.ceil(price * days);
  const cleaningFee = Math.ceil(price * CLEANING_FEE_PERCENTAGE);
  const serviceFee = Math.ceil(campingPrice * SERVICE_FEE_PERCENTAGE);

  return (
    <>
      {days > 0 ? (
        <>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-stone-600">
              <span>
                {price} kr x {days} {days < 2 ? "night" : "nights"}
              </span>
              <span className="font-bold text-stone-800">{price * days} kr</span>
            </div>

            <div className="flex justify-between text-stone-600">
              <span>Cleaning fee</span>
              <span className="font-bold text-stone-800">{cleaningFee} kr</span>
            </div>

            <div className="flex justify-between text-stone-600">
              <span>LexiCamp service fee</span>
              <span className="font-bold text-stone-800">{serviceFee} kr</span>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-4 flex justify-between font-extrabold text-emerald-900 text-lg">
            <span>Total before taxes</span>
            <span className="font-extrabold text-2xl">
              {price * days + cleaningFee + serviceFee} kr
            </span>
          </div>
        </>
      ) : (
        <div className="border-t border-stone-200 pt-4 flex justify-center font-extrabold text-red-500 text-lg">
          {days === 0
            ? "Same-Day checkout is not possible"
            : "Please Check Dates"}
        </div>
      )}
    </>
  );
}
