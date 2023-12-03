import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tarefas from "../pages/Tarefas";
import Criar from "../pages/Criar";
import Alterar from "../pages/Alterar";

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
