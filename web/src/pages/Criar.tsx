import { useState } from "react";
import Button from "../componets/Button/Button";
import { useTodos } from "../hooks/useTodos";
import { useNavigate } from "react-router-dom";

function Criar() {
  const [nome, setNome] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [done, setDone] = useState<boolean>(false);
  const navigate = useNavigate()

  const { handleCreateTodo } = useTodos();

  console.log(done);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("enviou o formulário");
          handleCreateTodo({ nome, desc, done });
          setNome("");
          setDesc("");
          setDone(false);
          navigate("/tarefas")
        }}
      >
        <div>
          <label htmlFor="nome">Nome da tarefa: </label>
          <input
            placeholder="Ex: Comprar pão"
            type="text"
            name="nome"
            id=""
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Descrição da tarefa: </label>
          <input
            placeholder="Ex: Na padaria da esquina"
            type="text"
            name="desc"
            id=""
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="desc">Concluido: </label>
          <input
            type="checkbox"
            name="desc"
            id=""
            checked={done}
            onChange={() => setDone(!done)}
          />
        </div>
        <Button variant="primary">Criar</Button>
      </form>
    </div>
  );
}

export default Criar;
