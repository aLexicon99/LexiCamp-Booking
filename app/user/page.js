"use client";

import {useEffect} from "react";
import useAuth from "@/hooks/useAuth";
import {redirect} from "next/navigation";
import useIsClient from "@/hooks/useIsClient";
import Button from "@/components/Button"


export default function page() {
  const [user, _, logout] = useAuth();
  const isClient = useIsClient();

  useEffect(() => {
    if (!user) {
      redirect("/login");
    }
  },[user]);

  if (!user || !isClient) {
    return null;
  }

  return (
    <div className="max-w-md m-auto">
        {/*✅ INLOGGAD */}
        <Button variant="primary" onClick={logout} extraCssClasses="ml-auto mr-auto mt-5 mb-5 block">
            Logga ut - {user.firstName}
        </Button>
        <div className="ml-[15] mr-[15] bg-gray-300 pt-6 px-[30] py-[30] rounded-[12] shadow-[5px_4px_20px_rgb(170,170,170)]">
            <h2 className="text-xl text-green-700"><b>User data</b></h2>
            <div className="my-[15]"><b>Name: </b> {user.firstName} {user.lastName }</div>
            <div className="my-[15]"><b>Username: </b> {user.username }</div>
            <div className="my-[15]"><b>Email: </b> {user.email }</div>
            <h2 className="mt-[25] text-xl text-green-700"><b>Previous bookings</b></h2>
            <hr className="w-full mt-[15] mb-[15]"/>
            <p><b>Camping site: </b>Bingsmarkens Camping</p>
            <p><b>Start date: </b>2026-04-15</p>
            <p><b>End date: </b>2026-04-18</p>
            <p><b>Total price: </b>3560 kr</p>
            <hr className="w-full mt-[15] mb-[15]"/>
            <p><b>Camping site: </b>Borrbystrand Camping</p>
            <p><b>Start date: </b>2025-07-10</p>
            <p><b>End date: </b>2025-07-16</p>
            <p><b>Total price: </b>4560 kr</p>
        </div>
    </div>
  );
}
