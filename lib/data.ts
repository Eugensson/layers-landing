import apexLogo from "@/public/images/apex.svg";
import twiceLogo from "@/public/images/twice.svg";
import pulseLogo from "@/public/images/pulse.svg";
import acmeLogo from "@/public/images/acme-corp.svg";
import quantumLogo from "@/public/images/quantum.svg";
import outsideLogo from "@/public/images/outside.svg";
import celestialLogo from "@/public/images/celestial.svg";
import echoValleyLogo from "@/public/images/echo-valley.svg";

import { Logo, NavItem } from "@/types";

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
