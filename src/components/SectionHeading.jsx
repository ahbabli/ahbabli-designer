export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  const isCenter = align === "center";
  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <p className="font-body text-sky text-xs font-medium tracking-[0.16em] uppercase mb-4">
          / {eyebrow}
        </p>
      )}
      <h2 className="font-display font-semibold text-4xl sm:text-5xl text-cream text-balance leading-[1.05]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-cream/55 text-base leading-relaxed max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
