import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Mail, Phone } from "lucide-react"; // Corrected import (Phone, not phone)
import {faFacebook,faTiktok,faGithub,faWhatsapp,faLinkedin,} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { href: "https://facebook.com ", icon: faFacebook, label: "Facebook" },
    { href: "https://tiktok.com", icon: faTiktok, label: "Tiktok" },
    { href: "https://github.com", icon: faGithub, label: "Github" },
    { href: "https://whatsapp.com", icon: faWhatsapp, label: "Whatsapp" },
    { href: "https://linkedin.com", icon: faLinkedin, label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-800 flex flex-col items-center justify-center h-auto py-8  mt-30 gap-6 text-center text-white ">
      <p className="font-bold text-lg hover:text-red-700">Theoneste</p>

      <p>&copy; {currentYear} All rights reserved.</p>

      <div className="flex gap-4 ">
        {socialLinks.map(({ href, icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-white-700 text-2xl hover:text-green-400 transition-all duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={icon} />
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center gap-2 text-gray-700 text-white">
        <a
          href="mailto:theonestehatunga002@gmail.com"
          className="flex items-center gap-2 text-lg hover:text-green-400 transition-colors duration-300"
        >
          <Mail className="w-5 h-5" />
          theonestehatunga002@gmail.com
        </a>

        <a
          href="tel:+250789388213"
          className="flex items-center gap-2 text-lg hover:text-green-400 transition-colors duration-300"
        >
          <Phone className="w-5 h-5" />
          +250 789 388 213
        </a>
      </div>
    </footer>
  );
};

export default Footer;






