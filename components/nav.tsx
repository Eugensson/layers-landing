import Link from "next/link";

import { navData } from "@/lib/data";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  itemStyles?: string;
  linkStyles?: string;
}

export const Nav = ({
  containerStyles,
  listStyles,
  itemStyles,
  linkStyles,
}: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navData.map((item) => (
          <li key={item.label} className={itemStyles}>
            <Link href={item.href} className={linkStyles}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
