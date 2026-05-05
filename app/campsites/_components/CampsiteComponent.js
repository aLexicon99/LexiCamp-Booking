import Image from "next/image";
import GalleryGrid from "./GalleryGrid";
import AboutSection from "./AboutSection";
import AmenitiesSection from "./AmenitiesSection";
import BookingSection from "./BookingSection";
import InfoSection from "./InfoSection";
import CampsiteHeader from "./CampsiteHeader";

export default function CampsiteComponent({ campingsite }) {
  return (
    <main className="pt-0 pb-32 max-w-7xl mx-auto px-6 md:px-12">
      <CampsiteHeader campingsite={campingsite} />
      <GalleryGrid campingsite={campingsite} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <InfoSection campingsite={campingsite} />

          {/* <!-- Highlights Section --> */}
          <section className="space-y-6">
            <div className="flex gap-6">
              <span
                className="material-symbols-outlined text-emerald-900 text-3xl"
                data-icon="eco"
              >
                eco
              </span>
              <div>
                <h3 className="font-bold text-emerald-900">
                  Eco-conscious site
                </h3>
                <p className="text-stone-500">
                  This site is powered by solar and features a sustainable waste
                  management system.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <span
                className="material-symbols-outlined text-emerald-900 text-3xl"
                data-icon="local_fire_department"
              >
                local_fire_department
              </span>
              <div>
                <h3 className="font-bold text-emerald-900">
                  Campfire friendly
                </h3>
                <p className="text-stone-500">
                  Dedicated fire pit with local hardwood provided for guests.
                </p>
              </div>
            </div>
            <div className="flex gap-6">
              <span
                className="material-symbols-outlined text-emerald-900 text-3xl"
                data-icon="pets"
              >
                pets
              </span>
              <div>
                <h3 className="font-bold text-emerald-900">Pets allowed</h3>
                <p className="text-stone-500">
                  Bring your furry friends along for the adventure.
                </p>
              </div>
            </div>
          </section>

          <AboutSection campingsite={campingsite} />
          <AmenitiesSection campingsite={campingsite} />
        </div>

        <BookingSection campingsite={campingsite} />
      </div>
    </main>
  );
}
