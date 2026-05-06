export default function PriceCalculation({ price, days }) {
  {
    /* 
    cleaning / dayprice / 2 (0.5) 
    service fee dayprice
   */
  }

  const CLEANING_FEE_PERCENTAGE = 0.5;
  const SERVICE_FEE_PERCENTAGE = 0.2;

  const campingPrice = Math.ceil(price * days);
  const cleaningFee = Math.ceil(price * CLEANING_FEE_PERCENTAGE);
  const serviceFee = Math.ceil(campingPrice * SERVICE_FEE_PERCENTAGE);

  console.log({ cleaning: cleaningFee, service: serviceFee });

  return (
    <>
      {days > 0 ? (
        <>
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-stone-600">
              <span className="underline">
                {price} x {days} {days < 2 ? "day" : "days"}
              </span>
              <span>{price * days}kr</span>
            </div>

            <div className="flex justify-between text-stone-600">
              <span className="underline">Cleaning fee</span>
              <span>{cleaningFee} kr</span>
            </div>

            <div className="flex justify-between text-stone-600">
              <span className="underline">LexiCamp service fee</span>
              <span>{serviceFee}kr</span>
            </div>
          </div>
          <div className="border-t border-stone-200 pt-4 flex justify-between font-extrabold text-emerald-900 text-lg">
            <span>Total before taxes</span>
            <span>{(price * days) + cleaningFee + serviceFee}kr</span>
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
