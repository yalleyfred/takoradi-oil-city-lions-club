import Link from "next/link";
import {
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon,
  YoutubeIcon,
  MapPinIcon,
  PhoneCallIcon,
  MailCheckIcon,
  Facebook,
} from "lucide-react";

import Image from "next/image";
import Logo from "@/app/assets/Lions_Clubs_International_logo.png";
import { NavLinks } from "@/constants/nav-links";

import NewsLetterForm from "./news-letter-form";

export default function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className="relative z-10 w-full overflow-hidden bg-blue-900 p-6 text-white">
      <div className="grid gap-6 py-10 text-center md:grid-cols-2 lg:grid-cols-3 lg:place-items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center">
            <Image
              src={Logo}
              alt="logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="text-md my-6 flex flex-col items-center space-y-2 md:items-start md:text-left">
            <Link
              href="mailto:info@lionsclubs-ghana.org"
              className="flex items-center gap-2 hover:text-accent"
            >
              <MailCheckIcon size={16} />
              info@lionsclubs-ghana.org
            </Link>
            <a
              href="tel:+233244371763"
              className="flex items-center gap-2 hover:text-accent"
            >
              <PhoneCallIcon size={16} />
              +233 244 371 763
            </a>
            <a
              href="tel:+233208224405"
              className="flex items-center gap-2 hover:text-accent"
            >
              <PhoneCallIcon size={16} />
              +233 208 224 405
            </a>
            <p className="flex items-center text-white gap-2">
              <MapPinIcon size={16} />
              Accra, Ghana
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-semibold">Quick Links</h1>
          <div className="text-md my-6 flex flex-col space-y-3 md:text-left">
            {NavLinks.map((link) => (
              <Link
                href={link.path}
                key={link.id}
                className="hover:text-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <NewsLetterForm />
      </div>
      <section className="mx-auto flex w-[90%] flex-col justify-between border-t border-t-white/20 text-white/90 lg:flex-row">
        <section className="inline-flex flex-col items-center gap-4 text-center lg:flex-row">
          <p className="mx-auto text-[.8rem] text-white/80">
            &copy; {date} Lions Clubs International District 418 – Ghana. All
            rights reserved.
          </p>
        </section>
        <section>
          <div className="flex justify-center gap-4 py-6">
            <Link
              href="https://www.linkedin.com/company/lions-clubs-international/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon
                size={16}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              />
            </Link>
            <Link
              href="https://www.instagram.com/lionsclubsghana/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon
                size={16}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              />
            </Link>
            <Link
              href="https://www.youtube.com/user/lionsclubsorg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeIcon
                size={16}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              />
            </Link>
            <Link
              href="https://twitter.com/lionsclubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterIcon
                size={16}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              />
            </Link>
            <Link
              href="https://www.facebook.com/lionsclubs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook
                size={16}
                className="cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:text-accent"
              />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
}
