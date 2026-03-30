import { FaStar } from "react-icons/fa";

import Button from "@/components/button";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen">
      <div className="container flex min-h-screen items-end pb-14 pt-28 sm:pb-16 sm:pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full py-2">
            <span className="inline-flex items-center gap-1 text-yellow-300">
              <FaStar aria-hidden className="size-4" />
              <FaStar aria-hidden className="size-4" />
              <FaStar aria-hidden className="size-4" />
              <FaStar aria-hidden className="size-4" />
              <FaStar aria-hidden className="size-4" />
            </span>
            <span className="font-medium text-light">100+ 5 Star Rating</span>
          </div>

          <h1 className="heading-xl-light max-w-[30ch]">
            Your trusted partner for exceptional landscaping
          </h1>

          <p className="paragraph mt-6 max-w-[34ch] !text-light/85">
            We provide complete, reliable, and affordable landscaping solutions
            across the USA from design to maintenance, ensuring your outdoor
            spaces are built to last.
          </p>

          <div className="mt-10">
            <Button href="#contact">Work with us</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
