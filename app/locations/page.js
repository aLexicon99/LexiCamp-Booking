"use client";

import Link from "next/link";
export const dynamic = "force-dynamic";
import Header from "@/components/Header";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
// import locations from "@/public/locations_data.json";
import CampgroundCard from "@/components/CampgroundCard";

export default function Locations() {
  const [Locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("/api/locations", { cache: "no-cache" });
      const data = await response.json();
      setLocations(data);
    }
    fetchLocations();
  }, []);

  return (
    <>
      {Locations.length === 0 ? (
        <Loading />
      ) : (
        <>
          <div className="flex justify-around h-full">
            <div className="flex-1 p-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Locations.slice(0, 6).map((campground, index) => (
                  <Link
                    key={index}
                    href={`/locations/${campground.id}`}
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
