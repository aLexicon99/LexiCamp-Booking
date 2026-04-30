// TODO: wrap card in Link to details page when routing is implemented


export default function CampgroundCard({ campground }) {

  const imagePath = campground.images?.[0]
    ? `/images/locations/${campground.id}/${campground.images[0]}`
    : null;


  return (
    <article className="overflow-hidden rounded-[var(--radius-lg)] bg-[var(--card)] shadow-md">
      {imagePath ? (
        <img
          src={imagePath}
          alt={campground.name}
          className="h-48 w-full object-cover"
        />
      ) : (
        <div className="flex h-48 items-center justify-center bg-gray-300 text-sm text-gray-600">
          image placeholder
        </div>
      )}

      <div className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-[var(--primary)]">
            {campground.name}
          </h3>

          <span className="text-sm font-semibold">
            ⭐ {campground.rating}
          </span>
        </div>

        <p className="text-sm text-[var(--muted)]">
          {campground.city}
        </p>

        <div className="flex flex-wrap gap-2">
          {campground.activities?.slice(0, 3).map((activity) => (
            <span
              key={activity}
              className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-semibold"
            >
              {activity}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between pt-2">
          <p className="font-bold text-[var(--primary)]">
            {campground.pricePerNight} Kr
            <span className="text-sm font-normal text-[var(--muted)]">
              {" "}
              / night
            </span>
          </p>
        </div>
      </div>
    </article>
  );
}