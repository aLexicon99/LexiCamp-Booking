"use client";

// import Image from "next/image";
import Header from "@/components/Header";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Location() {
  const [campingsite, setCampingsite] = useState({});

  const params = useParams();
  const { id } = params; // hämta ID från params

  useEffect(() => {
    async function fetchLocationData() {
      try {
        const response = await fetch(`http://localhost:3000/api/locations/`);
        const allCampingsites = await response.json();

        // hitta machande campingsite/location via ID
        const foundLocation = allCampingsites.find((c) => c.id === id);
        if (foundLocation) {
          setCampingsite(foundLocation);
        }
      } catch (error) {
        // felet som uppstått
        console.warn("[FEL][locations/:id]", error);
      }
    }

    if (id) fetchLocationData();
  }, [id]);

  return (
    <>
      <Header />

      <div className="p-2">
        {campingsite.name ? (
          <div>
            <h3 className="text-4xl font-extrabold">
              Välkommen till{" "}
              <a
                target="_blank"
                className="underline"
                href={`${campingsite.url}`}
              >
                {campingsite.name}
              </a>
            </h3>

            <div className="bg-gray-200 p-2 rounded-md">
              <p>{campingsite.shortDescription}</p>
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
              {/*

              <Image
                width={240}
                height={180}
                alt="lexicamp-logo"
                src={`${campingsite.imageUrl}`}
              />

              <img
                alt="lexicamp-logo"
                src={`${campingsite.imageUrl}`}
              /> 

              */}
            </>
          </div>
        ) : (
          <> Laddar... </>
        )}
      </div>
    </>
  );
}
