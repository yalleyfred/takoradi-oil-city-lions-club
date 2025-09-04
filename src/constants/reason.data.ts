import { WhyJoinUs } from "@/types/reason.interface";
import { Heart, Lightbulb, Smile, Users2 } from "lucide-react";

export const whyJoinUsData: WhyJoinUs[] = [
	{
		title: "Build Connections",
		description:
			"Meet like-minded individuals, expand your network, and form lifelong friendships through engaging events and activities.",
		icon: Users2,
		color: "text-blue-500",
	},
	{
		title: "Develop Skills",
		description:
			"Participate in workshops, projects, and leadership opportunities that help you grow personally and professionally.",
		icon: Lightbulb,
		color: "text-green-500",
	},
	{
		title: "Have Fun",
		description:
			"Enjoy exciting events, social gatherings, and challenges that make your club experience memorable and rewarding.",
		icon: Smile,
		color: "text-yellow-500",
	},
	{
		title: "Make an Impact",
		description:
			"Contribute to meaningful projects and community initiatives, leaving a positive mark both within and outside the club.",
		icon: Heart,
		color: "text-red-500",
	},
];
