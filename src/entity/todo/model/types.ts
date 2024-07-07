export type State = "completed" | "active";

export type Todo = {
  id: string;
  name: string;
  state: State;
};

export type Filter = "all" | "completed" | "active";
