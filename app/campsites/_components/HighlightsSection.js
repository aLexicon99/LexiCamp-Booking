"use client";

import { Suspense } from "react";
import Loading from "@/components/Loading";

export default function HighlightsSection() {
  return (
    <Suspense fallback={<Loading />}>
      <RenderRandomHighlights />
    </Suspense>
  );
}

function RenderRandomHighlights() {
  const items = [
    {
      title: "Campfire friendly",
      text: "Dedicated fire pit with local hardwood provided for guests.",
      icon: "local_fire_department",
    },
    {
      title: "Pets allowed",
      text: "Bring your furry friends along for the adventure.",
      icon: "pets",
    },
    {
      title: "Wildlife",
      text: "Embrace nature's great outdoor adventure.",
      icon: "camping",
    },
    {
      title: "Hiking",
      text: "Explore trails and discover nature's hidden paths.",
      icon: "hiking",
    },
    {
      title: "Free Solar Charger",
      text: "Recharge your Car or Van with clean solar energy.",
      icon: "parking_meter",
    },
  ];

  // eslint-disable-next-line react-hooks/purity
  const shuffled = items.sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, 3);

  return (
    <section className="space-y-6">
      {selected.map((item, i) => (
        <div key={i} className="flex gap-6">
          <span
            className="material-symbols-outlined text-emerald-900 text-3xl"
            data-icon={`${item.icon}`}
          >
            {item.icon}
          </span>
          <div>
            <h3 className="font-bold text-emerald-900">{item.title}</h3>
            <p className="text-stone-500">{item.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
