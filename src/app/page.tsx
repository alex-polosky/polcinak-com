import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { About } from "@/components/sections/About";
import { Businesses } from "@/components/sections/Businesses";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Structure } from "@/components/sections/Structure";
import { Updates } from "@/components/sections/Updates";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <Businesses />
        <About />
        <Structure />
        <Updates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
