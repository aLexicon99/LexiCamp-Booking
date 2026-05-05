export default function HighlightsSection() {
  return (
    <section className="space-y-6">
      <div className="flex gap-6">
        <span
          className="material-symbols-outlined text-emerald-900 text-3xl"
          data-icon="eco"
        >
          eco
        </span>
        <div>
          <h3 className="font-bold text-emerald-900">Eco-conscious site</h3>
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
          <h3 className="font-bold text-emerald-900">Campfire friendly</h3>
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
  );
}
