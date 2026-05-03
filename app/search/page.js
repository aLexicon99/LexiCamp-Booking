"use client";

import HeroSearch from "@/components/HeroSearch";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const location = searchParams.get("location");
  const checkIn = searchParams.get("checkIn");
  const guests = searchParams.get("guests");

  return (
    <>
      <HeroSearch />
      
      <div>
        <p>
          Location/Campsite: <b>{location}</b>
        </p>
        <p>
          CheckIn Date: <b>{checkIn}</b>
        </p>
        <p>
          Total Guests/Beds: <b>{guests}</b>
        </p>
      </div>
    </>
  );
}
