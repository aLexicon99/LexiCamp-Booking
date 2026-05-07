"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import useIsClient from "@/hooks/useIsClient";

const allLinks = [
  { label: "Home", href: "/" },
  { label: "Campsites", href: "/campsites" },
  { label: "Contact", href: "/contact" },
  { label: "My Bookings", href: "/my-bookings", authenticated: true },
];

export default function Header() {
  const pathname = usePathname();
  const [user] = useAuth();
  const isClient = useIsClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  if (!isClient) {
    return null;
  }

  const links = allLinks.filter((link) => !link.authenticated || user);
  const isActiveLink = (href) =>
    href === "/" ? pathname === href : pathname.startsWith(href);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-emerald-900/5 bg-stone-50 shadow-[0_4px_20px_rgba(27,67,50,0.03)] backdrop-blur-md">
      <div className="mx-auto flex h-18 max-w-screen-2xl items-center justify-between px-5 sm:px-8 md:px-12">
        <Link
          href="/"
          onClick={closeMenu}
          className="text-2xl font-black tracking-tight text-emerald-900 no-underline"
        >
          LexiCamp
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map(({ label, href }) => {
            const isActive = isActiveLink(href);
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-1 text-[0.95rem] no-underline transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-emerald-900"
                    : "font-medium text-stone-500 hover:text-emerald-900"
                }`}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-[-6px] left-1/2 block h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-orange-600" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3 md:gap-6">
          <button
            type="button"
            className="hidden cursor-pointer border-none bg-transparent text-[0.95rem] font-bold text-emerald-900 transition-colors duration-200 hover:text-emerald-700 md:block"
          >
            Become a Host
          </button>
          <Link
            href="/user"
            onClick={closeMenu}
            aria-label="User profile"
            className="material-symbols-outlined cursor-pointer select-none text-[1.75rem] text-stone-500 transition-colors duration-200 hover:text-emerald-900"
          >
            account_circle
          </Link>
          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-emerald-900 transition-colors hover:bg-emerald-900/5 md:hidden"
          >
            <span className="material-symbols-outlined text-[1.8rem]">
              {isMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`border-t border-emerald-900/5 bg-stone-50 px-5 py-4 shadow-lg transition-all md:hidden ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-2">
          {links.map(({ label, href }) => {
            const isActive = isActiveLink(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={`rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                  isActive
                    ? "bg-emerald-900 text-white!"
                    : "text-stone-600 hover:bg-emerald-900/5 hover:text-emerald-900"
                }`}
              >
                {label}
              </Link>
            );
          })}
          <button
            type="button"
            className="mt-2 rounded-lg px-4 py-3 text-left text-base font-bold text-emerald-900 transition-colors hover:bg-emerald-900/5"
          >
            Become a Host
          </button>
        </div>
      </div>
    </nav>
  );
}
