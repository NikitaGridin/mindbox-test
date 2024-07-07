import { useCreateTodo } from "../model/use-create-todo";

export function FormCreateTodo() {
  const { name, handleNameChange, handleSubmit } = useCreateTodo();

  return (
    <form className="bg-white shadow flex" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={handleNameChange}
        type="text"
        placeholder="What needs to be done?"
        className="px-3 py-2 w-full outline-none"
      />
      <button
        className="px-4 bg-black text-white font-semibold text-sm"
        type="submit"
      >
        Add
      </button>
    </form>
  );
}
