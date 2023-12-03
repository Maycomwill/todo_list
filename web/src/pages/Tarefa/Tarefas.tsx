import { useNavigate } from "react-router-dom";
import Button from "../../componets/Button/Button";
import Text from "../../componets/Text/Text";
import { useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";
import Tarefa from "../../componets/Tarefa/Tarefa";
import { Container } from "./styles";

export default function Tarefas() {
  const navigate = useNavigate();

  const { tarefas, getAllTodos } = useTodos();

  useEffect(() => {
    getAllTodos();
  }, []);

  return (
    <Container>
      <div className="Header">
        <Text color="vermelha" weight="bold" size="xl">
          Tarefas
        </Text>
        <div className="button-wrapper">
          <Button variant="primary" onClick={() => navigate("/")}>
            Home
          </Button>
        </div>
      </div>
      <div className="list-wrapper">
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
      </div>
      <div className="create-btn">
        <Button variant="primary" onClick={() => navigate("/criar")}>
          Criar nova tarefa
        </Button>
      </div>
    </Container>
  );
}
