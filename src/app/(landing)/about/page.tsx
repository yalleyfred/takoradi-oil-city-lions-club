import { aboutCardsData } from "@/constants/about-card.data";
import AboutCards from "./_components/about-cards";
import Reason from "./_components/reason";
import { whyJoinUsData } from "@/constants/reason.data";
import Image from "next/image";

export default function AboutPage() {
	return (
		<>
			<section className="bg-blue-50 rounded-4xl py-20 px-52">
				<div className="flex justify-between items-center gap-10 mb-20">
					<div className="relative flex items-center w-[35%] h-[45vh] overflow-hidden rounded-lg">
						<Image
							src="https://plus.unsplash.com/premium_photo-1681152783643-ffffe0d9ec95?w=2000&auto=format&fit=crop&q=60"
							alt="about us"
							fill
							className="object-cover"
							priority
						/>
					</div>
					<div className="w-[60%] flex flex-col gap-6">
						<h1 className="text-6xl font-bold text-blue-900">About Us</h1>
						<p className="text-lg text-justify">
							Lions Clubs International District 418 – Ghana is part of a global
							network of over 1.4 million Lions and Leos, dedicated to
							transforming lives through service. For over 100 years, we’ve
							uplifted communities across Ghana with initiatives in health,
							education, disaster relief, youth development, and environmental
							sustainability. Supported by the Lions Clubs International
							Foundation (LCIF), we work tirelessly to promote peace and dignity
							for all.
							<br />
							<br />
							Join us in our mission to create a better tomorrow — volunteer,
							donate, or partner with us today.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-10">
					{aboutCardsData.map((card) => (
						<AboutCards key={card.title} data={card} />
					))}
				</div>
			</section>
			<section className="flex flex-col items-center my-10 gap-3">
				<h4 className="text-blue-900 font-semibold">OUR STORY</h4>
				<h2 className="text-blue-900 text-4xl font-bold">
					Quality Services for All Your Home Repair Needs
				</h2>

				<div className="relative flex items-center w-1/2 rounded-t-4xl mt-10 h-[45vh] overflow-hidden">
					<Image
						src="https://images.unsplash.com/photo-1563902242731-bcde8ffa1d36?w=2000&auto=format&fit=crop&q=80"
						alt="community"
						fill
						className="object-cover"
						priority
					/>
				</div>

				<div className="w-1/2 text-white bg-blue-900 py-10 px-16 mt-4 rounded-b-4xl leading-relaxed text-lg">
					Lions Clubs International was introduced in Ghana during the 1980/81
					Lions Service year and the first Club, Accra Host, received its
					charter certificate on 18th March 1982. Membership was mainly made up
					of expatriates, who were Lions in their home countries before coming
					to Ghana. Unfortunately, in the aftermath of the 31st December 1981
					Revolution, the majority of the members left Ghana resulting in the
					Club becoming defunct.
				</div>
			</section>
			<section className="grid grid-cols-2 place-items-center my-16 px-60 gap-6">
				<div className="flex flex-col gap-4">
					<h4 className="font-semibold text-lg">BE PART OF SOMETHING GREAT</h4>
					<h2 className="text-3xl font-bold">
						Explore opportunities, connect with others, and be part of something
						bigger
					</h2>
				</div>
				<p className="text-lg">
					At Lions, we know that being part of a community is more than just
					joining—it’s about growing, connecting, and making an impact. Here’s
					why we’re the best choice for anyone looking to be part of something
					meaningful.
				</p>
				<ul>
					{whyJoinUsData.map((reason) => (
						<Reason key={reason.title} data={reason} />
					))}
				</ul>
				<div className="relative flex items-center w-full lg:w-[35rem] lg:h-[35rem] bg-slate-800/40 rounded-lg">
					<Image
						src="https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?w=2000&auto=format&fit=crop&q=80"
						alt="community"
						fill
						className="rounded-lg object-cover"
						priority
					/>
				</div>
			</section>
		</>
	);
}
