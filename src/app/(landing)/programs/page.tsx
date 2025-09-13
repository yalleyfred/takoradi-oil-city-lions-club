import React from "react";
import { Hero } from "./_components/hero";
import { UpcomingPrograms } from "./_components/upcoming-programs";
import { Testimonials } from "./_components/testimonials";

export default function Programs() {
	return (
		<>
			<Hero />
			<UpcomingPrograms />
			<Testimonials />
		</>
	);
}
