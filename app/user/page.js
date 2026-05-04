"use client";

import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import useIsClient from "@/hooks/useIsClient";

export default function Page() {
  const [newUser, setNewUser] = useState("");
  const [message, setMessage] = useState("");
  const [user, login, logout] = useAuth();
  const isClient = useIsClient();

  // förhindrar hydrationsfel i client component
  if (!isClient) {
    return null;
  }

  function loginUser() {
    if (!newUser || newUser.trim() === "") return;

    const isSuccess = login(newUser);
    if (!isSuccess) {
      // ⛔ FEL - LOGIN UPPGIFTER STÄMMER EJ
      setMessage(`Användaren "${newUser}" hittades inte, försök igen...`);
    }
  }

  function logoutUser() {
    logout();
    setMessage("");
    setNewUser("");
    // window.location.href = "/";
  }

  return (
    <div>
      {!user ? (
        <>
          {/*❌ INTE INLOGGAD */}
          <div className="flex">
            <input
              type="text"
              value={newUser}
              className="border p-2"
              placeholder="Ange ditt Namn"
              onChange={(e) => setNewUser(e.target.value)}
            />
            <button className="w-full bg-green-600 p-2" onClick={loginUser}>
              Logga in
            </button>
          </div>
          <p className="text-red-500">{message}</p>
        </>
      ) : (
        <>
          {/*✅ INLOGGAD */}
          <button
            className="w-full bg-orange-600 text-white p-2"
            onClick={logoutUser}
          >
            Logga ut - {user.fullname}
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
      )}
    </div>
  );
}
