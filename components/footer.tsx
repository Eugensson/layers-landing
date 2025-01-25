import logoImage from "@/public/images/logo.svg";

import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center md:justify-between gap-6">
          <div>
            <Image src={logoImage} alt="Layers logo" />
          </div>
          <nav>
            <ul className="flex items-center gap-6">
              {footerLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link href={href} className="text-sm text-white/50">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
};
