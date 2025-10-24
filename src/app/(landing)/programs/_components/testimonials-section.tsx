import { client } from "@/lib/sanity.client";
import { testimonialQuery } from "@/lib/sanity.query";
import Testimonials from "./testimonials";
import { Testimonial } from "@/types/testimonial.interface";

export default async function TestimonialsSection() {
  const testimonials: Testimonial[] = await client.fetch(testimonialQuery);

  return <Testimonials testimonials={testimonials} />;
}
