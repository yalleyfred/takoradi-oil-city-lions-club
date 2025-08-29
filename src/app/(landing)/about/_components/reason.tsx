import { WhyJoinUs } from "@/types/reason.interface";

export default function Reason({ data }: { readonly data: WhyJoinUs }) {
	const Icon = data.icon;

	return (
		<li className="flex flex-col p-6">
			<div className="flex items-center gap-4 mb-4">
				<Icon className={`w-8 h-8 ${data.color}`} />
				<h3 className="text-2xl font-bold">{data.title}</h3>
			</div>
			<p>{data.description}</p>
		</li>
	);
}
