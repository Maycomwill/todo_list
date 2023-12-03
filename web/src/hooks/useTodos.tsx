import { useContext } from "react";
import { TodosContext, TodosContextInterface } from "../context/Context";


export function useTodos(): TodosContextInterface {
    const context = useContext(TodosContext)

    return context
}