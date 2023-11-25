import { useNavigate } from "react-router-dom";
import Button from "../componets/Button/Button";
import Text from "../componets/Text/Text";

export default function Tarefas() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <Text color="vermelha" weight="bold" size="xl">
          Tarefas
        </Text>
        <Button variant="primary" onClick={()=>navigate("/")}>Home</Button>
      </div>
    </>
  );
}
