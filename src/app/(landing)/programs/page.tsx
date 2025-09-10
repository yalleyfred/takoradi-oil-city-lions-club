"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { upcomingEvents } from "@/constants/program.data";
import { UpcomingEvent } from "@/types/program.interface";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { testimonials } from "@/constants/testimonial.data";

export default function Programs() {
	const [currentEventIndex, setCurrentEventIndex] = useState(0);
	const programs: UpcomingEvent[] = upcomingEvents;
	const [direction, setDirection] = useState<"next" | "prev">("next");
	const variants = {
		enter: (direction: "next" | "prev") => ({
			x: direction === "next" ? 100 : -100,
			opacity: 0,
		}),
		center: {
			x: 0,
			opacity: 1,
			transition: { duration: 0.4 },
		},
		exit: (direction: "next" | "prev") => ({
			x: direction === "next" ? -100 : 100,
			opacity: 0,
			transition: { duration: 0.4 },
		}),
	};

	const handleNext = () => {
		setDirection("next");
		setCurrentEventIndex((prev) => (prev + 1) % programs.length);
	};

	const handlePrev = () => {
		setDirection("prev");
		setCurrentEventIndex(
			(prev) => (prev - 1 + programs.length) % programs.length
		);
	};

	useEffect(() => {
		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === "ArrowRight") {
				handleNext();
			} else if (event.key === "ArrowLeft") {
				handlePrev();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	return (
		<>
			<section
				className="h-screen max-h-[900px] 
      bg-[url('https://images.unsplash.com/photo-1710093072228-8c3129f27357?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0')] 
             bg-cover bg-top bg-no-repeat"
			>
				<div className="h-full w-full bg-blue-900/65">
					<div className="container mx-auto flex h-full w-full lg:max-w-4xl  flex-col items-center justify-center gap-5 p-4 text-center md:p-12 md:text-left">
						<motion.h1
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
							className="mt-[64px] text-3xl font-bold text-white md:pl-8 lg:text-6xl text-center"
						>
							Building Brighter Futures
						</motion.h1>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							className="text-white"
						>
							<p className="mt-3 max-w-lg text-center text-white opacity-85 md:pl-8">
								From classrooms to clinics, our programs touch lives in
								meaningful ways every day.
							</p>
						</motion.div>
					</div>
				</div>
			</section>
			<section>
				<div className="w-full px-52 text-center bg-blue-900 text-white py-10">
					<h2 className="text-4xl font-bold py-6">Upcoming Events</h2>
					<p>
						Stay informed about our latest programs, workshops, and community
						initiatives.
					</p>
				</div>
				{upcomingEvents.length === 0 ? (
					<div className="h-[50vh] flex items-center justify-center">
						<p className="text-3xl font-bold">No upcoming programs</p>
					</div>
				) : (
					<div className="flex items-center justify-center gap-16 my-20">
						<div className="flex flex-col gap-6 w-1/3">
							<div className="group w-full h-[60vh] relative overflow-hidden">
								<AnimatePresence custom={direction} mode="wait">
									<motion.div
										key={currentEventIndex}
										custom={direction}
										variants={variants}
										initial="enter"
										animate="center"
										exit="exit"
										className="absolute inset-0"
									>
										<img
											src={programs[currentEventIndex].image}
											alt={programs[currentEventIndex].title}
											className="w-full h-full object-cover rounded-md"
										/>

										<div className="absolute inset-0 text-white bg-blue-500/70 opacity-0 group-hover:opacity-100 transition-opacity rounded-md flex flex-col gap-2 items-center justify-center">
											<h6 className="text-2xl font-bold">
												{programs[currentEventIndex].title}
											</h6>
											<p>
												{format(
													programs[currentEventIndex].date,
													"do MMMM, yyyy"
												)}
											</p>
										</div>
									</motion.div>
								</AnimatePresence>
							</div>

							<div className="flex gap-4 mx-auto">
								<Button
									variant="outline"
									className="rounded-none hover:cursor-pointer"
									onClick={handlePrev}
								>
									Prev
								</Button>
								<Button
									variant="outline"
									className="rounded-none hover:cursor-pointer"
									onClick={handleNext}
								>
									Next
								</Button>
							</div>
						</div>

						<div className="mb-auto w-1/3 flex flex-col gap-8">
							<h3 className="text-4xl font-bold text-gray-800">
								Upcoming Events
							</h3>
							<div className="flex flex-col gap-6">
								{upcomingEvents.map((event, index) => (
									<motion.button
										key={event.id}
										onClick={() => setCurrentEventIndex(event.id - 1)}
										className={cn(
											"text-left flex gap-4 items-center px-5 py-4 rounded-lg hover:bg-blue-50 hover:cursor-pointer",
											currentEventIndex === index ? "relative" : ""
										)}
										layout
										transition={{ duration: 0.4, ease: "easeInOut" }}
									>
										<AnimatePresence>
											{currentEventIndex === index && (
												<motion.span
													layoutId="activeHighlight"
													className="absolute inset-0 bg-blue-100 rounded-lg -z-10"
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													exit={{ opacity: 0 }}
													transition={{ duration: 0.4, ease: "easeInOut" }}
												/>
											)}
										</AnimatePresence>

										<span>
											<p className="font-semibold text-gray-500">
												{format(event.date, "MMM").toUpperCase()}
											</p>
											<h4 className="text-2xl font-bold text-gray-800">
												{format(event.date, "dd")}
											</h4>
										</span>

										<span>
											<p className="font-semibold text-gray-500">
												{format(event.date, "EEEE do MMMM, yyyy")} ({event.time}
												)
											</p>
											<h4 className="text-2xl font-bold text-gray-800">
												{event.title}{" "}
												<span className="text-base text-gray-500">
													- {event.location}
												</span>
											</h4>
										</span>
									</motion.button>
								))}
							</div>
						</div>
					</div>
				)}
			</section>
			<section className="flex flex-col py-10 gap-16 text-white justify-center items-center bg-center bg-cover bg-[url('https://images.unsplash.com/photo-1531844251246-9a1bfaae09fc?w=1600&auto=format&fit=crop&q=90')]">
				<div className="text-center flex flex-col gap-3">
					<h2 className="text-5xl font-bold">Lives Touched, Futures Changed</h2>
					<p className="text-lg">
						Every program plants a seed of hope — here are the stories that grew
						from them
					</p>
				</div>
				<div className="w-full px-52 text-center py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{testimonials.map((testimonial) => (
						<div
							key={testimonial.id}
							className="flex flex-col gap-3 py-10 bg-blue-100/70 rounded-lg items-center text-blue-900 px-6"
						>
							<div className="flex items-center gap-6 text-left">
								<img
									src={testimonial.image}
									alt={testimonial.name}
									className="w-20 h-20 object-cover mb-4 mx-auto rounded-full"
								/>
								<div>
									<h5 className="text-2xl font-bold">{testimonial.name}</h5>
									<h6>{testimonial.role}</h6>
								</div>
							</div>
							<p className="text-lg">"{testimonial.quote}"</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
}
