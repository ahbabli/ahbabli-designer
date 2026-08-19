import { useEffect, useRef, useState } from "react";
import { HiX, HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ProjectModal({ project, onClose }) {
  const [imgIndex, setImgIndex] = useState(0);
  const closeBtnRef = useRef(null);
  const images = project?.images?.length ? project.images : [project?.thumbnail];

  useEffect(() => {
    setImgIndex(0);
  }, [project]);

  useEffect(() => {
    if (!project) return;
    closeBtnRef.current?.focus();
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setImgIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setImgIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, images.length]);

  if (!project) return null;

  const hasMultiple = images.length > 1;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
    >
      <div
        className="absolute inset-0 bg-ink/90 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin rounded-2xl border border-ink-line bg-ink-raised animate-rise">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 z-20 inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/80 border border-ink-line text-cream hover:text-mint hover:border-mint transition-colors"
        >
          <HiX size={20} />
        </button>

        <div className="relative aspect-[16/10] bg-ink">
          <img
            src={images[imgIndex]}
            alt={`${project.title} — image ${imgIndex + 1} of ${images.length}`}
            className="w-full h-full object-contain"
          />

          {hasMultiple && (
            <>
              <button
                type="button"
                onClick={() =>
                  setImgIndex((i) => (i - 1 + images.length) % images.length)
                }
                aria-label="Previous image"
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/70 border border-ink-line text-cream hover:text-mint hover:border-mint transition-colors"
              >
                <HiChevronLeft size={22} />
              </button>
              <button
                type="button"
                onClick={() => setImgIndex((i) => (i + 1) % images.length)}
                aria-label="Next image"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex items-center justify-center w-10 h-10 rounded-full bg-ink/70 border border-ink-line text-cream hover:text-mint hover:border-mint transition-colors"
              >
                <HiChevronRight size={22} />
              </button>
            </>
          )}

          {project.isPlaceholder && (
            <span className="absolute top-4 left-4 text-[10px] tracking-wide font-display uppercase bg-ink/80 border border-sky/50 text-sky px-2 py-1 rounded-full">
              Demo project
            </span>
          )}
        </div>

        <div className="p-6 sm:p-8">
          <p className="font-display text-xs tracking-wide uppercase text-sky mb-2">
            {project.category}
          </p>
          <h3
            id="project-modal-title"
            className="font-display text-2xl sm:text-3xl text-cream"
          >
            {project.title}
          </h3>
          {project.description && (
            <p className="mt-4 text-cream/75 leading-relaxed">
              {project.description}
            </p>
          )}

          {hasMultiple && (
            <div className="mt-6 flex gap-2">
              {images.map((src, i) => (
                <button
                  key={src + i}
                  type="button"
                  onClick={() => setImgIndex(i)}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={i === imgIndex}
                  className={`w-14 h-10 rounded-md overflow-hidden border-2 transition-colors ${
                    i === imgIndex ? "border-mint" : "border-ink-line"
                  }`}
                >
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
