import { client } from "@/lib/sanity.client";
import { programQuery } from "@/lib/sanity.query";
import UpcomingPrograms from "./upcoming-programs";
import { UpcomingEvent } from "@/types/program.interface";

export default async function ProgramSection() {
  const programs: UpcomingEvent[] = await client.fetch(programQuery);

  const filterUpcomingPrograms = (events: UpcomingEvent[]): UpcomingEvent[] => {
    const now = new Date();

    return events
      .filter((event) => {
        const eventDate = new Date(event.date);
        return !isNaN(eventDate.getTime()) && eventDate >= now;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 4);
  };

  console.log(filterUpcomingPrograms(programs));

  return <UpcomingPrograms programs={filterUpcomingPrograms(programs)} />;
}
