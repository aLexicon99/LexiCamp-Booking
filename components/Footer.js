"use client";
import { useLocalStorage } from "@/components/lib/useLocalStorage";

export default function Footer() {
  const [user] = useLocalStorage("user", null);
  const [userData] = useLocalStorage("data", null);

  return (
    <div className="w-full absolute bottom-0 border-t pb-5 pt-5 bg-yellow-400">
      <span className="flex items-center justify-center">
        <h2 className="text-md font-semibold text-shadow-lg text-white">
          FOOTER
        </h2>
      </span>
      <div className="absolute bottom-0 text-gray-700">
        <a href="/user">
          {!user ? (
            <p> 👤 UTLOGGAD </p>
          ) : (
            <p> 👤 INLOGGAD SOM : {userData.fullname} </p>
          )}
        </a>
      </div>
    </div>
  );
}
