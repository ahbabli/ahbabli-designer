import { HiOutlineMail } from "react-icons/hi";
import siteInfo from "../data/siteInfo";

export default function About() {
  const bioParagraphs = siteInfo.aboutBio
    .split("\n")
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <section id="about" className="py-20 sm:py-28 px-5 sm:px-8 bg-cream text-ink">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-24 items-start">
        <div className="relative mx-auto md:mx-0 w-full max-w-xs">
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden bg-black/5">
            <img
              src={siteInfo.profileImage}
              alt={`${siteInfo.name} at work`}
              className="w-full h-full object-cover grayscale"
              loading="lazy"
              decoding="async"
              width="480"
              height="600"
            />
          </div>
          <span
            className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-sky/20 border border-sky/40 -z-10"
            aria-hidden="true"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.16em] text-black/45 mb-4">/ About me</p>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-ink leading-[1.05]">Design that feels useful, clear, and human.</h2>

          <div className="mt-6 space-y-4">
            {bioParagraphs.map((p, i) => (
              <p
                key={i}
                className="text-black/60 leading-relaxed border-b border-black/10 pb-4"
              >
                {p}
              </p>
            ))}
          </div>

          {siteInfo.skills.length > 0 && (
            <div className="mt-8">
              <h3 className="text-xs tracking-wide uppercase text-black/45 mb-3">
                Design Skills
              </h3>
              <ul className="flex flex-wrap gap-2">
                {siteInfo.skills.map((skill) => (
                  <li
                    key={skill}
                    className="text-sm px-3.5 py-1.5 rounded-full border border-black/15 text-black/70"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {siteInfo.tools.length > 0 && (
            <div className="mt-6">
              <h3 className="font-display text-sm tracking-wide uppercase text-sky mb-3">
                Tools
              </h3>
              <ul className="flex flex-wrap gap-2">
                {siteInfo.tools.map((tool) => (
                  <li
                    key={tool}
                    className="text-sm px-3.5 py-1.5 rounded-full bg-mint/10 border border-mint/30 text-mint"
                  >
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {siteInfo.skills.length === 0 && siteInfo.tools.length === 0 && (
            <p className="mt-6 text-sm text-cream/50 italic">
              Skills and tools weren't provided yet — add them to{" "}
              <code className="text-sky not-italic">src/data/siteInfo.js</code>.
            </p>
          )}

          <a
            href="#contact"
            className="mt-9 inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full bg-ink text-cream hover:bg-black/80 transition-colors"
          >
            <HiOutlineMail aria-hidden="true" />
            Let's work together
          </a>
        </div>
      </div>
    </section>
  );
}
