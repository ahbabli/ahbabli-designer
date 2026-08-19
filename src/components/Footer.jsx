import { FaInstagram, FaBehance, FaDribbble, FaLinkedin } from "react-icons/fa";
import siteInfo from "../data/siteInfo";

const socialIcons = {
  instagram: FaInstagram,
  behance: FaBehance,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

const links = [
  { label: "Home", href: "#home" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const activeSocials = Object.entries(siteInfo.social).filter(([, url]) => url);

  return (
    <footer className="border-t border-white/10 px-5 sm:px-8 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <p className="font-display text-lg text-cream">{siteInfo.name}</p>
          <p className="text-sm text-cream/60 mt-1">{siteInfo.title}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-6 font-display text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-cream/70 hover:text-mint transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {activeSocials.length > 0 && (
          <div className="flex items-center gap-3">
            {activeSocials.map(([key, url]) => {
              const Icon = socialIcons[key];
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={key}
                  className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-ink-line text-cream/70 hover:text-mint hover:border-mint transition-colors"
                >
                  {Icon ? <Icon size={14} /> : key}
                </a>
              );
            })}
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/10 text-center text-xs text-cream/35">
        © {year} {siteInfo.name}. Designed and developed for {siteInfo.username}.
      </div>
    </footer>
  );
}
