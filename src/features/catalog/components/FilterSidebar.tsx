type FilterOption = {
  label: string;
  value: string;
};

type FilterGroup = {
  title: string;
  name: string;
  options: FilterOption[];
};

type FilterSidebarProps = {
  filters: FilterGroup[];
};

export function FilterSidebar({ filters }: FilterSidebarProps) {
  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <div className="sticky top-28">
        <div className="border-b border-stone-200 pb-5">
          <h2 className="font-manrope text-xs font-semibold uppercase tracking-[0.18em] text-stone-950">
            Фильтры
          </h2>
        </div>

        <div className="divide-y divide-stone-200">
          {filters.map((filter) => (
            <div key={filter.name} className="py-6">
              <h3 className="font-manrope text-sm font-medium text-stone-950">
                {filter.title}
              </h3>

              <div className="mt-4 flex flex-col gap-3">
                {filter.options.map((option) => (
                  <label
                    key={option.value}
                    className="flex cursor-pointer items-center gap-3 font-manrope text-sm text-stone-600"
                  >
                    <input
                      type="checkbox"
                      name={filter.name}
                      value={option.value}
                      className="h-4 w-4 accent-stone-950"
                    />

                    {option.label}
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
