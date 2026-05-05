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
        {/* <div className="flex items-center gap-4 text-stone-700">
                <span className="material-symbols-outlined" data-icon="forest">
                  forest
                </span>
                <span>Direct trail access</span>
              </div>
              <div className="flex items-center gap-4 text-stone-700">
                <span className="material-symbols-outlined" data-icon="waves">
                  waves
                </span>
                <span>River view</span>
              </div>
              <div className="flex items-center gap-4 text-stone-700">
                <span
                  className="material-symbols-outlined"
                  data-icon="outdoor_grill"
                >
                  outdoor_grill
                </span>
                <span>Cooking basics</span>
              </div>
              <div className="flex items-center gap-4 text-stone-700">
                <span className="material-symbols-outlined" data-icon="shower">
                  shower
                </span>
                <span>Solar shower</span>
              </div>
              <div className="flex items-center gap-4 text-stone-700">
                <span
                  className="material-symbols-outlined"
                  data-icon="wifi_off"
                >
                  wifi_off
                </span>
                <span>Digital detox (No Wifi)</span>
              </div>
              <div className="flex items-center gap-4 text-stone-700 line-through text-stone-400">
                <span
                  className="material-symbols-outlined"
                  data-icon="battery_charging_full"
                >
                  battery_charging_full
                </span>
                <span>Electrical hookup</span>
              </div> */}
      </div>
      {/* <!-- <button
              className="px-8 py-3 border border-stone-900 rounded-lg font-bold hover:bg-stone-100 transition-colors"
            >
              Show all 24 amenities
            </button> --> */}
    </section>
  );
}
