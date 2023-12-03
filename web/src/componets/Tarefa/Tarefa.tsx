import { useNavigate } from "react-router-dom";
import { TarefasProps } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import Text from "../Text/Text";
import { Container } from "./styles";

function Tarefa({ descricao, nome, id, concluido }: TarefasProps) {
  const navigate = useNavigate();

  return (
    <Container concluido={concluido}>
      <Text color="branca" size="lg" weight="bold">
        {nome}
      </Text>
      <Text color="branca" size="md" weight="regular">
        {descricao}
      </Text>

      <div className="update-btn">
        <Button
          fontSize="md"
          variant="delete"
          onClick={() => {
            navigate(`/alterar/${id}`);
          }}
        >
          Alterar
        </Button>
      </div>
    </Container>
  );
}

export default Tarefa;
