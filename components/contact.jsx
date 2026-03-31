import { FaInstagram, FaTiktok } from "react-icons/fa6";
import { LuMail, LuMapPin, LuPhone } from "react-icons/lu";

import Button from "@/components/button";

const contactItems = [
  {
    label: "E-mail",
    value: "demomail",
    href: "mailto:demomail",
    icon: LuMail,
  },
  {
    label: "Phone",
    value: "(555) 012-3456",
    href: "tel:+15550123456",
    icon: LuPhone,
  },
  {
    label: "Office",
    value: "1428 Willowbrook Ln, Portland, OR, USA",
    href: "https://maps.google.com/?q=1428+Willowbrook+Ln,+Portland,+OR,+USA",
    icon: LuMapPin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#dfdfdf] py-20 md:py-24">
      <div className="container">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16 xl:gap-20">
          <div className="pt-1">
            <p className="sub-heading lowercase text-dark">(contact)</p>

            <h2 className="mt-4 max-w-[9ch] text-[clamp(2.2rem,3.3vw+0.85rem,4.5rem)] font-medium leading-[1.02] tracking-[-0.04em] text-dark">
              Let&apos;s Talk About Your Project
            </h2>

            <ul className="mt-14 space-y-8">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label} className="flex items-start gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-[10px] bg-tertiary text-dark">
                      <Icon aria-hidden className="size-6" />
                    </span>

                    <div className="pt-0.5">
                      <p className="text-[clamp(1.2rem,0.6vw+0.95rem,1.6rem)] font-semibold leading-[1.25] text-dark">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        target={item.label === "Office" ? "_blank" : undefined}
                        rel={
                          item.label === "Office"
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="mt-1 block text-[clamp(1.02rem,0.35vw+0.84rem,1.3rem)] leading-[1.35] text-dark/75 transition hover:text-dark"
                      >
                        {item.value}
                      </a>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-14">
              <h3 className="text-[clamp(1.6rem,0.95vw+1.05rem,2.2rem)] font-medium leading-[1.2] tracking-[-0.03em] text-dark">
                Follow Us
              </h3>

              <div className="mt-4 flex items-center gap-5 text-dark">
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="transition hover:text-dark/70"
                >
                  <FaTiktok aria-hidden className="size-6" />
                </a>
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="transition hover:text-dark/70"
                >
                  <FaInstagram aria-hidden className="size-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-[#ececec] p-5 sm:p-7 lg:p-8">
            <form className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="text-[clamp(1.2rem,0.45vw+1rem,1.55rem)] font-semibold text-dark"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Jane Smith"
                  className="mt-2 h-13 w-full rounded-[9px] border border-dark/10 bg-[#dfdfdf] px-4 text-[clamp(1rem,0.34vw+0.88rem,1.25rem)] text-dark outline-none transition focus:border-dark/25"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="text-[clamp(1.2rem,0.45vw+1rem,1.55rem)] font-semibold text-dark"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="demomail"
                  className="mt-2 h-13 w-full rounded-[9px] border border-dark/10 bg-[#dfdfdf] px-4 text-[clamp(1rem,0.34vw+0.88rem,1.25rem)] text-dark outline-none transition focus:border-dark/25"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-phone"
                  className="text-[clamp(1.2rem,0.45vw+1rem,1.55rem)] font-semibold text-dark"
                >
                  Phone (optional)
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="1 255 525 5252"
                  className="mt-2 h-13 w-full rounded-[9px] border border-dark/10 bg-[#dfdfdf] px-4 text-[clamp(1rem,0.34vw+0.88rem,1.25rem)] text-dark outline-none transition focus:border-dark/25"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="text-[clamp(1.2rem,0.45vw+1rem,1.55rem)] font-semibold text-dark"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  className="mt-2 min-h-[205px] w-full resize-none rounded-[9px] border border-dark/10 bg-[#dfdfdf] px-4 py-3 text-[clamp(1rem,0.34vw+0.88rem,1.25rem)] text-dark outline-none transition focus:border-dark/25"
                />
              </div>

              <Button
                as="button"
                type="submit"
                className="h-[3.2rem] w-full rounded-[9px] text-[1.2rem] font-semibold"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
