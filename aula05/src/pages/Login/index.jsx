import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { InputField } from "../../components/InputField";
import { Container, Tittle, ContentForms } from "./style";
import { useProps } from "../../hooks/useProps";

export const Login = () => {

  const pegarValorInput = (e) => {
    setEmail(e.target.value)
    console.log('Valor input', e.target.value)
  }

  const navigate = useNavigate();

  const { setEmail } = useProps();

  const handleLogin = () => {
    // console.log('valor')
    navigate("/home");
  };

  return (
    <Container>
      <ContentForms>
        <Tittle>Login</Tittle>

        <InputField
          handleFunction={pegarValorInput}
          propsplaceholder="Digite seu login"
          propstype="email"
        />

        <Button title="Entrar" handleFunction={handleLogin} />
      </ContentForms>
    </Container>
  );
};