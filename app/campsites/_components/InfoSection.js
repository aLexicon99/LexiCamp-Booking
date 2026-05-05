export default function InfoSection({ campingsite }) {
  return (
    <section className="border-b border-stone-200 pb-10">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-emerald-900 mb-1">
            {campingsite.name} {campingsite.city && `in ${campingsite.city}`}
          </h2>
          <p className="text-stone-500 font-medium">
            {campingsite.capacity} beds / rooms / parkingspots
          </p>
        </div>
      </div>
    </section>
  );
}
