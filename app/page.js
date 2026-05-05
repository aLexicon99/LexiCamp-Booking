import CampgroundCard from "@/components/CampgroundCard";
import HeroSearch from "@/components/HeroSearch";
import Link from "next/link";
import campgrounds from "@/public/locations_data.json";

const topPicks = campgrounds.slice(0, 3);

const benefits = [
  {
    title: "Eco-Conscious",
    description:
      "We highlight locations with low-impact stays and nature-first experiences.",
  },
  {
    title: "Hand-Vetted",
    description:
      "Each campsite is presented with practical details for easier planning.",
  },
  {
    title: "Flexible Booking",
    description:
      "Simple browsing helps travelers compare campsites before choosing.",
  },
  {
    title: "24/7 Support",
    description:
      "The experience is structured so future support features can plug in easily.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#f8f9f5] text-[#082f23]">
      <section className="relative flex min-h-[680px] items-center justify-center overflow-hidden bg-[#10251c] px-6 py-24 text-white">
        <div className="absolute inset-0 bg-[url('/images/hero.jpg')] bg-cover bg-center opacity-60" />
        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
            The wild is calling.
          </h1>
          <p className="mt-5 max-w-2xl text-lg font-medium text-white/90 md:text-xl">
            Discover hand-picked campsites and outdoor escapes curated for the
            modern explorer.
          </p>
          <div className="mt-10 w-full">
            <HeroSearch />
          </div>
        </div>
      </section>

      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#fb8500]">
                Curated
              </p>
              <h2 className="mt-3 text-4xl font-extrabold">
                Top Picks for You
              </h2>
            </div>
            <Link
              href="/campsites"
              className="hidden text-sm font-semibold text-[#043f2d] hover:text-[#fb8500] md:block"
            >
              View all destinations
            </Link>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {topPicks.map((campground) => (
              <CampgroundCard key={campground.id} campground={campground} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div className="relative min-h-[420px] overflow-hidden rounded-lg bg-[url('/images/locations/2169631/image1.jpg')] bg-cover bg-center">
            <div className="absolute bottom-8 left-8 max-w-xs rounded-lg bg-white p-6 shadow-xl">
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
            <h2 className="mt-4 max-w-xl text-4xl font-extrabold leading-tight md:text-5xl">
              Elevating the outdoor experience.
            </h2>
            <p className="mt-5 max-w-2xl text-[#66736d]">
              We believe camping should not mean compromising on comfort or
              values. Our platform bridges the gap between rugged nature and
              thoughtful design.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <div key={benefit.title}>
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-md bg-[#043f2d] text-white">
                    <svg
                      aria-hidden="true"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m5 13 4 4L19 7"
                      />
                    </svg>
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

      <section className="px-6 py-24">
        <div className="relative mx-auto flex max-w-7xl flex-col items-center overflow-hidden rounded-lg bg-[#043f2d] bg-[url('/images/action.jpg')] bg-cover bg-center px-6 py-24 text-center text-white">
          <div className="absolute inset-0 bg-[#043f2d]/75" />
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-4xl font-extrabold md:text-6xl">
              Ready to Explore?
            </h2>
            <p className="mt-5 text-lg text-white/85">
              Join 50,000+ explorers finding their peace in the wild. Your next
              adventure starts with a single click.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/campsites"
                className="rounded-full bg-[#fb8500] px-8 py-4 font-bold text-white hover:bg-[#e67800]"
              >
                Start Booking Now
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/40 bg-white/15 px-8 py-4 font-bold text-white hover:bg-white/25"
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
