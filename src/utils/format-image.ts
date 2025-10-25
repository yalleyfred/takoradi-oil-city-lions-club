import { urlFor } from "@/lib/sanity.image";

export const handleImageFormat = (image: string): string => {
  return image.startsWith("image") ? urlFor(image).url() : image;
};
