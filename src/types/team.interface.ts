import { IconifyIcon } from "@iconify/react/dist/iconify.js";

export interface TeamInterface {
  id: number;
  name: string;
  role: string;
  image_url: string;
  bio: string;
  socials?: Partial<Socials>[];
}

export interface Socials {
  icon_type: string | IconifyIcon;
  url: string;
}
