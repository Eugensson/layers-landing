import Link from "next/link";

import { Logo } from "@/components/logo";

import { footerData } from "@/lib/data";

export const Footer = () => {
  return (
    <footer className="py-8">
      <nav className="container pt-8 flex flex-col md:flex-row items-center md:justify-between gap-6 border-t border-white/15">
        <Logo />
        <ul className="flex items-center gap-6">
          {footerData.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-white/50 hover:text-white transition-colors duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};
