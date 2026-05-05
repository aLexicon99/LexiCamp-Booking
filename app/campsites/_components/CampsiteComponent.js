"use client";

import GalleryGrid from "./GalleryGrid";
import InfoSection from "./InfoSection";
import AboutSection from "./AboutSection";
import BookingSection from "./BookingSection";
import CampsiteHeader from "./CampsiteHeader";
import AmenitiesSection from "./AmenitiesSection";
import HighlightsSection from "./HighlightsSection";

export default function CampsiteComponent({ campingsite }) {
  return (
    <main className="pt-0 pb-32 max-w-7xl mx-auto px-6 md:px-12">
      <CampsiteHeader campingsite={campingsite} />
      <GalleryGrid campingsite={campingsite} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-12">
          <InfoSection campingsite={campingsite} />
          <HighlightsSection campingsite={campingsite} />
          <AboutSection campingsite={campingsite} />
          <AmenitiesSection campingsite={campingsite} />
        </div>

        <BookingSection campingsite={campingsite} />
      </div>
    </main>
  );
}
