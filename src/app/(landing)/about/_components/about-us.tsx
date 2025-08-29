import { aboutCardsData } from "@/constants/about-card.data";
import AboutCards from "./about-cards";
import Image from "next/image";

export default function AboutUs() {
	return (
		<section className="bg-blue-50 md:rounded-4xl py-10 md:py-20 px-4 md:px-8 lg:px-28 2xl:px-52">
			<div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 mb-20">
				<div className="relative flex mb-auto lg:items-center w-full md:w-[50%] 2xl:w-[35%] h-[35vh] md:h-[30vh] lg:h-[60vh] 2xl:h-[45vh] overflow-hidden rounded-lg">
					<Image
						src="https://plus.unsplash.com/premium_photo-1681152783643-ffffe0d9ec95?w=2000&auto=format&fit=crop&q=60"
						alt="about us"
						fill
						className="object-cover"
						priority
					/>
				</div>
				<div className="text-center md:text-left md:w-[45%] 2xl:w-[60%] flex flex-col gap-6">
					<h1 className="text-4xl md:text-6xl font-bold text-blue-900">
						About Us
					</h1>
					<p className="text-base md:text-lg">
						Lions Clubs International District 418 – Ghana is part of a global
						network of over 1.4 million Lions and Leos, dedicated to
						transforming lives through service. For over 100 years, we’ve
						uplifted communities across Ghana with initiatives in health,
						education, disaster relief, youth development, and environmental
						sustainability. Supported by the Lions Clubs International
						Foundation (LCIF), we work tirelessly to promote peace and dignity
						for all.
					</p>
				</div>
			</div>
			<div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-10">
				{aboutCardsData.map((card) => (
					<AboutCards key={card.title} data={card} />
				))}
			</div>
		</section>
	);
}
