import Image from "next/image";
import { FaStar } from "react-icons/fa6";

const testimonial = {
  quote:
    "We finally have the outdoor space we always dreamed of. Every corner feels thoughtfully designed and full of life.",
  name: "David Thompson",
  location: "Washington DC, USA",
};

const customerAvatars = [
  { src: "/about/about-1.jpg", alt: "Customer profile 1" },
  { src: "/about/about-2.jpg", alt: "Customer profile 2", active: true },
  { src: "/about/about-4.jpg", alt: "Customer profile 3" },
  { src: "/about/about-5.jpg", alt: "Customer profile 4" },
];

export default function Testimonial() {
  return (
    <section id="testimonial" className="bg-secondary py-20 md:py-24">
      <div className="container">
        <p className="sub-heading text-center lowercase text-dark">(testimonial)</p>

        <h2 className="heading-xl mx-auto mt-4 max-w-[11ch] text-center text-dark">
          Hear From Our Happy Customers
        </h2>

        <div className="mt-12 rounded-3xl bg-light px-5 py-14 sm:px-8 md:min-h-[640px] md:px-12 md:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center justify-center text-center md:min-h-[480px]">
            <div className="flex items-center gap-1.5 text-dark/70">
              {Array.from({ length: 5 }).map((_, index) => (
                <FaStar key={index} aria-hidden className="size-4" />
              ))}
            </div>

            <p className="mt-8 max-w-[26ch] text-[clamp(1.65rem,1.5vw+1rem,2.95rem)] leading-[1.28] tracking-[-0.03em] text-dark">
              {testimonial.quote}
            </p>

            <p className="mt-10 text-[1.3rem] font-medium text-dark">
              {testimonial.name}
            </p>
            <p className="mt-1 text-[1.1rem] text-dark/50">{testimonial.location}</p>

            <div className="mt-8 flex items-center gap-2.5">
              {customerAvatars.map((avatar) => (
                <div
                  key={avatar.alt}
                  className={`relative size-12 overflow-hidden rounded-full ${
                    avatar.active
                      ? "ring-2 ring-dark/35 ring-offset-2 ring-offset-light"
                      : ""
                  }`}
                >
                  <Image
                    src={avatar.src}
                    alt={avatar.alt}
                    fill
                    sizes="48px"
                    className={`object-cover ${
                      avatar.active ? "" : "grayscale"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
