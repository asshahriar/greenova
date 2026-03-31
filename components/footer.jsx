import Link from "next/link";
import { GiLeafSwirl } from "react-icons/gi";

import Button from "@/components/button";
import Reveal from "@/components/reveal";

const footerLinkGroups = [
  [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#why-us" },
    { label: "Projects", href: "#services" },
  ],
  [
    { label: "Testimonials", href: "#testimonial" },
    { label: "FAQ's", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent py-16 md:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120%_90%_at_50%_0%,rgba(65,242,118,0.16),transparent_60%),repeating-radial-gradient(circle_at_20%_-10%,transparent_0,transparent_22px,rgba(255,255,255,0.075)_22px,rgba(255,255,255,0.075)_23px)]"
      />

      <div className="container relative">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <Reveal>
            <div className="max-w-[34rem]">
              <Link
                href="/"
                className="group inline-flex items-center gap-2 text-light transition duration-300 hover:text-primary"
              >
                <GiLeafSwirl
                  aria-hidden
                  className="size-6 transition-transform duration-300 group-hover:rotate-6"
                />
                <span className="sub-heading !tracking-[-0.02em] text-light">
                  demowebsite
                </span>
              </Link>

              <p className="mt-5 max-w-[16ch] text-[clamp(1.9rem,2vw+1.2rem,3.6rem)] font-medium leading-[1.1] tracking-[-0.03em] text-light">
                Crafting beautiful outdoor spaces with care and expertise.
              </p>

              <div className="mt-10">
                <Button href="#contact">Book now</Button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid grid-cols-2 gap-x-16 gap-y-5 md:gap-x-24">
              {footerLinkGroups.map((group, groupIndex) => (
                <ul key={groupIndex} className="space-y-4">
                  {group.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[clamp(1.05rem,0.35vw+0.94rem,1.35rem)] font-semibold text-light transition duration-300 hover:translate-x-0.5 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <div className="mt-16 border-t border-light/20 pt-6 md:mt-20 md:pt-7">
            <p className="text-[clamp(1rem,0.2vw+0.94rem,1.1rem)] text-light/75">
              (c) 2026 demowebsite. All rights reserved.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
