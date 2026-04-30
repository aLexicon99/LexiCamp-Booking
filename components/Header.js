"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Profile", href: "/profile" },
  { label: "Booking Page", href: "/booking-page" },
  { label: "Campground Details", href: "/campground-details" },
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
          <span className="material-symbols-outlined text-[1.75rem] text-stone-500 cursor-pointer hover:text-emerald-900 transition-colors duration-200 select-none">
            account_circle
          </span>
        </div>

      </div>
    </nav>
  );
}
