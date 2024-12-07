import Hero from "@/components/landing-page/hero";
import ScrollAnimation from "@/components/landing-page/scroll-animation";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <ScrollAnimation />
    </div>
  );
}
