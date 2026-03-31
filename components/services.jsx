import Image from "next/image";
import { LuCircleDollarSign, LuClock3 } from "react-icons/lu";

import Reveal from "@/components/reveal";

const services = [
	{
		title: "Garden Design",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "2 Days",
		price: "100$",
		image: "/img1.png",
	},
	{
		title: "Hardscaping",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "4 Days",
		price: "200$",
		image: "/img2.png",
	},
	{
		title: "Planting & Softscaping",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "6 Days",
		price: "800$",
		image: "/img3.png",
	},
	{
		title: "Lawn Care & Maintenance",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "6 Days",
		price: "800$",
		image: "/img4.png",
	},
	{
		title: "Irrigation & Drainage",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "6 Days",
		price: "800$",
		image: "/img5.png",
	},
	{
		title: "Outdoor Lighting",
		description:
			"Creating beautiful, functional layouts tailored to your style and space.",
		duration: "6 Days",
		price: "800$",
		image: "/img6.png",
	},
];

export default function Services() {
  return (
    <section id="services" className="bg-secondary py-20 md:py-24">
      <div className="container">
        <Reveal>
          <p className="sub-heading lowercase text-dark">(services)</p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="heading-xl mt-4 max-w-[13ch] text-dark">
            Landscaping Solutions Tailored for You
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={0.06 * index}>
              <article
                className="group rounded-xl bg-light p-2 pb-4 shadow-[0_2px_14px_rgba(6,17,13,0.03)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(6,17,13,0.12)] md:rounded-xl md:pb-5"
              >
                <div className="relative h-[240px] overflow-hidden rounded-lg md:h-[320px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                </div>

                <div className="px-2 pt-5">
                  <h3 className="heading-base text-dark !normal-case !tracking-[-0.02em]">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-[32ch] text-[clamp(1.02rem,0.5vw+0.8rem,1.55rem)] leading-[1.38] text-dark/60">
                    {service.description}
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <p className="inline-flex items-center gap-2 text-[1.35rem] font-medium text-dark">
                      <LuClock3 aria-hidden className="size-5" />
                      {service.duration}
                    </p>

                    <span className="h-4 w-px bg-dark/20" />

                    <p className="inline-flex items-center gap-2 text-[1.35rem] font-medium text-dark">
                      <LuCircleDollarSign aria-hidden className="size-5" />
                      {service.price}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
