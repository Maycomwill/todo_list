import { useNavigate, useParams } from "react-router-dom";
import AlterForm from "../componets/AlterForm";
import Button from "../componets/Button/Button";
import { useTodos } from "../hooks/useTodos";

function Alterar() {
  const params = useParams();
  const navigate = useNavigate();

  const id = params.todoId;

  const { deleteTodo } = useTodos();
  return (
    <div>
      <AlterForm />
      <Button
        variant="primary"
        onClick={() => {
          deleteTodo(id), navigate("/tarefas"), window.location.reload();
        }}
      >
        Deletar tarefa
      </Button>
    </div>
  );
}

export default Alterar;
