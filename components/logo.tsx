import Link from "next/link";
import Image from "next/image";

import logoImg from "@/public/images/logo.svg";

export const Logo = () => {
  return (
    <Link href="/">
      <Image src={logoImg} alt="Layers Logo" className="h-9 md:h-auto w-auto" />
    </Link>
  );
};
