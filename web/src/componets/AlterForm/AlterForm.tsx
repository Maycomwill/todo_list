import { useNavigate, useParams } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";

import Button from "../Button/Button";
import { useTodos } from "../../hooks/useTodos";
import { Container } from "./styles";
import Text from "../Text/Text";

function AlterForm() {
  const navigate = useNavigate();
  const params = useParams();
  const id = params.todoId;
  const { getUniqueTodo, tarefa, handleUpdateTodo } = useTodos();

  const [title, setTitle] = useState<string | undefined>();
  const [desc, setDesc] = useState<string | undefined>();
  const [completed, setCompleted] = useState<boolean | undefined>();

  useEffect(() => {
    getUniqueTodo(id);

    setTitle(tarefa?.nome);
    setDesc(tarefa?.descricao);
    setCompleted(tarefa?.concluido);
  }, []);

  return (
    <Container
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        handleUpdateTodo({ nome: title, desc, completed, todoId: id });
        navigate(`/tarefas`);
        window.location.reload();
      }}
    >
      {title === undefined ? (
        <div className="input-wrapper">
          <label htmlFor="title">
            <Text color="branca" size="md" weight="bold">
              Título:
            </Text>
          </label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Ex: Ir no mercado"
            value={tarefa?.nome}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      ) : (
        <div className="input-wrapper">
          <label htmlFor="title">
            <Text color="branca" size="md" weight="bold">
              Título:
            </Text>
          </label>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Ex: Ir no mercado"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      )}

      {desc === undefined ? (
        <div className="input-wrapper">
          <label htmlFor="desc">
            <Text color="branca" size="md" weight="bold">
              Descrição:
            </Text>
          </label>
          <input
            type="text"
            name="desc"
            id=""
            placeholder="Ex: Compar pão, queijo, ovos ..."
            value={tarefa?.descricao}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      ) : (
        <div className="input-wrapper">
          <label htmlFor="desc">
            <Text color="branca" size="md" weight="bold">
              Descrição:
            </Text>
          </label>
          <input
            type="text"
            name="desc"
            id=""
            placeholder="Ex: Compar pão, queijo, ovos ..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
      )}
      {completed === undefined ? (
        <div className="input-wrapper">
          <label htmlFor="completed">
            <Text color="branca" size="md" weight="bold">
              Concluído:
            </Text>
          </label>
          <input
            placeholder="a"
            type="checkbox"
            checked={tarefa?.concluido}
            name="completed"
            onChange={() => {
              setCompleted(!tarefa?.concluido);
            }}
          />
        </div>
      ) : (
        <div className="input-wrapper" id="check-input">
          <label htmlFor="completed">
            <Text color="branca" size="md" weight="bold">
              Concluído:
            </Text>
          </label>
          <input
            placeholder="a"
            type="checkbox"
            checked={completed}
            name="completed"
            onChange={() => {
              setCompleted(!completed);
            }}
          />
        </div>
      )}
      <div className="update-btn">
        <Button type="submit" variant="primary">
          atualizar tarefa
        </Button>
      </div>
    </Container>
  );
}

export default AlterForm;
