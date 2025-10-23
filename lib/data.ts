import apexLogo from "@/public/images/apex.svg";
import twiceLogo from "@/public/images/twice.svg";
import pulseLogo from "@/public/images/pulse.svg";
import acmeLogo from "@/public/images/acme-corp.svg";
import quantumLogo from "@/public/images/quantum.svg";
import outsideLogo from "@/public/images/outside.svg";
import slackIcon from "@/public/images/slack-logo.svg";
import figmaIcon from "@/public/images/figma-logo.svg";
import framerIcon from "@/public/images/framer-logo.svg";
import notionIcon from "@/public/images/notion-logo.svg";
import githubIcon from "@/public/images/github-logo.svg";
import relumeIcon from "@/public/images/relume-logo.svg";
import celestialLogo from "@/public/images/celestial.svg";
import echoValleyLogo from "@/public/images/echo-valley.svg";
import avatar1 from "@/public/images/avatar-lula-meyers.jpg";
import avatar2 from "@/public/images/avatar-owen-garcia.jpg";
import avatar3 from "@/public/images/avatar-florence-shaw.jpg";
import avatar4 from "@/public/images/avatar-ashwin-santiago.jpg";

import { Avatar, Faq, FooterItem, Integration, Logo, NavItem } from "@/types";

export const navData: NavItem[] = [
  { name: "Home", path: "home", offset: -150 },
  { name: "Features", path: "features", offset: -50 },
  { name: "Integrations", path: "integrations", offset: 0 },
  { name: "FAQs", path: "faqs", offset: 0 },
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

export const integrationData: Integration[] = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma is a collaborative interface design tool.",
  },
  {
    name: "Notion",
    icon: notionIcon,
    description: "Notion is an all-in-one workspace for notes and docs.",
  },
  {
    name: "Slack",
    icon: slackIcon,
    description: "Slack is a powerful team communication platform.",
  },
  {
    name: "Relume",
    icon: relumeIcon,
    description: "Relume is a no-code website builder and design system.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description: "Framer is a professional website prototyping tool.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description: "GitHub is the leading platform for code collaboration.",
  },
];

export const faqData: Faq[] = [
  {
    question: "How is Layers different from other design tools?",
    answer:
      "Unlike traditional design tools, Layers prioritizes speed and simplicity without compromising on power. Its intelligent interface adapts to your workflow, reducing clicks and keeping you in a creative flow.",
  },
  {
    question: "Is there a learning curve?",
    answer:
      "Layers is designed to feel intuitive from day one. Most designers become productive within hours, not weeks. We also provide interactive tutorials and detailed documentation to help you get started quickly.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named milestones for important updates.",
  },
  {
    question: "Can I work offline?",
    answer:
      "Yes! Layers includes a robust offline mode. Your changes automatically sync once you’re back online, so you can stay productive anywhere.",
  },
  {
    question: "How does Layers handle collaboration?",
    answer:
      "Layers is built for real-time collaboration. Invite teammates, share feedback instantly, and design together without conflicts.",
  },
];

export const footerData: FooterItem[] = [
  { href: "/", label: "Contact" },
  { href: "/", label: "Privacy Policy" },
  { href: "/", label: "Terms & Conditions" },
];
