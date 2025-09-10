import { team } from "@/constants/teams.data";
import TeamLists from "./_components/team-list";

export default function TeamPage() {
  return (
    <section className="min-h-screen py-24 flex items-center gap-4 justify-center flex-col">
      <p className="font-semibold text-lg text-blue-600">The team</p>
      <h1 className="text-3xl lg:text-4xl text-center font-bold">
        Meet the team behind the Change
      </h1>
      <p className="mt-4 text-lg text-gray-600 max-w-2xl text-center">
        We&apos;re a small team that loves to make a difference by helping
        communities in need and empowering youths to be leaders.
      </p>
      <TeamLists members={team} />
    </section>
  );
}
