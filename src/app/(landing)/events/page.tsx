import { Suspense } from "react";
import EventList from "./_components/event-list";
import { EventItem } from "@/types/event.interface";

const data: EventItem[] = [
  {
    _id: "1",
    title: "Tech Innovators Summit 2025",
    description:
      "A global summit bringing together innovators, entrepreneurs, and developers to explore the future of technology and AI.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-12T09:00:00Z",
    location: "Accra International Conference Centre, Ghana",
    status: "upcoming",
    slug: "tech-innovators-summit-2025",
  },
  {
    _id: "2",
    title: "Creative Design Expo",
    description:
      "An exhibition showcasing groundbreaking works from the world’s top UI/UX designers and creative agencies.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-10-05T10:00:00Z",
    location: "Berlin Expo Center, Germany",
    status: "ongoing",
    slug: "creative-design-expo-2025",
  },
  {
    _id: "3",
    title: "Startup Pitch Night",
    description:
      "Early-stage startups pitching their groundbreaking ideas to investors and mentors.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-09-10T18:00:00Z",
    location: "Silicon Valley, California, USA",
    status: "ended",
    slug: "startup-pitch-night-2025",
  },
  {
    _id: "4",
    title: "Global Health Conference",
    description:
      "Experts and policymakers discussing innovative solutions for healthcare challenges around the world.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-12-01T09:00:00Z",
    location: "Geneva, Switzerland",
    status: "upcoming",
    slug: "global-health-conference-2025",
  },
  {
    _id: "5",
    title: "Music & Arts Festival",
    description:
      "A weekend filled with live music, art installations, and cultural showcases.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-07-20T14:00:00Z",
    location: "Cape Town, South Africa",
    status: "ended",
    slug: "music-arts-festival-2025",
  },
  {
    _id: "6",
    title: "Sustainable Living Workshop",
    description:
      "Hands-on sessions about eco-friendly practices, renewable energy, and sustainable architecture.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-09-19T09:00:00Z",
    location: "Amsterdam, Netherlands",
    status: "ongoing",
    slug: "sustainable-living-workshop-2025",
  },
  {
    _id: "7",
    title: "Blockchain World Forum",
    description:
      "A deep dive into blockchain technology, DeFi, NFTs, and the future of decentralized systems.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-11-20T09:00:00Z",
    location: "Dubai World Trade Centre, UAE",
    status: "upcoming",
    slug: "blockchain-world-forum-2025",
  },
  {
    _id: "8",
    title: "AI for Education Summit",
    description:
      "Educators and technologists exploring how AI can revolutionize the classroom experience.",
    event_img:
      "https://images.unsplash.com/photo-1742834915156-7cea205cc351?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    date: "2025-09-01T09:00:00Z",
    location: "London, UK",
    status: "ended",
    slug: "ai-for-education-summit-2025",
  },
];

export default async function EventsPage() {
  return (
    <section className="container mx-auto py-10 px-4 md:px-8 lg:px-28 ">
      <Suspense fallback={<div>Loading...</div>}>
        <EventList data={data} />
      </Suspense>
    </section>
  );
}
