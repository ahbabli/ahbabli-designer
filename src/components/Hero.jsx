import { HiArrowDown, HiOutlineExternalLink } from "react-icons/hi";
import siteInfo from "../data/siteInfo";

export default function Hero() {
  return (
    <section id="home" className="px-5 sm:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between border-b border-white/10  text-xs uppercase tracking-[0.16em] text-sky">
        </div>
        <div className="grid lg:grid-cols-[1fr_360px] gap-12 lg:gap-20 items-end pt-10 sm:pt-14">
          <div className="animate-rise">
            <p className="text-mint font-medium mb-5">Hello, I'm Ahmed.</p>
            <h1 className="font-display font-semibold text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.9] tracking-[-0.065em] text-cream max-w-5xl">
              I design clear,<span className="block text-cream/35">memorable visuals.</span>
            </h1>
            <div className="mt-9 sm:mt-12 flex flex-col sm:flex-row sm:items-center gap-6">
              <a href="#portfolio" className="inline-flex w-fit items-center gap-3 font-semibold px-6 py-3.5 rounded-full bg-mint text-ink hover:bg-cream transition-colors">Explore my work <HiArrowDown /></a>
              <p className="max-w-md text-sm sm:text-base leading-relaxed text-cream/50">Graphic and UI/UX designer creating thoughtful identities, digital experiences, and campaign visuals.</p>
            </div>
          </div>
          <div className="relative animate-rise">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] bg-ink-raised">
              <img src={siteInfo.profileImage} alt={`Portrait of ${siteInfo.name}`} className="w-full h-full object-cover grayscale contrast-[1.05]" width="600" height="750" />
            </div>
            <a href={`mailto:${siteInfo.email}`} aria-label="Email Ahmed" className="absolute -bottom-5 -right-1 w-16 h-16 rounded-full bg-cream text-ink flex items-center justify-center hover:bg-mint transition-colors"><HiOutlineExternalLink size={24} /></a>
          </div>
        </div>
      </div>
    </section>
  );
}
