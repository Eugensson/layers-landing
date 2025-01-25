import Image from "next/image";

import { Key } from "@/components/ui/key";
import { Tag } from "@/components/ui/tag";
import { Avatar } from "@/components/ui/avatar";
import { FeatureCard } from "@/components/ui/feature-card";
import avatar1 from "@/public/images/avatar-lula-meyers.jpg";
import avatar2 from "@/public/images/avatar-owen-garcia.jpg";
import avatar3 from "@/public/images/avatar-florence-shaw.jpg";
import avatar4 from "@/public/images/avatar-ashwin-santiago.jpg";

import { featureList } from "@/constants";

export const Features = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Features</Tag>
        </div>
        <h2 className="mt-6 max-w-2xl mx-auto text-6xl font-medium text-center">
          Where power meets <span className="text-lime-400">simplicity</span>
        </h2>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
          <li className="md:col-span-2 lg:col-span-1">
            <FeatureCard
              title="Real-time Collaboration"
              description="Work together seamlessly with conflict-free team editing"
              className="group"
            >
              <ul className="aspect-video flex justify-center items-center">
                <li>
                  <Avatar className="z-40">
                    <Image
                      src={avatar1}
                      alt="Avatar Lula Meyers"
                      className="rounded-full"
                    />
                  </Avatar>
                </li>
                <li>
                  <Avatar className="-ml-6 border-indigo-500 z-30">
                    <Image
                      src={avatar2}
                      alt="Avatar Owen Garcia"
                      className="rounded-full"
                    />
                  </Avatar>
                </li>
                <li>
                  <Avatar className="-ml-6 border-amber-500 z-20">
                    <Image
                      src={avatar3}
                      alt="Avatar Florence Shaw"
                      className="rounded-full"
                    />
                  </Avatar>
                </li>
                <li>
                  <Avatar className="z-10 -ml-6 border-transparent group-hover:border-green-500 transition">
                    <div className="relative inline-flex items-center justify-center gap-1 size-full rounded-full bg-neutral-700">
                      <Image
                        src={avatar4}
                        alt="Avatar Ashwin Santiago"
                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                      />
                      {Array.from({ length: 3 }).map((_, i) => (
                        <span
                          key={i}
                          className="size-1.5 rounded-full bg-white inline-flex"
                        />
                      ))}
                    </div>
                  </Avatar>
                </li>
              </ul>
            </FeatureCard>
          </li>
          <li className="md:col-span-2 lg:col-span-1">
            <FeatureCard
              title="Interactive Prototyping"
              description="Engage your clients with prototypes that react to user actions"
              className="group"
            >
              <div className="aspect-video flex items-center justify-center">
                <p className="text-4xl font-extrabold text-white/20 text-center group-hover:text-white/10 transition duration-500">
                  We&apos;ve achieved{" "}
                  <span className="relative bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    <span>incredible</span>
                    <video
                      src="/video/gif-incredible.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute bottom-full left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none group-hover:opacity-100 transition duration-500"
                    />
                  </span>{" "}
                  growth this year
                </p>
              </div>
            </FeatureCard>
          </li>
          <li className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
            <FeatureCard
              title="Keyboard Quick Actions"
              description="Powerful commands to help you create designs more quickly"
              className="group"
            >
              <ul className="aspect-video flex items-center justify-center gap-4">
                <li>
                  <Key className="w-28 outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1">
                    shift
                  </Key>
                </li>
                <li>
                  <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-150">
                    alt
                  </Key>
                </li>
                <li>
                  <Key className="outline outline-2 outline-offset-4 outline-transparent group-hover:outline-lime-400 transition-all duration-500 group-hover:translate-y-1 delay-300">
                    C
                  </Key>
                </li>
              </ul>
            </FeatureCard>
          </li>
        </ul>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {featureList.map((feature) => (
            <li
              key={feature}
              className="bg-neutral-900 border border-white/10 inline-flex items-center gap-3 px-3 md:px-5 py-1.5 md:py-2 rounded-2xl hover:scale-105 transition duration-500 group"
            >
              <span className="inline-flex items-center justify-center size-5 rounded-full bg-lime-400 text-neutral-950 text-xl group-hover:rotate-45 transition duration-500">
                &#10038;
              </span>
              <span className="font-medium md:text-lg">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
