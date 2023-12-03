import { useNavigate, useParams } from "react-router-dom";
import AlterForm from "../../componets/AlterForm/AlterForm";
import Button from "../../componets/Button/Button";
import { useTodos } from "../../hooks/useTodos";
import { Container } from "./styles";

function Alterar() {
  const params = useParams();
  const navigate = useNavigate();

  const id = params.todoId;

  const { deleteTodo } = useTodos();
  return (
    <Container>
      <AlterForm />
      <div className="delete-btn">
      <Button
          variant="primary"
          onClick={() => {
            navigate(-1);
          }}
        >
          Voltar
        </Button>
        <Button
          variant="delete"
          onClick={() => {
            deleteTodo(id), navigate("/tarefas"), window.location.reload();
          }}
        >
          Deletar tarefa
        </Button>
      </div>
    </Container>
  );
}

export default Alterar;
