import Link from "next/link";

const pages = [
  { title: "Explore", link: "/" },
  { title: "Top Rated", link: "/locations" },
  { title: "Sustainability", link: "/contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#e7e9e3] bg-[#f8f9f5]/95 px-6 py-5 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight text-[#043f2d]"
        >
          LexiCamp
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-9 text-sm text-[#49564f] md:flex"
        >
          {pages.map((page, index) => (
            <Link
              key={page.title}
              href={page.link}
              className={`relative transition-colors hover:text-[#043f2d] ${
                index === 0 ? "font-semibold text-[#043f2d]" : ""
              }`}
            >
              {page.title}
              {index === 0 && (
                <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[#fb8500]" />
              )}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 text-sm text-[#043f2d]">
          <Link
            href="/user"
            className="hidden transition-colors hover:text-[#fb8500] sm:inline"
          >
            Become a Host
          </Link>
          <Link
            href="/user"
            aria-label="User account"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d9ded6] transition-colors hover:border-[#043f2d]"
          >
            <span className="h-3 w-3 rounded-full border-2 border-[#043f2d]" />
          </Link>
        </div>
      </div>
    </header>
  );
}
