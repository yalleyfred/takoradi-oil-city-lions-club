import { client } from "@/lib/sanity.client";
import { teamQuery } from "@/lib/sanity.query";
import { TeamInterface } from "@/types/team.interface";
import Star from "./star";

export default async function StarSection() {
  const team: TeamInterface[] = await client.fetch(teamQuery);

  return <Star team={team} />;
}
