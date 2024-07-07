import { Check } from "lucide-react";
import { cn } from "../../../shared/lib/uttils";

export function TodoCard({
  id,
  state,
  name,
  changeStateTodo,
}: {
  id: string;
  state: "active" | "completed";
  name: string;
  changeStateTodo: ({
    id,
    state,
  }: {
    id: string;
    state: "active" | "completed";
  }) => void;
}) {
  return (
    <div
      onClick={() =>
        changeStateTodo({
          id,
          state: state === "active" ? "completed" : "active",
        })
      }
      className="flex items-center gap-2 px-2 py-3 cursor-pointer"
    >
      <div className="w-6 h-6 border rounded-full border-gray-600 flex items-center justify-center">
        {state === "completed" && (
          <Check className="text-green-600" size={20} />
        )}
      </div>
      <div
        className={cn("", {
          "text-gray-600": state === "active",
          "text-gray-400 line-through": state === "completed",
        })}
      >
        {name}
      </div>
    </div>
  );
}
