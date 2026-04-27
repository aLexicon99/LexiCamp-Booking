"use client";

import Image from "next/image";

export default function Page() {
  const pages = [
    { title: "Hem", link: "/" },
    { title: "Kontakt", link: "/contact" },
    { title: "Locations", link: "/locations" },
    { title: "Backend API", link: "/api/locations", newTab: true },
  ];
  return (
    <div className="w-full pb-5 pt-5 bg-yellow-400">
      <span className="flex items-center justify-center">
        <Image
          width={80}
          height={80}
          loading="eager"
          alt="lexicamp-logo"
          src="/images/transparent_logo.png"
        />
        <h2 className="text-3xl font-semibold text-white text-shadow-lg">
          LexiCamp
        </h2>
      </span>
      <div className="text-white text-shadow-md flex justify-evenly">
        {pages.map((page, index) => (
          <p key={index} className={`pl-2 hover:text-amber-800`}>
            <a href={page.link} target={page.newTab ? "_blank" : "_self"}>
              {page.title}
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
