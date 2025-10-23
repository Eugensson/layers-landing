import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type NavItem = {
  label: string;
  href: string;
};

export type Logo = {
  name: string;
  image: StaticImport;
};

export type Avatar = {
  src: StaticImport;
  alt: string;
  z: string;
  ml: string;
  border?: string;
  placeholder?: boolean;
};

export type Integration = {
  name: string;
  icon: StaticImport;
  description: string;
};
