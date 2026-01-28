import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const FooterSection = () => {
  const socialMedia = [
    { label: "Facebook", icon: faFacebook },
    { label: "Instagram", icon: faInstagram },
    { label: "Twitter", icon: faTwitter },
    { label: "Linkedin", icon: faLinkedin },
    { label: "Youtube", icon: faYoutube },
  ];
  const internalLinks = [
    { url: "/about", label: "About Us" },
    { url: "/contact", label: "Contact Us" },
    { url: "/faq", label: "FAQ" },
    { url: "/terms", label: "Terms" },
    { url: "/privacy", label: "Privacy" },
  ];

  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4">
            <Link href="/" className="text-xl font-bold">
              RENTAPP
            </Link>
          </div>
          <nav className="mb-4">
            <ul className="flex space-x-6">
              {internalLinks.map((el, index) => (
                <li key={index}>
                  <Link href={el.url}>{el.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4 mb-4">
            {socialMedia.map((socialMedia, index) => (
              <a
                key={index}
                href="#"
                aria-label={socialMedia.label}
                className="hover:text-primary-600"
              >
                <FontAwesomeIcon icon={socialMedia.icon} className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
          <span>© RENTAPP. All rights reserved.</span>
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
          <Link href="/cookies">Cooki Policy</Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
