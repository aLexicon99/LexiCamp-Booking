"use client";

import Link from "next/link";
export const dynamic = "force-dynamic";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import FilterBar from "./_components/FilterBar";
import { useSearchParams } from "next/navigation";
import CampgroundCard from "@/components/CampgroundCard";
import HeroSearch from "@/components/HeroSearch";
import {
  sortCampsByPrice,
  sortCampsByRating,
  filterBySearchName,
} from "./_components/FilterSearchFunctions";

export default function Locations() {
  const [message, setMessage] = useState(false);
  const [campsites, setCampsites] = useState([]);
  const [sortByPrice, setSortByPrice] = useState(false);
  const [sortByRating, setSortByRating] = useState(false);

  const searchParams = useSearchParams();
  const location = searchParams.get("location");

  function SortByPriceClick() {
    setSortByPrice(!sortByPrice);
    setCampsites(sortCampsByPrice(campsites, sortByPrice));
  }

  function SortByRatingClick() {
    setSortByRating(!sortByRating);
    setCampsites(sortCampsByRating(campsites, sortByRating));
  }

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("/api/campsites", { cache: "no-cache" });
      const data = await response.json();

      if (location) {
        const foundLocations = filterBySearchName(data, location);
        if (foundLocations.length === 0) {
          setMessage(`No locations with name/city "${location}"`);
        }
        setCampsites(foundLocations);
      } else {
        setCampsites(data);
      }
    }
    fetchLocations();
  }, [location]);

  return (
    <>
      {campsites.length === 0 && !message ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-around h-full">
            <div className="flex-1 p-6">
              <div className="mb-4">
                <HeroSearch />
              </div>
              <FilterBar
                ratingOnClick={SortByRatingClick}
                priceOnClick={SortByPriceClick}
                campsites={campsites}
                search={location}
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
