import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Production from "@/components/production";
import Quality from "@/components/quality";
import News from "@/components/news";
import Careers from "@/components/careers";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Production />
      <Quality />
      <News />
      <Careers />
      <Contact />
      <Footer />
    </div>
  );
}
