import { useState } from "react";
import { useTodos } from "../../../entity/todo";

export function useCreateTodo() {
  const { createTodo } = useTodos();
  const [name, setName] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim() !== "") {
      createTodo({ name });
      setName("");
    }
  };

  return {
    name,
    handleNameChange,
    handleSubmit,
  };
}
