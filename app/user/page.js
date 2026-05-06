"use client";

import {useEffect} from "react";
import useAuth from "@/hooks/useAuth";
import {redirect} from "next/navigation";
import useIsClient from "@/hooks/useIsClient";

export default function Page() {
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
    <div>
        <>
          {/*✅ INLOGGAD */}
          <button
            className="w-full bg-orange-600 text-white p-2"
            onClick={logout}
          >
            Logga ut - {user.firstName}
          </button>
          <pre className="bg-gray-300">{JSON.stringify(user, null, 4)}</pre>
          {/* {
            <div className="mt-2">
              <p> Tidigare bokningar : {userData.bookings.length}</p>
              {userData.bookings && userData.bookings.length > 0 && (
                <>
                  {userData.bookings.map((booking, index) => (
                    <p key={index}>
                      <a href={`/locations/${booking.id}`}>{booking.id}</a>
                    </p>
                  ))}
                </>
              )}
            </div>
          } */}
        </>
    </div>
  );
}
