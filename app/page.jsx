import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
import Testimonial from "@/components/testimonial";
import WhyChooseUs from "@/components/whychooseus";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url('/hero/heroImg.png')",
          }}
        />
        <Navbar />
        <Hero />
      </section>
      <About />
      <Services />
      <Testimonial />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
}
