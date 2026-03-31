import Link from "next/link";
import { GiLeafSwirl } from "react-icons/gi";

import Button from "@/components/button";

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

function ArrowIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
    >
      <path
        d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-accent py-16 md:py-20 lg:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(120%_90%_at_50%_0%,rgba(65,242,118,0.16),transparent_60%),repeating-radial-gradient(circle_at_20%_-10%,transparent_0,transparent_22px,rgba(255,255,255,0.075)_22px,rgba(255,255,255,0.075)_23px)]"
      />

      <div className="container relative">
        <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-[34rem]">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-light transition hover:text-primary"
            >
              <GiLeafSwirl aria-hidden className="size-6" />
              <span className="sub-heading !tracking-[-0.02em] text-light">
                demowebsite
              </span>
            </Link>

            <p className="mt-5 max-w-[16ch] text-[clamp(1.9rem,2vw+1.2rem,3.6rem)] font-medium leading-[1.1] tracking-[-0.03em] text-light">
              Crafting beautiful outdoor spaces with care and expertise.
            </p>

            <div className="mt-10">
              <Button
                href="#contact"
              >
                Book now
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-16 gap-y-5 md:gap-x-24">
            {footerLinkGroups.map((group, groupIndex) => (
              <ul key={groupIndex} className="space-y-4">
                {group.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[clamp(1.05rem,0.35vw+0.94rem,1.35rem)] font-semibold text-light transition hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-light/20 pt-6 md:mt-20 md:pt-7">
          <p className="text-[clamp(1rem,0.2vw+0.94rem,1.1rem)] text-light/75">
            (c) 2026 demowebsite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
