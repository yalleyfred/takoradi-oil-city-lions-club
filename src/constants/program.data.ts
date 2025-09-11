import { UpcomingEvent } from "@/types/program.interface";

export const upcomingEvents: UpcomingEvent[] = [
	{
		id: 1,
		title: "Community Health Fair",
		date: "2025-09-15",
		time: "9:00 AM - 3:00 PM",
		location: "Kumasi Community Center",
		description:
			"A day dedicated to free medical checkups, health education, and wellness activities for all ages.",
		details: `
			This health fair will feature free health screenings such as blood pressure, blood sugar,
			and BMI checks. Medical professionals will give talks on nutrition, exercise, and disease
			prevention. There will also be activities for children, including games and interactive 
			sessions on healthy habits. Local food vendors will provide healthy meals and snacks.
		`,
		image:
			"https://plus.unsplash.com/premium_photo-1723618898312-54269787cbe0?w=800&auto=format&fit=crop&q=80",
	},
	{
		id: 2,
		title: "Youth Empowerment Workshop",
		date: "2025-09-20",
		time: "10:00 AM - 2:00 PM",
		location: "Accra Learning Hub",
		description:
			"Interactive sessions on leadership, career guidance, and skills development for young people.",
		details: `
			This workshop will host experienced mentors and professionals from various industries.
			Participants will engage in group activities, panel discussions, and hands-on training 
			on topics like personal branding, entrepreneurship, and communication skills. 
			Networking sessions will allow attendees to connect with potential mentors and employers.
		`,
		image:
			"https://images.unsplash.com/photo-1632215863153-0dae7657d0a9?w=800&auto=format&fit=crop&q=80",
	},
	{
		id: 3,
		title: "Environmental Clean-Up Drive",
		date: "2025-10-01",
		time: "7:00 AM - 11:00 AM",
		location: "Lake Bosomtwe Area",
		description:
			"Join hands to restore nature by cleaning up litter and raising awareness on environmental conservation.",
		details: `
			Participants will meet at the main entrance to Lake Bosomtwe and receive gloves, trash bags, 
			and other equipment. Volunteers will be split into teams to cover different sections of the area. 
			Environmental experts will also hold short talks on waste segregation and sustainable living.
		`,
		image:
			"https://plus.unsplash.com/premium_photo-1681152790480-07392bfe9b62?w=800&auto=format&fit=crop&q=80",
	},
	{
		id: 4,
		title: "Fundraising Gala Dinner",
		date: "2025-10-10",
		time: "6:00 PM - 10:00 PM",
		location: "Golden Tulip Hotel, Kumasi",
		description:
			"An evening of fine dining, networking, and fundraising to support our community development projects.",
		details: `
			This formal event will feature a three-course dinner, live entertainment, and a silent auction. 
			Guest speakers will share stories of impact from past projects, and funds raised will go directly 
			to upcoming initiatives such as scholarships, health outreach programs, and youth training workshops.
		`,
		image:
			"https://plus.unsplash.com/premium_photo-1661433201283-fcb240e88ad4?w=800&auto=format&fit=crop&q=80",
	},
];
