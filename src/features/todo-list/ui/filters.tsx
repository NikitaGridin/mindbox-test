import { useTodos } from "../../../entity/todo";
import { cn } from "../../../shared/lib/uttils";

export function Filters() {
  const { currentFilter, changeFilter, filters } = useTodos();

  return (
    <div className="flex items-center gap-2">
      {filters.map((filter, i) => (
        <button
          key={i}
          onClick={() => changeFilter({ filter })}
          className={cn(`px-2 rounded-md py-1`, {
            border: currentFilter === filter,
          })}
        >
          {filter}
        </button>
      ))}
    </div>
  );
}
