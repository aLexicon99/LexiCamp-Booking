import Link from "next/link";

<<<<<<< HEAD
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
=======
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Campsites", href: "/locations" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50 backdrop-blur-md border-b border-emerald-900/5 shadow-[0_4px_20px_rgba(27,67,50,0.03)]">
      <div className="flex justify-between items-center h-18 px-12 max-w-screen-2xl mx-auto">

        <Link href="/" className="text-2xl font-black tracking-tight text-emerald-900 no-underline">
          LexiCamp
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                `relative pb-1 text-[0.95rem] no-underline transition-colors duration-200 
                ${isActive 
                    ? "text-emerald-900 font-semibold" 
                    : "text-stone-500 font-medium hover:text-emerald-900"
                }`
              }
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-orange-600 block" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-6">
          <button className="hidden md:block text-emerald-900 font-bold text-[0.95rem] bg-transparent border-none cursor-pointer hover:text-emerald-700 transition-colors duration-200">
            Become a Host
          </button>
          <Link
              href="/user"
              className="material-symbols-outlined text-[1.75rem] text-stone-500 cursor-pointer hover:text-emerald-900 transition-colors duration-200 select-none">
            account_circle
          </Link>
        </div>

      </div>
    </nav>
>>>>>>> 39793a0784f07e676abfa5d6bd5727cb7d1e24f2
  );
}
