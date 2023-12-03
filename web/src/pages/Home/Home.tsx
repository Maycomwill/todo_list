import { useNavigate } from "react-router-dom";
import Button from "../../componets/Button/Button";
import Text from "../../componets/Text/Text";
import { Container } from "./styles";
import { useEffect } from "react";
import { useTodos } from "../../hooks/useTodos";

export default function Home() {
  const navigate = useNavigate();

  const {getAllUsers} = useTodos()

  useEffect(() => {
    getAllUsers()
  }, []);
  return (
    <>
      <Container>
        <Text weight="black" color="vermelha" size="xl">
          Home
        </Text>
        <Button
          onClick={() => {
            navigate("/tarefas");
          }}
          variant="primary"
        >
          Tarefas
        </Button>
      </Container>
  
    </>
  );
}
