import { whyJoinUsData } from "@/constants/reason.data";
import Reason from "./reason";
import Image from "next/image";

export default function WhyJoinUs() {
	return (
		<section className="flex flex-col my-16 px-4 md:px-8 lg:px-28 2xl:px-52 gap-6">
			<div className="flex flex-col md:flex-row gap-6 items-center justify-between text-center md:text-left">
				<div className="flex flex-col gap-4 md:w-3/5">
					<h4 className="font-semibold text-lg text-gray-700">
						BE PART OF SOMETHING GREAT
					</h4>
					<h2 className="text-3xl font-bold">
						Explore opportunities, connect with others, and be part of something
						bigger
					</h2>
				</div>
				<p className="md:w-2/5">
					At Lions, we know that being part of a community is more than just
					joining—it’s about growing, connecting, and making an impact. Here’s
					why we’re the best choice for anyone looking to be part of something
					meaningful.
				</p>
			</div>

			<div className="flex lg:flex-row flex-col-reverse gap-6 justify-between lg:mt-5">
				<ul className="lg:w-3/5">
					{whyJoinUsData.map((reason) => (
						<Reason key={reason.title} data={reason} />
					))}
				</ul>
				<div className="relative flex items-center my-4 lg:my-0 w-full h-[35vh] md:h-[55vh] lg:w-2/5 rounded-lg overflow-hidden">
					<Image
						src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=2000&auto=format&fit=crop&q=80"
						alt="community"
						fill
						className="object-cover"
						priority
					/>
				</div>
			</div>
		</section>
	);
}
