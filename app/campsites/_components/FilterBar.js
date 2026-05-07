"use client";

import { useEffect } from "react";
import Button from "@/components/Button";
import { redirect } from "next/navigation";
import { useSearchParams } from "next/navigation";

export default function FilterBar({
  priceOnClick,
  ratingOnClick,
  campsites,
  search,
}) {
  const searchParams = useSearchParams();
  const hasLocation = searchParams.get("location");
  const guests = searchParams.get("guests");
  const date = searchParams.get("checkIn");

  useEffect(() => {}, [hasLocation, guests, date, search, campsites]);

  return (
    <section className="mb-10">
      <div className="flex flex-col shadow-md md:flex-row md:items-center justify-between gap-6 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30">
        <div className="flex-1">
          <h1 className="text-2xl font-extrabold text-primary mb-2">
            Availiable Campsites
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
          {campsites.length > 0 && (
            <>
              <Button
                variant="outlined"
                extraCssClasses="flex items-center gap-2 justify-between hover:bg-primary hover:text-white"
                onClick={() => priceOnClick()}
              >
                <span className="material-symbols-outlined text-[20px]">
                  payments
                </span>
                Price
              </Button>

              <Button
                variant="outlined"
                extraCssClasses="flex items-center gap-2 justify-between hover:bg-primary hover:text-white"
                onClick={() => ratingOnClick()}
              >
                <span className="material-symbols-outlined text-[20px]">
                  star_rate
                </span>
                Rating
              </Button>
            </>
          )}

          {hasLocation && (
            <>
              <div className="h-8 w-px bg-outline-variant mx-2"></div>

              <Button
                variant="primary"
                extraCssClasses="flex items-center gap-2 justify-between bg-primary"
                onClick={() => redirect("/campsites")}
              >
                <span className="material-symbols-outlined text-[20px]">
                  close
                </span>
                Reset
              </Button>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
