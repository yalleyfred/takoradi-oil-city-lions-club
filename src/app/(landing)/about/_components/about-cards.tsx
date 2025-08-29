import { AboutCard } from "@/types/card.interface";
import Link from "next/link";

export default function AboutCards({ data }: { readonly data: AboutCard }) {
	return (
		<div
			className={`${data.color} rounded-2xl p-8 text-white flex flex-col gap-4 h-full justify-between`}
		>
			<Link
				href="/"
				className="self-end text-lg px-6 py-2 border border-white rounded-full hover:bg-white hover:text-blue-900 transition-all"
			>
				{data.buttonText}
			</Link>

			<h4 className="text-xl font-bold">{data.title}</h4>
			<p className="leading-relaxed">{data.description}</p>
		</div>
	);
}
