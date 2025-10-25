export const teamQuery = `*[_type == "team"]{
  "id": _id,
  name,
  role,
  bio,
  "image_url": coalesce(image.upload.asset._ref, image.url),
  socials[] {
    _key,
    icon_type,
    url
  }
}`;

export const faqQuery = `*[_type == "faq"]{
"id": _id,
question,
answer
}`;

export const testimonialQuery = `*[_type == "testimonial"]{
"id": _id,
name,
role,
quote,
"image_url": coalesce(image.upload.asset._ref, image.url),
}`;

export const programQuery = `*[_type == "program"]{
  "id": _id,
  title,
  date,
  "time": timeRange.start + " - " + timeRange.end,
  location,
  description,
  "image_url": coalesce(image.upload.asset._ref, image.url),
  details,
}
`;
