"use client";

import Map from "@/components/Map";
import Image from "next/image";

export default function GalleryGrid({ campingsite }) {
  return (
    <div>
      {/* Small screens */}
      <section className="grid grid-cols-1 grid-rows-1 h-75 mb-12 overflow-hidden md:hidden">
        <div className="col-span-2 row-span-2 relative">
          <Image
            width={600}
            height={400}
            loading="eager"
            alt="Main Camp View"
            data-alt="Main camp image"
            src={`/images/locations/${campingsite.id}/${campingsite.images[0]}`}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </section>
      {/* md/lg screens */}
      <section className="grid-cols-4 grid-rows-2 gap-3 h-125 mb-12 hidden md:grid">
        <div className="col-span-2 row-span-2 relative overflow-hidden">
          <Image
            width={800}
            height={600}
            loading="eager"
            alt="Main Camp View"
            data-alt="Main camp image"
            src={`/images/locations/${campingsite.id}/${campingsite.images[0]}`}
            className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {campingsite.images.slice(1, 3).map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
          >
            <Image
              width={800}
              height={600}
              loading="eager"
              alt={`${image} picture`}
              data-alt={`${image} picture`}
              src={`/images/locations/${campingsite.id}/${image}`}
              className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        ))}

        <div className="col-span-2">
          <Map lati={campingsite.location.lat} long={campingsite.location.lng} />
        </div>
      </section>
    </div>
  );
}
