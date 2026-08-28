import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SelectedWork from "@/components/SelectedWork";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import SkillsSection from "@/components/SkillsSection";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SelectedWork />
        <Experience />
        <Education />
        <SkillsSection />
        <AboutMe />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
