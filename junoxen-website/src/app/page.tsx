import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/WhyUs";
import Mission from "@/components/home/Mission";
import Clients from "@/components/home/Clients";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyUs />
      <Mission />
      <Clients />
    </main>
  );
}