import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Tarefas from "../pages/Tarefas";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tarefas />} />
      </Routes>
    </BrowserRouter>
  );
}
