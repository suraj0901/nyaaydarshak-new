import Collaborations from "./Collaborations";
import Consultation from "./Consultation";
import Experience from "./Experience";
import FAQ from "./FAQ";
import HeroSection from "./HeroSection";
import NewsLetter from "./NewsLetter";
import Testimonials from "./Testimonials";
import Workshop from "./Workshop";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Collaborations />
      <Consultation />
      <Workshop />
      <Experience />
      <Testimonials />
      <FAQ />
      <NewsLetter />
    </main>
  );
}
