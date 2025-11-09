import { Suspense } from "react";
import EventList from "./_components/event-list";
import { EventItem } from "@/types/event.interface";
import Loader from "@/components/loader";
import { client } from "@/lib/sanity.client";
import { eventQuery } from "@/lib/sanity.query";

export default async function EventsPage() {
  const data: EventItem[] = await client.fetch(eventQuery);
  console.log(data);
  
  return (
    <section className="container mx-auto py-10 px-4 md:px-8 lg:px-28 ">
      <Suspense fallback={<Loader />}>
        <EventList data={data} />
      </Suspense>
    </section>
  );
}
