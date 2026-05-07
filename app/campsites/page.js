"use client";

import Link from "next/link";
export const dynamic = "force-dynamic";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import CampgroundCard from "@/components/CampgroundCard";
import FilterBar from "./_components/FilterBar";

export default function Locations() {
  const [campsites, setCampsites] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  // URL SEARCH-PARAMS
  const searchParams = useSearchParams();
  const urlLocation = searchParams.get("location");
  const urlGuests = searchParams.get("guests");
  const urlDate = searchParams.get("checkIn");

  function filterBySearchName(list, searchTerm) {
    const filterResult = list.filter((campsite) => {
      const name = campsite.name || "";
      const city = campsite.city || "";

      return (
        name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        city.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    console.log("AFTER filterResult", filterResult);
    return filterResult;
  }

  function SortByPriceClick() {
    let sortedCampingsites = [];
    if (sortByPrice) {
      // HighToLow
      sortedCampingsites = [...campsites].sort(
        (a, b) => b.pricePerNight - a.pricePerNight,
      );
    } else {
      // LowToHigh
      sortedCampingsites = [...campsites].sort(
        (a, b) => a.pricePerNight - b.pricePerNight,
      );
    }

    setCampsites(sortedCampingsites);
    setSortByPrice(!sortByPrice);
  }

  function SortbyRatingClick() {
    let sortedCampingsites = [];
    if (sortByRating) {
      // HighToLow
      sortedCampingsites = [...campsites].sort((a, b) => b.rating - a.rating);
    } else {
      // LowToHigh
      sortedCampingsites = [...campsites].sort((a, b) => a.rating - b.rating);
    }

    setCampsites(sortedCampingsites);
    setSortByRating(!sortByRating);
  }

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("/api/campsites", { cache: "no-cache" });
      const data = await response.json();
      setCampsites(data);
    }
    fetchLocations();
  }, []);

  return (
    <>
      {campsites.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-around h-full">
            <div className="flex-1 p-6">
              <FilterBar
                ratingOnClick={SortbyRatingClick}
                priceOnClick={SortByPriceClick}
                campsites={campsites}
                search={urlLocation}
                guests={urlGuests}
                date={urlDate}
              />
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {campsites.map((campground) => (
                  <Link
                    prefetch={false}
                    key={campground.id}
                    href={`/campsites/${campground.id}`}
                    className="text-gray-600 hover:text-black"
                  >
                    <CampgroundCard campground={campground} />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
