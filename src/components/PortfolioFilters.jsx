export default function PortfolioFilters({ categories, active, onChange }) {
  return (
    <div
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin"
      role="group"
      aria-label="Filter projects by category"
    >
      {categories.map((cat) => {
        const isActive = cat === active;
        return (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            aria-pressed={isActive}
            className={`relative whitespace-nowrap text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
              isActive
                ? "bg-cream text-ink border-cream"
                : "bg-transparent text-cream/55 border-white/10 hover:border-white/30 hover:text-cream"
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
