"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import logoImg from "@/public/images/logo.svg";

export const Logo = () => {
  return (
    <ScrollLink
      smooth
      to="home"
      duration={500}
      delay={50}
      offset={-150}
      className="cursor-pointer"
    >
      <Image src={logoImg} alt="Layers Logo" className="h-9 md:h-auto w-auto" />
    </ScrollLink>
  );
};
