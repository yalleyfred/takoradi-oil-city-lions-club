import AboutUs from "./_components/about-us";
import FrequentlyAskedQuestions from "./_components/frequently-asked-question";
import Hero from "./_components/hero";
import OurEvent from "./_components/our-event";
import Project from "./_components/project";
import Star from "./_components/star";
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
      <Star data={{ start: 0, end: 4 }} />
      <OurEvent />
      <FrequentlyAskedQuestions />
    </>
  );
}
