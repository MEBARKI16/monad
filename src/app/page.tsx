import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NavigationBar from "@/components/common/NavigationBar";
import OurTeamSection from "@/components/sections/OurTeamSection";
import ProductsSections from "@/components/sections/ProductsSection";
import { Theme } from "@radix-ui/themes";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main>
      <Theme>
        <NavigationBar />
        <HeroSection />
        <ProductsSections />
        <AboutSection />
        <OurTeamSection />
        {/* <FaqsSection /> */}
        <ContactSection />
        <Footer />
      </Theme>
      <Toaster />
    </main>
  );
}
