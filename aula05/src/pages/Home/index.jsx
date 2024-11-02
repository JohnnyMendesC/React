
import { useEffect, useState } from 'react';
import { Api } from '../../services/api'
import { GetUsers } from '../../services/GetUsers'

import { useProps } from '../../hooks/useProps';
import './style.css'

export const Home = () => {

  const { email } = useProps();

  const [idUser, setIdUser] = useState('');

  function entrarNaPagina() {
    alert("Essa função e para logar");
  }

  function esqueciMinhaSenha() {
    alert("Essa função e de esqueci minha senha");
  }

  function cadastrarUsuario() {
    alert("Essa função e para cadastrar");
  }

  async function carregarDadosApi() {
    const response = await GetUsers();
    if (response.status === 200) {
      console.log('Retorno api', response.data);
    } else {
      console.log('Erro ao carregar dados')
    }
  }

  const deleteUser = async () => {
    const user = {
      id: idUser
    }
    const endpointUser = import.meta.env.VITE_URL_USERS;
    try {
      const response = await Api.delete(`${endpointUser}/${user.id}`)
      if (response.status === 200 || response.status === 201) {
        console.log("Usuario deletado com sucesso")
      } else {
        console.log("Erro ao deletar")
      }
    } catch (error) {
      console.log('Error', error)
    }
  }
  useEffect(() => {
    carregarDadosApi();
  }, []);

  return (
    <>
      <div className="container">

        <h2>
          HOME PAGE
        </h2>

        <h3>
          Olá, {email}!
        </h3>

        <input
          onChange={(e) => setIdUser(e.target.value)}
          placeholder='Digite o Id'
          type='text'
          value={idUser} />

        <button onClick={deleteUser}>Deletar Usuario</button>

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
