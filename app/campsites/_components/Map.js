"use client";

import { useEffect, useRef } from "react";

export default function Map({ lati, long }) {
  const mapContainer = useRef(null);
  const maps = useRef(null);

  useEffect(() => {
    if (maps.current || !window.L) return;
    maps.current = window.L.map(mapContainer.current).setView([lati, long], 12);

    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 16,
    }).addTo(maps.current);

    window.L.marker([lati, long]).addTo(maps.current);
  }, [lati, long]);

  return (
    <div
      ref={mapContainer}
      className="rounded-2xl"
      style={{ height: "100%", width: "100%", border: "none !important" }}
    />
  );
}
