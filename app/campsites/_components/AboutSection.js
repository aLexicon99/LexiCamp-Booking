export default function AboutSection({ campingsite }) {
  return (
    <section className="border-t border-stone-200 pt-10">
      <h2 className="text-2xl font-bold text-emerald-900 mb-6">
        About this escape
      </h2>
      <p className="text-stone-600 leading-relaxed text-lg mb-4">
        {campingsite.description}
      </p>
      <p className="text-stone-600 leading-relaxed text-lg">
        Our site is perched on a gentle ridge overlooking the {campingsite.city}{" "}
        River. Wake up to the sound of rushing water and the mist rolling
        through the cedar trees. {"We've"} prepared everything you need for a
        rugged yet comfortable stay...
      </p>
    </section>
  );
}
