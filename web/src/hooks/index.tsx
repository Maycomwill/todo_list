import { ReactNode } from "react";
import { TodosContextProvider } from "../context/Context";

export function AppProvider({ children }: { children: ReactNode }) {
  return <TodosContextProvider>{children}</TodosContextProvider>;
}
