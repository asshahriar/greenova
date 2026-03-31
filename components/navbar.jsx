'use client';

import Link from "next/link";
import { useState } from "react";
import { GiLeafSwirl } from "react-icons/gi";
import { HiBars3, HiXMark } from "react-icons/hi2";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Works", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <nav className="container flex items-center justify-between py-5 md:py-7">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-light transition hover:text-primary"
        >
          <GiLeafSwirl aria-hidden className="size-6" />
          <span className="sub-heading !tracking-[-0.02em] text-light">
            demowebsite
          </span>
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-light/25 text-light transition hover:border-light/50 md:hidden"
        >
          {isOpen ? (
            <HiXMark aria-hidden className="size-6" />
          ) : (
            <HiBars3 aria-hidden className="size-6" />
          )}
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="font-semibold text-light transition hover:text-primary"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div
        className={`px-4 transition duration-300 md:hidden ${
          isOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-[calc(var(--container-max-width)-2rem)] rounded-2xl border border-light/20 bg-dark/85 p-4 backdrop-blur">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg px-3 py-2 font-semibold text-light transition hover:bg-light/10"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
