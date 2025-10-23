"use client";

import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { navData } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  itemStyles?: string;
  linkStyles?: string;
  setMobileNav?: () => void;
}

export const Nav = ({
  containerStyles,
  listStyles,
  itemStyles,
  linkStyles,
  setMobileNav,
}: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navData.map(({ name, path, offset }) => (
          <li key={name} className={itemStyles}>
            <ScrollLink
              spy
              smooth
              to={path}
              duration={500}
              delay={50}
              offset={offset}
              className={cn("cursor-pointer", linkStyles)}
              activeClass="active"
              onClick={setMobileNav}
            >
              {name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
