import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Tarefas from "../pages/Tarefa/Tarefas";
import Criar from "../pages/Criar/Criar";
import Alterar from "../pages/Alterar/Alterar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
        <Route path="/criar" element={<Criar />} />
        <Route path="/alterar/:todoId" element={<Alterar />} />
      </Routes>
    </BrowserRouter>
  );
}
