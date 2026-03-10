import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { AboutUs } from "@/components/sections/AboutUs";
import { Values } from "@/components/sections/Values";
import { Stats } from "@/components/sections/Stats";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";

const Home = () => (
  <>
    <Header />
    <main>
      <Hero />
      <LogoStrip />
      <AboutUs />
      <Values />
      <Stats />
      <FAQ />
      <CTA />
    </main>
    <Footer />
  </>
);

export default Home;
