import Hero from "@/components/landing-page/hero";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
    </div>
  );
}
