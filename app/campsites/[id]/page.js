"use client";

import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Loading";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Location() {
  const [campingsite, setCampingsite] = useState({});

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const response = await fetch(`/api/campsites/${id}`, {
          cache: "no-cache",
        });
        const campingsiteData = await response.json();
        if (campingsiteData.message) {
          throw console.error(`Campsite Error :`, campingsiteData.message);
        }
        setCampingsite(campingsiteData);
      } catch (error) {
        console.warn(`[API-FEL][campsites/:id=${id}]`, error);
      }
    }

    if (id) fetchLocationData();
  }, [id]);

  return (
    <>
      <div className="p-2">
        {campingsite.name ? (
          <div>
            <h3 className="text-4xl font-extrabold">
              Välkommen till{" "}
              <Link
                target="_blank"
                prefetch={false}
                className="underline"
                href={`${campingsite.url}`}
              >
                {campingsite.name}
              </Link>
            </h3>

            <div className="bg-gray-200 p-2 rounded-md">
              <p>{campingsite.description}</p>
            </div>

            <div className="flex">
              {campingsite.activities.length > 0 && (
                <>
                  {campingsite.activities.map((activity, index) => (
                    <p key={index} className="bg-[#001437] text-white m-1 p-1">
                      {activity}
                    </p>
                  ))}
                </>
              )}
            </div>

            <>
              {/* <Image
                width={240}
                height={180}
                loading="eager"
                className="w-full"
                alt="campsite image"
                src={`/images/locations/${campingsite.id}/${campingsite.images[0]}`}
              /> */}
            </>
          </div>
        ) : (
          <Loading />
        )}
      </div>
    </>
  );
}
