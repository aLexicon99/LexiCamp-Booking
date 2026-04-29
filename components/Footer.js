import Link from "next/link";

const footerLinks = ["Terms", "Privacy", "Support", "Journal"];

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#e4e6df] bg-[#f8f9f5] px-6 py-9 text-[#053f2d]">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="text-base font-bold tracking-tight">
            LexiCamp
          </Link>
          <p className="mt-2 text-xs text-[#8c948a]">
            © 2024 LexiCamp. Nature-inspired escapes.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-[#8c948a]">
            {footerLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="transition-colors hover:text-[#053f2d] focus:outline-none focus:ring-2 focus:ring-[#053f2d] focus:ring-offset-4 focus:ring-offset-[#f8f9f5]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4 text-[#006b4f]">
          <a
            href="#"
            aria-label="LexiCamp community"
            className="transition-colors hover:text-[#053f2d] focus:outline-none focus:ring-2 focus:ring-[#053f2d] focus:ring-offset-4 focus:ring-offset-[#f8f9f5]"
          >
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
                d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.6 9h16.8M3.6 15h16.8M12 3c2.1 2.5 3.2 5.5 3.2 9S14.1 18.5 12 21c-2.1-2.5-3.2-5.5-3.2-9S9.9 5.5 12 3Z"
              />
            </svg>
          </a>

          <a
            href="#"
            aria-label="Share LexiCamp"
            className="transition-colors hover:text-[#053f2d] focus:outline-none focus:ring-2 focus:ring-[#053f2d] focus:ring-offset-4 focus:ring-offset-[#f8f9f5]"
          >
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
                d="M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM6 20a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m8.7 15.4 6.6-3.8M8.7 8.6l6.6 3.8"
              />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
