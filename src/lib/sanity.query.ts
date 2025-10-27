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

export const projectQuery = `*[_type == "project"]{
"id": _id,
title,
description,
"image_url": coalesce(image.upload.asset._ref, image.url),
}`;

export const eventQuery = `*[_type == "event"]{
_id,
title,
description,
"event_img": coalesce(image.upload.asset._ref, image.url),
date,
location,
status,
"slug": slug.current
}`;
