import apexLogo from "@/public/images/apex.svg";
import twiceLogo from "@/public/images/twice.svg";
import pulseLogo from "@/public/images/pulse.svg";
import acmeLogo from "@/public/images/acme-corp.svg";
import quantumLogo from "@/public/images/quantum.svg";
import outsideLogo from "@/public/images/outside.svg";
import celestialLogo from "@/public/images/celestial.svg";
import echoValleyLogo from "@/public/images/echo-valley.svg";
import avatar1 from "@/public/images/avatar-lula-meyers.jpg";
import avatar2 from "@/public/images/avatar-owen-garcia.jpg";
import avatar3 from "@/public/images/avatar-florence-shaw.jpg";
import avatar4 from "@/public/images/avatar-ashwin-santiago.jpg";

import { Avatar, Logo, NavItem } from "@/types";

export const navData: NavItem[] = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

export const logosData: Logo[] = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export const avatarList: Avatar[] = [
  { src: avatar1, alt: "Lula Meyers", z: "z-40", ml: "" },
  {
    src: avatar2,
    alt: "Owen Garcia",
    z: "z-30",
    ml: "-ml-6",
    border: "border-indigo-500",
  },
  {
    src: avatar3,
    alt: "Florence Shaw",
    z: "z-20",
    ml: "-ml-6",
    border: "border-amber-500",
  },
  {
    src: avatar4,
    alt: "Ashwin Santiago",
    z: "z-10",
    ml: "-ml-6",
    border: "border-transparent group-hover:border-green-500",
    placeholder: true,
  },
];

export const keyList: string[] = ["shift", "alt", "C"];

export const featureList: string[] = [
  "Asset Library",
  "Code Preview",
  "Flow Mode",
  "Smart Sync",
  "Auto Layout",
  "Fast Search",
  "Smart Guides",
];
