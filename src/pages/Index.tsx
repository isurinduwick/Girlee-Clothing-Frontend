import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Collections } from "@/components/Collections";
import { About } from "@/components/About";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

interface IndexProps {
  isSearchOpen: boolean;
  setIsSearchOpen: (value: boolean) => void;
}

const Index = ({ isSearchOpen, setIsSearchOpen }: IndexProps) => {
  return (
    <main className="min-h-screen">
      <Navbar isSearchOpen={isSearchOpen} setIsSearchOpen={setIsSearchOpen} />
      <Hero />
      <Collections />
      <About />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;
