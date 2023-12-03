import { useNavigate } from "react-router-dom";
import Button from "../componets/Button/Button";
import Text from "../componets/Text/Text";
import { useEffect } from "react";
import { useTodos } from "../hooks/useTodos";
import Tarefa from "../componets/Tarefa/Tarefa";

export default function Tarefas() {
  const navigate = useNavigate();

  const { tarefas, getAllTodos } = useTodos();

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <>
      <div>
        <Text color="vermelha" weight="bold" size="xl">
          Tarefas
        </Text>
        <Button variant="primary" onClick={() => navigate("/")}>
          Home
        </Button>
      </div>
      <div>
        <ul>
          {tarefas && tarefas.length !== 0
            ? tarefas.map((item) => {
                return (
                  <Tarefa
                    concluido={item.concluido}
                    criadoEm={item.criadoEm}
                    descricao={item.descricao}
                    id={item.id}
                    nome={item.nome}
                    usuarioId={item.usuarioId}
                    key={item.id}
                  />
                );
              })
            : null}
        </ul>
        <Button variant="primary" onClick={()=> navigate("/criar")}>Criar nova tarefa</Button>
      </div>
    </>
  );
}
