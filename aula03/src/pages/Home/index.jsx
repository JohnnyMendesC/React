import { ButtonComponents } from "../../components/ButtonComponents";
import { ContainerText } from "../../components/ContainerText";
import { PropsEspecial } from "../../components/Props/propsespecial";
import { PropsNormal } from "../../components/Props/propsnormal";
import { About } from "../About";
import './style.css'

export const Home = () => {

    function entrarNaPagina() {
        alert('Essa função e para logar')
    }

    function cadastrarUsuario() {
        alert('Essa função é para cadastrar um novo usuário')
    }

    function esqueciMinhaSenha() {
        alert('Essa função é para recuperar a senha')
    }

    return (
        <>
            <div className="container">

                <ContainerText nome="Pai">
                    <p>
                        Este é o filho
                    </p>
                </ContainerText>
                <ButtonComponents
                    nome="Entrar"
                    funcao={entrarNaPagina}
                />
                <ButtonComponents
                    nome="Cadastrar"
                    funcao={cadastrarUsuario}
                />
                <ButtonComponents
                    nome="Esqueci minha senha"
                    funcao={esqueciMinhaSenha}
                />

                <PropsNormal nome="Normal" />

                <PropsEspecial nome="Especial">
                    Teste prop especial
                </PropsEspecial>
                <PropsEspecial nome="Especial Reutilizada">
                    Segundo teste prop especial
                </PropsEspecial>
            </div>
        </>
    );
};