"use client";

export default function AmenitiesSection({ campingsite }) {
  return (
    <section className="border-t border-stone-200 pt-10">
      <h2 className="text-2xl font-bold text-emerald-900 mb-8">
        What this place offers
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-12 mb-8">
        {campingsite.activities.map((activity, index) => (
          <div key={index} className="flex items-center gap-4 text-stone-700">
            <span
              className="material-symbols-outlined text-orange-600"
              data-icon="check"
            >
              check
            </span>
            <span className="font-semibold">{activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
