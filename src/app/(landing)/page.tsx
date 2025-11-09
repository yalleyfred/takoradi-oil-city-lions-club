import AboutUs from "./_components/about-us";
import FrequentlyAskedQuestions from "./_components/frequently-asked-question";
import Hero from "./_components/hero";
import OurEvent from "./_components/our-event";
import ProjectsSection from "./_components/project-section";
import StarSection from "./_components/star-section";
import Support from "./_components/support";
import WhatWeDo from "./_components/what-we-do";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <WhatWeDo />
      <ProjectsSection />
      <Support />
      <StarSection />
      <OurEvent />
      <FrequentlyAskedQuestions />
    </>
  );
}
