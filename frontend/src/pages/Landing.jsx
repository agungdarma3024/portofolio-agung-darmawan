import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Pricing from "@/components/sections/Pricing";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import WhyUs from "@/components/sections/WhyUs";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingWA from "@/components/sections/FloatingWA";
import BlogPreview from "@/components/sections/BlogPreview";

export default function Landing() {
  return (
    <div className="App min-h-screen bg-[var(--brand-cream)]">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Stats />
        <About />
        <section id="services" data-testid="services-anchor" />
        <Pricing />
        <Process />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <FAQ />
        <BlogPreview />
        <Contact />
      </main>
      <Footer />
      <FloatingWA />
    </div>
  );
}
