import { AlertaComponente } from "../../components/AlertaComponente"
import { BotaoCustomizadoComponente } from "../../components/BotaoCustomizadoComponente"
import { NomeComponente } from "../../components/NomeComponente"
import { PerfilComponente } from "../../components/PerfilComponente"

export const Home = () => {
    //functions funções () {}
    function botãoAlerta() {
        alert('Essa função para exibir o Alerta')
    }
    function botãoAlerta2() {
        alert('Sem a function não funciona o alert')
    }
    function botãoAlerta3() {
        alert('Cores')
    }
    //estrutura da pagina
    return (
        <>
        <div>
            <BotaoCustomizadoComponente
            funcao={botãoAlerta3}
            cor="Purple"
            corFundo="Cyan"
            nome="Verde"
            />
            <BotaoCustomizadoComponente
            funcao={botãoAlerta3}
            cor="Yellow"
            corFundo="Purple"
            nome="Azul"
            />
            <BotaoCustomizadoComponente
            funcao={botãoAlerta3}
            cor="Cyan"
            corFundo="Yellow"
            nome="Vermelho"
            />
            <AlertaComponente 
             nomeAlert="Botão Alerta"
             alerta={botãoAlerta}
            />
            <AlertaComponente 
             nomeAlert="Botão dois"
             alerta={botãoAlerta2}
            />
            <NomeComponente nome="Fu"/>
            <PerfilComponente idade="20" pais="Brasil" />
            <NomeComponente nome="La"/>
            <PerfilComponente idade="24" pais="Brasil" />
            <NomeComponente nome="No"/>
            <PerfilComponente idade="30" pais="Brasil" />
            <NomeComponente nome="De"/>
            <PerfilComponente idade="32" pais="Brasil" />
            <NomeComponente nome="Ta"/>
            <PerfilComponente idade="28" pais="Brasil" />
            <NomeComponente nome="Al"/>
            <PerfilComponente idade="19" pais="Brasil" />
        </div>
        </>
    )
}