"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import campgrounds from "@/public/locations_data.json";

import Loading from "@/components/Loading";
import PaymentInfo from "./_components/PaymentInfo";
import GuestDetails from "./_components/GuestDetails";
import SustainableBookingInfo from "./_components/SustainableBookingInfo";
import CancellationPolicyInfo from "./_components/CancellationPolicyInfo";
import BookingDetails from "@/components/BookingDetails";

export default function Booking() {
  const searchParams = useSearchParams();
  const checkOut = searchParams.get("checkOut");
  const checkIn = searchParams.get("checkIn");
  const campId = searchParams.get("campsite");

  const foundCampsite = campgrounds.find((c) => c.id === campId);

  return (
    <>
      {!foundCampsite ? (
        <Loading message={!foundCampsite && "Wrong Campsite ID ⛺"} />
      ) : (
        <div className="pt-12 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
          <header className="mb-12">
            <Link href={`/campsites/${campId}`}>
              <div className="flex items-center gap-2 text-stone-500 mb-4 cursor-pointer hover:text-emerald-900 transition-colors">
                <span
                  className="material-symbols-outlined text-lg"
                  data-icon="arrow_back"
                >
                  arrow_back
                </span>
                <span className="text-sm font-semibold uppercase tracking-wider">
                  Back to site details
                </span>
              </div>
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
              Confirm &amp; Pay
            </h1>
          </header>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <section className="lg:col-span-7 space-y-12">
              <GuestDetails />
              <PaymentInfo />
              <CancellationPolicyInfo />
            </section>
            <aside className="lg:col-span-5">
              <div className="sticky top-32 space-y-6">
                  <BookingDetails campground={foundCampsite} checkout={checkOut} checkin={checkIn}>
                      <button
                          className="w-full cursor-pointer bg-accent hover:bg-accent-hover text-white font-extrabold py-5 rounded-lg transition-all shadow-lg shadow-orange-500/20 active:scale-[0.98] uppercase tracking-widest text-sm">
                          Confirm &amp; Pay
                      </button>
                      <p className="text-center text-[10px] text-stone-400 mt-4 uppercase font-bold tracking-widest">
                        <span className="material-symbols-outlined text-[12px] align-middle mr-1" data-icon="lock">
                            lock
                        </span>
                          SSL Encrypted Payment
                      </p>
                  </BookingDetails>
                <SustainableBookingInfo />
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}
