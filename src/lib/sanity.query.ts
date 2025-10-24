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
