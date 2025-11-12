import Hero from "./_components/hero";
import Mission from "./_components/mission";
import Values from "./_components/values";
import History from "./_components/history";
import WhyJoin from "./_components/why-join";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <Hero />
      <Mission />
      <Values />
      <History />
      <WhyJoin />
    </main>
  );
}
