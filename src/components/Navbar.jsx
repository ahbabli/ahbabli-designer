import { useEffect, useRef, useState } from "react";
import { HiOutlineMail, HiOutlinePhone, HiX } from "react-icons/hi";
import { FaBehance, FaDribbble, FaInstagram, FaLinkedin } from "react-icons/fa";
import siteInfo from "../data/siteInfo";

const socialIcons = {
  instagram: FaInstagram,
  behance: FaBehance,
  dribbble: FaDribbble,
  linkedin: FaLinkedin,
};

export default function Navbar() {
  const [contactOpen, setContactOpen] = useState(false);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!contactOpen) return;

    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") setContactOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [contactOpen]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-ink/80 backdrop-blur-xl border-b border-white/10">
        <nav className="max-w-7xl mx-auto h-24 px-5 sm:px-8 flex items-center justify-between gap-5" aria-label="Primary">
          <a href="#portfolio" className="flex items-center gap-3 min-w-0 group">
            <span className="relative shrink-0">
              <img src={siteInfo.profileImage} alt="" className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover grayscale ring-1 ring-white/15 group-hover:grayscale-0 transition-all duration-300" />
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-mint border-[3px] border-ink" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block font-display font-semibold text-base sm:text-lg text-cream leading-tight truncate">{siteInfo.name}</span>
              <span className="hidden sm:block text-xs text-cream/40 mt-1">Graphic & UI/UX Designer</span>
            </span>
          </a>
          <button type="button" onClick={() => setContactOpen(true)} className="inline-flex shrink-0 items-center gap-2.5 rounded-full bg-cream text-ink px-4 sm:px-5 py-2.5 text-sm font-semibold hover:bg-mint transition-colors" aria-haspopup="dialog">
            <HiOutlineMail size={17} aria-hidden="true" />
            <span className="hidden sm:inline">Contact</span>
          </button>
        </nav>
      </header>

      {contactOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="contact-card-title">
          <button type="button" className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-default" onClick={() => setContactOpen(false)} aria-label="Close contact card" />
          <div className="relative w-full max-w-sm max-h-[calc(100vh-2rem)] overflow-y-auto rounded-[1.75rem] sm:rounded-[2rem] border border-white/10 bg-ink-raised p-5 sm:p-7 shadow-2xl animate-rise scrollbar-thin">
            <div className="flex items-start justify-between gap-5">
              <div className="flex items-center gap-3">
                <img src={siteInfo.profileImage} alt="" className="w-12 h-12 rounded-full object-cover grayscale" />
                <div>
                  <h2 id="contact-card-title" className="font-display font-semibold text-xl text-cream">Let's connect</h2>
                  <p className="text-xs text-cream/40 mt-1">Available for new projects</p>
                </div>
              </div>
              <button ref={closeButtonRef} type="button" onClick={() => setContactOpen(false)} className="w-9 h-9 shrink-0 rounded-full border border-white/10 text-cream/60 hover:text-ink hover:bg-mint transition-colors flex items-center justify-center" aria-label="Close contact card">
                <HiX size={18} />
              </button>
            </div>

            <div className="mt-7 grid gap-3">
              <a href={`mailto:${siteInfo.email}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 p-4 hover:border-mint/50 hover:bg-white/[0.03] transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/[0.06] text-mint flex items-center justify-center"><HiOutlineMail size={19} /></span>
                <span className="min-w-0"><span className="block text-xs text-cream/35 mb-1">Email</span><span className="block text-sm text-cream truncate group-hover:text-mint transition-colors">{siteInfo.email}</span></span>
              </a>
              <a href={`tel:${siteInfo.phone.replace(/\s+/g, "")}`} className="group flex items-center gap-3 rounded-2xl border border-white/10 p-4 hover:border-mint/50 hover:bg-white/[0.03] transition-colors">
                <span className="w-10 h-10 rounded-full bg-white/[0.06] text-mint flex items-center justify-center"><HiOutlinePhone size={19} /></span>
                <span><span className="block text-xs text-cream/35 mb-1">Phone</span><span className="block text-sm text-cream group-hover:text-mint transition-colors">{siteInfo.phone}</span></span>
              </a>
            </div>

            <div className="mt-6 pt-5 border-t border-white/10">
              <div className="flex items-center justify-between gap-4 mb-3">
                <p className="text-xs uppercase tracking-[0.14em] text-cream/30">Social media</p>
                <p className="text-sm font-medium text-mint">@{siteInfo.username.toLowerCase()}</p>
              </div>
              <div className="flex gap-2">
                {Object.entries(socialIcons).map(([key, Icon]) => {
                  const url = siteInfo.social[key];
                  const classes = "w-11 h-11 rounded-full border border-white/10 flex items-center justify-center transition-colors";
                  return url ? (
                    <a key={key} href={url} target="_blank" rel="noreferrer noopener" aria-label={key} className={`${classes} text-cream/70 hover:text-ink hover:bg-mint hover:border-mint`}><Icon size={17} /></a>
                  ) : (
                    <span key={key} title={`${key} link not added yet`} aria-label={`${key} link not added yet`} className={`${classes} text-cream/20 cursor-not-allowed`}><Icon size={17} /></span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
