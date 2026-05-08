import CampgroundCard from "@/components/CampgroundCard";
import HeroSearch from "@/components/HeroSearch";
import Link from "next/link";
import campgrounds from "@/public/locations_data.json";

const featuredDestinations = campgrounds.slice(0, 3);

const benefits = [
  {
    title: "Eco-Conscious",
    icon: "eco",
    description:
      "We highlight locations with low-impact stays and nature-first experiences.",
  },
  {
    title: "Hand-Vetted",
    icon: "verified_user",
    description:
      "Each campsite is presented with practical details for easier planning.",
  },
  {
    title: "Flexible Booking",
    icon: "event_available",
    description:
      "Simple browsing helps travelers compare campsites before choosing.",
  },
  {
    title: "24/7 Support",
    icon: "support_agent",
    description:
      "The experience is structured so future support features can plug in easily.",
  },
];

export default function Home() {
  return (
    <div className="overflow-hidden bg-[#f8f9f5] text-[#082f23]">
      <section className="relative flex min-h-[620px] items-center justify-center overflow-hidden bg-[#10251c] px-4 py-16 text-white sm:px-6 sm:py-20 lg:min-h-[680px] lg:py-24">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="max-w-[12ch] text-4xl font-extrabold leading-tight sm:max-w-4xl sm:text-5xl md:text-7xl">
            The wild is calling.
          </h1>
          <p className="mt-4 max-w-2xl text-base font-medium text-white/90 sm:mt-5 md:text-xl">
            Discover hand-picked campsites and outdoor escapes curated for the
            modern explorer.
          </p>
          <div className="mt-8 w-full max-w-3xl sm:mt-10">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex flex-col items-start justify-between gap-5 sm:mb-10 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fb8500]">
                Curated
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Featured Destinations
              </h2>
              <p className="mt-3 max-w-2xl text-[#66736d]">
                Explore a few hand-picked campsites ready for your next outdoor
                escape.
              </p>
            </div>
            <Link
              href="/campsites"
              className="text-sm font-semibold text-[#043f2d] hover:text-[#fb8500]"
            >
              View all destinations
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {featuredDestinations.map((campground) => (
              <Link
                key={campground.id}
                href={`/campsites/${campground.id}`}
                className="block transition-transform hover:-translate-y-1"
              >
                <CampgroundCard campground={campground} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="relative min-h-[320px] overflow-hidden rounded-lg bg-[url('/images/locations/2169631/image1.jpg')] bg-cover bg-center sm:min-h-[420px]">
            <div className="absolute inset-x-4 bottom-4 rounded-lg bg-white p-5 shadow-xl sm:inset-x-auto sm:bottom-8 sm:left-8 sm:max-w-xs sm:p-6">
              <h3 className="text-base font-extrabold">
                Verified Experiences
              </h3>
              <p className="mt-2 text-sm text-[#66736d]">
                Every host and location on LexiCamp is hand-vetted for safety
                and sustainability.
              </p>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fb8500]">
              The LexiCamp Standard
            </p>
            <h2 className="mt-4 max-w-xl text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Elevating the outdoor experience.
            </h2>
            <p className="mt-5 max-w-2xl text-[#66736d]">
              We believe camping should not mean compromising on comfort or
              values. Our platform bridges the gap between rugged nature and
              thoughtful design.
            </p>

            <div className="mt-8 grid gap-7 sm:mt-10 sm:grid-cols-2 sm:gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-[#043f2d] text-white shadow-sm">
                    <span
                      aria-hidden="true"
                      className="material-symbols-outlined text-[20px] leading-none"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      {benefit.icon}
                    </span>
                  </div>
                  <h3 className="font-extrabold">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#66736d]">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-lg bg-[#043f2d] bg-[url('/images/action.jpg')] bg-cover bg-center px-5 py-16 text-center text-white sm:px-8 sm:py-20 lg:py-24">
          <div className="absolute inset-0 bg-[#043f2d]/75" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl md:text-6xl">
              Ready to Explore?
            </h2>
            <p className="mt-5 text-base text-white/85 sm:text-lg">
              Join 50,000+ explorers finding their peace in the wild. Your next
              adventure starts with a single click.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/campsites"
                className="w-full rounded-full bg-[#fb8500] px-8 py-4 font-bold text-white hover:bg-[#e67800] sm:w-auto"
              >
                Start Booking Now
              </Link>
              <Link
                href="/contact"
                className="w-full rounded-full border border-white/40 bg-white/15 px-8 py-4 font-bold text-white hover:bg-white/25 sm:w-auto"
              >
                Contact Support
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
