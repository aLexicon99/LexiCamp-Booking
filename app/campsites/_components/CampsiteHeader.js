"use client";

export default function CampsiteHeader({ campingsite }) {
  return (
    <header className="mb-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 mb-2">
            {campingsite.name}
          </h1>
          <div className="flex items-center gap-4 text-stone-600">
            <div className="flex items-center gap-1">
              <span
                className="material-symbols-outlined text-orange-500 text-base"
                style={{ fontVariationSettings: "FILL" }}
                data-icon="star"
              >
                star
              </span>
              <span className="font-bold text-on-surface">
                {campingsite.rating}
              </span>
            </div>
            {campingsite.city && (
              <>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <span
                    className="material-symbols-outlined text-base"
                    data-icon="location_on"
                  >
                    location_on
                  </span>

                  <span className="underline cursor-pointer">
                    <a
                      target="_blank"
                      className="underline cursor-pointer"
                      href={`https://www.openstreetmap.org/?mlat=${campingsite.location.lat}&mlon=${campingsite.location.lng}#map=12/${campingsite.location.lat}/${campingsite.location.lng}`}
                    >
                      {campingsite.city}
                    </a>
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-stone-100 rounded-lg transition-colors font-medium text-sm">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="share"
            >
              share
            </span>
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-stone-100 rounded-lg transition-colors font-medium text-sm">
            <span
              className="material-symbols-outlined text-lg"
              data-icon="favorite"
            >
              favorite
            </span>
            Save
          </button>
        </div>
      </div>
    </header>
  );
}
