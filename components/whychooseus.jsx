import {
  LuBadgeDollarSign,
  LuClock3,
  LuHammer,
  LuHeart,
  LuLeaf,
  LuUsersRound,
} from "react-icons/lu";

import Button from "@/components/button";

const reasons = [
  {
    title: "Experienced Team",
    description:
      "Skilled designers and horticulturists with years of professional experience.",
    icon: LuUsersRound,
  },
  {
    title: "Tailored Solutions",
    description:
      "Landscaping plans customized to fit your home, style, and budget.",
    icon: LuHammer,
  },
  {
    title: "Sustainable Practices",
    description:
      "Eco-friendly techniques that preserve the environment and save resources.",
    icon: LuLeaf,
  },
  {
    title: "Affordable Pricing",
    description: "Landscaping solutions tailored to your vision and budget.",
    icon: LuBadgeDollarSign,
  },
  {
    title: "Reliable Service",
    description:
      "Consistent, on-time project delivery with attention to every detail.",
    icon: LuClock3,
  },
  {
    title: "Customer Satisfaction",
    description:
      "We prioritize your happiness, ensuring every garden exceeds expectations.",
    icon: LuHeart,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-secondary py-20 md:py-24">
      <div className="container">
        <p className="sub-heading lowercase text-dark">(why us)</p>

        <h2 className="heading-xl mt-4 max-w-[10ch] text-dark">
          Why Home Owners Trust Us
        </h2>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="min-h-[220px] rounded-2xl bg-tertiary p-4 md:p-5"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-xl bg-secondary text-dark">
                  <Icon aria-hidden className="size-6" />
                </span>

                <h3 className="heading-base mt-7 text-dark !normal-case !tracking-[-0.02em]">
                  {reason.title}
                </h3>

                <p className="mt-3 max-w-[34ch] text-[clamp(1.02rem,0.42vw+0.8rem,1.45rem)] leading-[1.4] text-dark/65">
                  {reason.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Button href="#contact">Work with us</Button>
        </div>
      </div>
    </section>
  );
}
