import { useNavigate } from "react-router-dom";
import { TarefasProps } from "../../interfaces/interfaces";
import Button from "../Button/Button";
import Text from "../Text/Text";


function Tarefa({ descricao, nome, id }: TarefasProps) {
  const navigate = useNavigate()
  
  return (
    <li>
      <div>
        <Text color="black" size="lg" weight="regular">
          {nome}
        </Text>
        <Text color="black" size="md" weight="regular">
          {descricao}
        </Text>
      </div>
      <Button variant="primary" onClick={()=>{navigate(`/alterar/${id}`)}} >Alterar</Button>
    </li>
  );
}

export default Tarefa;
