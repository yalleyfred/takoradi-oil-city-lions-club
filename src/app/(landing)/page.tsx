import AboutUs from "./_components/about-us";
import FrequentlyAskedQuestions from "./_components/frequently-asked-question";
import Hero from "./_components/hero";
import OurEvent from "./_components/our-event";
import Project from "./_components/project";
import StarSection from "./_components/star-section";
import Support from "./_components/support";
import WhatWeDo from "./_components/what-we-do";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <Project />
      <Support />
      <StarSection />
      <OurEvent />
      <FrequentlyAskedQuestions />
    </>
  );
}
