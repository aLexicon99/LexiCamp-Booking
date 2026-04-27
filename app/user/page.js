"use client";

import { useState } from "react";
import Header from "@/components/Header";
import allUsers from "@/public/users_data.json";
import { useLocalStorage, useIsClient } from "@/components/lib/useLocalStorage";

export default function Page() {
  const [newUser, setNewUser] = useState("");
  const [message, setMessage] = useState("");

  // Storage & CustomHook
  const isClient = useIsClient();
  const [user, setUser, removeUser] = useLocalStorage("user", null);
  const [userData, setUserData, removeData] = useLocalStorage("data", {});

  // förhindrar hydrationsfel i client component
  if (!isClient) {
    return null;
  }

  function loginUser() {
    if (!newUser || newUser.trim() === "") return;

    const userToLogin = newUser.trim().toLocaleLowerCase();
    const storedUserData = allUsers.find((_user) => _user.name === userToLogin);
    if (storedUserData) {
      // ✅ ALLT OK - ANVÄNDAREN HITTADES
      setUserData(storedUserData);
      return setUser(newUser);
      // return window.location.href = "/";
    } else {
      // ⛔ FEL - LOGIN UPPGIFTER STÄMMER EJ
      setMessage(`Användaren "${newUser}" hittades inte, försök igen...`);
      return setNewUser("");
    }
  }

  function logoutUser() {
    removeUser();
    removeData();
    setMessage("");
    setNewUser("");
    // window.location.href = "/";
  }

  return (
    <div>
      <Header />

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
            Logga ut - {userData.fullname}
          </button>
          <pre className="bg-gray-300">{JSON.stringify(userData, null, 4)}</pre>
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
