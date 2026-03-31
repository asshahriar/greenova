'use client';

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import Button from "@/components/button";
import Stat from "@/components/stat";

const galleryImages = [
  "/about/about-1.jpg",
  "/about/about-2.jpg",
  "/about/about-3.jpg",
  "/about/about-4.jpg",
  "/about/about-5.jpg",
  "/about/about-3.jpg",
  "/about/about-4.jpg",
  "/about/about-5.jpg",
  "/about/about-3.jpg",
  "/about/about-4.jpg",
  "/about/about-5.jpg",
];

const loopedGalleryImages = [...galleryImages, ...galleryImages];

export default function About() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="relative z-20 bg-light py-20 md:py-24">
      <div className="container">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="sub-heading lowercase text-dark">(about us)</p>

          <h2 className="heading-xl mt-4 max-w-[18ch] text-dark">
            Expert Landscaping, Personalized for You
          </h2>

          <p className="paragraph mt-7 max-w-[36ch] !text-dark/75">
            At demowebsite, we create beautiful, functional outdoor spaces with
            care and expertise. From design to maintenance, our team delivers
            professional landscaping solutions tailored to your home, ensuring
            every garden looks its best year-round.
          </p>

          <div className="mt-12">
            <Button href="#contact">Work with us</Button>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-16 overflow-hidden">
        <motion.div
          className="flex w-max gap-4"
          animate={shouldReduceMotion ? { x: 0 } : { x: ["-12%", "-62%"] }}
          transition={
            shouldReduceMotion
              ? undefined
              : { duration: 20, ease: "linear", repeat: Infinity }
          }
        >
          {loopedGalleryImages.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="relative h-[220px] w-[240px] flex-none overflow-hidden rounded-xl sm:h-[280px] sm:w-[300px] lg:h-[350px] lg:w-[320px]"
            >
              <Image
                src={image}
                alt="Landscaping showcase"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 300px, 320px"
                className="object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

      <Stat />
    </section>
  );
}
