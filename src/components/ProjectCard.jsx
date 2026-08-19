import { HiOutlineExternalLink } from "react-icons/hi";

export default function ProjectCard({ project, onOpen }) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      className="group relative text-left overflow-hidden focus-visible:outline-2 focus-visible:outline-mint"
      aria-label={`View project: ${project.title}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-ink-raised">
        <img
          src={project.thumbnail}
          alt={`${project.title} — ${project.category}`}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/25 transition-colors duration-300 flex items-end justify-end p-5">
          <span className="inline-flex w-12 h-12 items-center justify-center rounded-full bg-cream text-ink opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <HiOutlineExternalLink size={20} aria-hidden="true" />
          </span>
        </div>
        {project.isPlaceholder && (
          <span className="absolute top-3 right-3 text-[10px] tracking-wide font-display uppercase bg-ink/80 border border-sky/50 text-sky px-2 py-1 rounded-full">
            Demo
          </span>
        )}
      </div>

      <div className="pt-5 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display font-semibold text-xl text-cream">{project.title}</h3>
          <p className="text-sm text-cream/45 mt-1">{project.category}</p>
        </div>
        <span className="text-cream/30 text-sm">0{project.id}</span>
      </div>
    </button>
  );
}
