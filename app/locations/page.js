"use client";

import { useEffect, useState } from "react";

export default function Locations() {
  const [Locations, setLocations] = useState([]);

  useEffect(() => {
    async function fetchLocations() {
      const response = await fetch("/api/locations", { cache : 'no-cache' });
      const data = await response.json();
      setLocations(data);
    }
    fetchLocations();
  }, []);

  return (
    <div className="flex justify-around h-full">
      <div className="flex-1">
        {Locations.map((location, index) => (
          <div key={index}>
            <a
              href={`/locations/${location.id}`}
              className="text-gray-600 hover:text-black"
            >
              {location.name}
            </a>
          </div>
        ))}
      </div>
      <div className="flex-2 pl-2 border-l-2 border-b-2 max-h-full">
        {" KARTA "}
      </div>
    </div>
  );
}
