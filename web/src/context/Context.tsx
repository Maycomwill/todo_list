import { ReactNode, createContext, useState } from "react";
import { api } from "../services/api";
import { TarefasProps, UsuariosProps } from "../interfaces/interfaces";

export interface TodosContextInterface {
  usuarios: UsuariosProps[];
  tarefas: TarefasProps[];
  tarefa: TarefasProps | undefined;
  getAllUsers: () => void;
  getAllTodos: () => void;
  getUniqueTodo: (todoId: string | undefined) => void;
  handleCreateTodo: ({
    nome,
    desc,
    done,
  }: {
    nome: string;
    desc: string;
    done: boolean;
  }) => void;
  handleUpdateTodo: ({
    nome,
    desc,
    completed,
    todoId,
  }: {
    nome: string | undefined;
    desc: string | undefined;
    completed: boolean | undefined;
    todoId: string | undefined;
  }) => void;
  deleteTodo: (todoId: string | undefined) => void;
}

export const TodosContext = createContext({} as TodosContextInterface);

export function TodosContextProvider({ children }: { children: ReactNode }) {
  const [usuarios, setUsuarios] = useState<UsuariosProps[]>([]);
  const [tarefas, setTarefas] = useState<TarefasProps[]>([]);
  const [tarefa, setTarefa] = useState<TarefasProps>();

  async function getAllUsers() {
    const data = await api.get("users");
    setUsuarios(data.data);
  }

  async function getAllTodos() {
    const data = await api.get("tarefas");
    setTarefas(data.data);
  }

  async function handleCreateTodo({
    nome,
    desc,
    done,
  }: {
    nome: string;
    desc: string;
    done: boolean;
  }) {
    await api.post("/tarefas", {
      nome,
      descricao: desc,
      concluido: done,
      usuarioId: "f7395c5b-ac46-4ee5-83a8-a392ee1e026d",
    });
  }

  async function getUniqueTodo(todoId: string | undefined) {
    if (todoId !== undefined) {
      const data = await api.get(`tarefas/${todoId}`);
      setTarefa(data.data);
      // console.log(data.data);
    }
  }

  async function handleUpdateTodo({
    nome,
    desc,
    completed,
    todoId,
  }: {
    nome: string | undefined;
    desc: string | undefined;
    completed: boolean | undefined;
    todoId: string | undefined;
  }) {
    await api.put(`/tarefas/${todoId}`, {
      nome,
      descricao: desc,
      concluido: completed,
      usuarioId: "f7395c5b-ac46-4ee5-83a8-a392ee1e026d",
    });
  }

  async function deleteTodo(todoId: string | undefined) {
    if (todoId !== undefined) {
      await api.delete(`/tarefas/${todoId}`);
    }
  }

  return (
    <TodosContext.Provider
      value={{
        getAllUsers,
        getAllTodos,
        getUniqueTodo,
        handleCreateTodo,
        handleUpdateTodo,
        deleteTodo,
        usuarios,
        tarefas,
        tarefa,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}
