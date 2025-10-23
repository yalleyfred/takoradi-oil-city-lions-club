export const teamQuery = `*[_type == "team"]{
  "id": _id,
  name,
  role,
  bio,
  "image_url": image_url.asset->url,
  socials[] {
    _key,
    icon_type,
    url
  }
}`;
