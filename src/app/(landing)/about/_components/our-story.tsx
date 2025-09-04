import Image from "next/image";

export default function OurStory() {
  return (
    <section className="flex flex-col items-center my-10 gap-3 px-4 md:px-8">
      <h4 className="text-blue-900 font-semibold">OUR STORY</h4>
      <h2 className="text-blue-900 text-3xl text-center lg:text-left lg:text-4xl font-bold">
        Explore the milestones and memories that brought us here.
      </h2>

      <div className="relative flex items-center w-full lg:w-3/5 2xl:w-1/2 rounded-t-4xl mt-6 lg:mt-10 h-[30vh] md:h-[45vh] lg:h-[50vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563902242731-bcde8ffa1d36?w=2000&auto=format&fit=crop&q=80"
          alt="community"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="lg:w-3/5 2xl:w-1/2 text-center lg:text-left text-white bg-blue-900 py-10 px-4 md:px-10 lg:px-16 mt-4 rounded-b-4xl leading-relaxed text-lg">
        Lions Clubs International was introduced in Ghana during the 1980/81
        Lions Service year and the first Club, Accra Host, received its charter
        certificate on 18th March 1982. Membership was mainly made up of
        expatriates, who were Lions in their home countries before coming to
        Ghana. Unfortunately, in the aftermath of the 31st December 1981
        Revolution, the majority of the members left Ghana resulting in the Club
        becoming defunct.
      </div>
    </section>
  );
}
