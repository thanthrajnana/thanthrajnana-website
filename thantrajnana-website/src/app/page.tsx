import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Courses from "@/components/home/Courses";
import Kits from "@/components/home/Kits";
import Platforms from "@/components/home/Platforms";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <Courses />
      <Kits />
      <Platforms />
      <WhyChooseUs />
      <CTA />
      <Footer />
    </main>
  );
}
