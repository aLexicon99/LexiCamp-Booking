"use client";

import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function FilterBar({
  priceOnClick,
  ratingOnClick,
  campsites,
  search
}) {
  const searchParams = useSearchParams();
  const hasURLparams = searchParams.get("location");
  const guests = searchParams.get("guests");
  const date = searchParams.get("checkIn");

  return (
    <section className="mb-10">
      <div className="flex flex-col shadow-md md:flex-row md:items-center justify-between gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-primary mb-2">
            Campgrounds
          </h1>
          <p className="text-on-surface-variant">
            {campsites.length} results found{" "}
            {search && campsites.length > 0 ? `for "${search}"` : ""}
          </p>
          <p className="font-semibold text-green-900">
            {date && `🗓️ ${date}`}{" "}
            {guests && guests != "group"
              ? `for "${guests} Guests + Beds"`
              : guests === "group" && `for a ${guests.toUpperCase()}`}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {/* Pris */}
          <button
            onClick={() => priceOnClick()}
            className="flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl border border-outline-variant hover:border-primary transition-all text-sm font-semibold"
          >
            <span className="material-symbols-outlined text-[20px]">
              payments
            </span>
            Price
          </button>

          {/* Rating */}
          <button
            onClick={() => ratingOnClick()}
            className="flex cursor-pointer items-center gap-2 px-4 py-2.5 rounded-xl border border-outline-variant hover:border-primary transition-all text-sm font-semibold"
          >
            <span className="material-symbols-outlined text-[20px]">
              star_rate
            </span>
            Rating
          </button>

          {hasURLparams && (
            <>
              <div className="h-8 w-px bg-outline-variant mx-2"></div>
              <button
                onClick={() => redirect("/campsites")}
                className="flex cursor-pointer items-center gap-2 px-4 py-2.5 bg-primary text-white rounded-xl hover:bg-opacity-90 transition-all text-sm font-bold shadow-lg shadow-primary/20"
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
                Reset
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
