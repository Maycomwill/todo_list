import { useState } from "react";
import Button from "../../componets/Button/Button";
import { useTodos } from "../../hooks/useTodos";
import { useNavigate } from "react-router-dom";
import { Container } from "./style";
import Text from "../Text/Text";

function CreateTodoForm() {
  const [nome, setNome] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const navigate = useNavigate();

  const { handleCreateTodo } = useTodos();

  console.log(done);
  return (
    <Container
      onSubmit={(e) => {
        e.preventDefault();
        console.log("enviou o formulário");
        handleCreateTodo({ nome, desc, done });
        setNome("");
        setDesc("");
        setDone(false);
        navigate("/tarefas");
        window.location.reload()
      }}
    >
      <div className="input-wrapper">
        <label htmlFor="nome">
          <Text color="branca" size="md" weight="bold">
            Nome da tarefa:
          </Text>
        </label>
        <input
          placeholder="Ex: Comprar pão"
          type="text"
          name="nome"
          id=""
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="desc">
          <Text color="branca" size="md" weight="bold">
            Descrição da tarefa:
          </Text>
        </label>
        <input
          placeholder="Ex: Na padaria da esquina"
          type="text"
          name="desc"
          id=""
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
      </div>
      <div className="input-wrapper" id="check-input">
        <label htmlFor="desc">
          <Text color="branca" size="md" weight="bold">
            Concluido:
          </Text>
        </label>
        <input
          type="checkbox"
          name="desc"
          id=""
          checked={done}
          onChange={() => setDone(!done)}
        />
      </div>
      <div className="update-btn">
        <Button variant="primary">Criar</Button>
      </div>
    </Container>
  );
}

export default CreateTodoForm;
