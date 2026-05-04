"use client";

import Link from "next/link";
export const dynamic = "force-dynamic";
import Loading from "@/components/Loading";
import { useEffect, useState } from "react";
import CampgroundCard from "@/components/CampgroundCard";

export default function Locations() {
  const [campsites, setCampsites] = useState([]);

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
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {campsites.map((campground, index) => (
                  <Link
                    key={index}
                    prefetch={false}
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
