import { Button } from "../../components/Button";
import { InputField } from "../../components/InputTexto"
import { GoogleLogoImage } from "../../imgs/GoogleLogo"
import { Card, CardInfo, DivBotao, DivInput, DivSubTitulo, DivTitulo, LogoGoogle, Subtexto, Subtitulo, Texto, Titulo } from "./style"

export const Login = () => {
    //  Funções:
    const handleLogin = () => {
        alert("Login realizado sem sucesso pela falta de rotas :P");
    };

    //  Estrutura da Pagina:
    return (
        <Card>
            <CardInfo>
                <LogoGoogle>
                    <GoogleLogoImage />
                </LogoGoogle>
                <DivTitulo>
                    <Titulo><p></p>Fazer login</Titulo>
                </DivTitulo>
                <DivSubTitulo>
                    <Subtitulo><p></p>Prosseguir no YouTube</Subtitulo>
                </DivSubTitulo>
            </CardInfo>
            <CardInfo>
                <DivInput>
                    <InputField
                        propsplaceholder={'E-mail ou telefone'}
                        propstype={'text'}
                    />
                    <InputField
                        propsplaceholder={'Senha'}
                        propstype={'password'}
                    />
                    <Button
                        handleFunction={handleLogin}
                        title='Esqueceu seu e-mail?'
                        corDeFundo={'transparent'}
                        corDaLetra={'#9ac0da'}
                        larguraBotao={'160px'}
                    />
                </DivInput>
                <Texto>Esqueceu seu e-mail?</Texto>
                <Texto>Não está no seu computador? Use o modo visitante para fazer login com privacidade. Saiba mais sobre como usar o Modo visitante</Texto>
                <DivBotao>
                    <Button
                        handleFunction={handleLogin}
                        title='Próxima'
                        corDeFundo={'#9ac0da'}
                        corDaLetra={'#183764'}
                    />
                    <Button
                        handleFunction={handleLogin}
                        title='Próxima'
                        corDeFundo={'transparent'}
                        corDaLetra={'#9ac0da'}
                    />
                </DivBotao>
                <Subtexto>Ajuda Privacidade Termos</Subtexto>
            </CardInfo>
        </Card>
    )
}