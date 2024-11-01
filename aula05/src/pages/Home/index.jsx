
import { InputField } from '../../components/InputField';
import './style.css'

export const Home = () => {
  function entrarNaPagina() {
    alert("Essa função e para logar");
  }

  function esqueciMinhaSenha() {
    alert("Essa função e de esqueci minha senha");
  }

  function cadastrarUsuario() {
    alert("Essa função e para cadastrar");
  }
  
  
  return (
    <>
    
    <div className="container">
      
      <InputField nome="Felipe">
        Usuario cadastrado com sucesso
      </InputField>

      <InputField nome="Felipe">
        Faltou inserir informações de login
      </InputField>
      
      
      {/* <ButtonComponents nome="Entrar" /> */}

      {/* <ButtonComponents 
        nome="Cadastrar" 
        funcao={cadastrarUsuario} 
      />

      <ButtonComponents 
        nome="Entrar" 
        funcao={entrarNaPagina} 
      />

      <ButtonComponents 
        nome="Esqueci minha senha" 
        funcao={esqueciMinhaSenha} 
      /> */}
    </div>
    </>

  );
};
