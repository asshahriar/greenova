import About from "@/components/about";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Services from "@/components/services";
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
              "linear-gradient(rgba(0, 0, 0, 0.62), rgba(0, 0, 0, 0.62)), url('https://images.unsplash.com/photo-1558522195-e1201b090344?auto=format&fit=crop&w=1920&q=80')",
          }}
        />
        <Navbar />
        <Hero />
      </section>
      <About />
      <Services />
      <WhyChooseUs />
    </main>
  );
}
