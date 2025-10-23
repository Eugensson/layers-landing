import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavItem = {
  label: string;
  href: string;
};

export type Logo = {
  name: string;
  image: StaticImport;
};
