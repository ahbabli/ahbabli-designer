import { useMemo, useState } from "react";
import categories from "../data/categories";
import projects from "../data/projects";
import PortfolioFilters from "./PortfolioFilters";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

export default function Portfolio() {
  const [active, setActive] = useState("All Projects");
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    if (active === "All Projects") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <section id="portfolio" className="scroll-mt-24 pt-32 sm:pt-36 pb-20 sm:pb-24 px-5 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_320px] gap-7 lg:gap-16 items-end border-b border-white/10 pb-9 sm:pb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-mint mb-5">Portfolio / 2026</p>
            <h1 className="font-display font-semibold text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-0.065em] text-cream">
              Selected<br /><span className="text-cream/30">work.</span>    
            </h1>
          </div>
          
        </div>

        <div className="mt-8 sm:mt-10">
          <PortfolioFilters
            categories={categories}
            active={active}
            onChange={setActive}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-10">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelected}
              />
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-ink-line py-20 px-6 text-center">
            <p className="font-display text-xl text-cream">
              No projects here yet
            </p>
            <p className="mt-2 text-cream/60 max-w-md mx-auto">
              Add a project to this category by editing{" "}
              <code className="text-sky">src/data/projects.js</code>.
            </p>
          </div>
        )}
      </div>

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
