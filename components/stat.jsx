import Reveal from "@/components/reveal";

const stats = [
  { value: "8+", label: "Years in the Industry" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "200+", label: "Completed Projects" },
  { value: "30+", label: "Expert Landscapers" },
];

const cardPattern = {
  backgroundImage:
    "radial-gradient(130% 95% at 78% 8%, rgba(31,152,102,.35) 0%, rgba(31,152,102,0) 62%),repeating-radial-gradient(circle at 50% 50%, rgba(92,223,164,.11) 0 2px, rgba(5,50,39,0) 2px 16px)",
};

export default function Stat() {
  return (
    <div className="container mt-16 md:mt-20">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item, index) => (
          <Reveal key={item.label} delay={0.06 * index}>
            <article
              className="relative min-h-[170px] overflow-hidden rounded-3xl bg-[#053327] px-6 py-10 text-center text-light shadow-[0_3px_15px_rgba(5,51,39,0.2)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_14px_24px_rgba(5,51,39,0.35)] md:min-h-[190px]"
            >
              <div
                aria-hidden
                className="absolute inset-0 opacity-65"
                style={cardPattern}
              />
              <div className="relative z-10">
                <p className="text-[clamp(2.3rem,4vw,3.8rem)] font-medium leading-none tracking-[-0.03em]">
                  {item.value}
                </p>
                <p className="mt-5 text-base font-medium text-light/85 sm:text-lg">
                  {item.label}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
