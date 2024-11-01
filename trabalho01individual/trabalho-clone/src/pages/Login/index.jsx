import { Button } from "../../components/Button";
import { InputField } from "../../components/InputTexto"
import { GoogleLogoImage } from "../../assets/imgs/GoogleLogo"
import { Card, CardInfo, DivBotao, DivBotaoEsqueceuSenha, DivMiniBotaoLinguagem, DivInput, DivMiniBotao, DivSubTitulo, DivTextoInfo, DivTitulo, LinkEstilo, LogoGoogle, Subtitulo, Texto, Titulo } from "./style"

export const Login = () => {
    //  Funções:
    const handleLogin = () => {
        alert("Botão clicado com sucesso!");
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
                <DivMiniBotaoLinguagem>
                    <Button
                        handleFunction={handleLogin}
                        title='Português (Brasil)'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'160px'}
                    />
                </DivMiniBotaoLinguagem>
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
                    <DivBotaoEsqueceuSenha>
                        <Button
                            handleFunction={handleLogin}
                            title='Esqueceu seu e-mail?'
                            corDeFundo={'transparent'}
                            corDaLetra={'#9ac0da'}
                            larguraBotao={'160px'}
                        />
                    </DivBotaoEsqueceuSenha>
                </DivInput>
                <DivTextoInfo>
                    <Texto>Não está no seu computador? Use o modo visitante para fazer login com privacidade.
                        <LinkEstilo> Saiba mais sobre como usar o Modo visitante</LinkEstilo>
                    </Texto>
                </DivTextoInfo>
                <DivBotao>
                    <Button
                        handleFunction={handleLogin}
                        title='Criar conta'
                        corDeFundo={'transparent'}
                        corDaLetra={'#9ac0da'}
                    />
                    <Button
                        handleFunction={handleLogin}
                        title='Próxima'
                        corDeFundo={'#9ac0da'}
                        corDaLetra={'#183764'}
                    />
                </DivBotao>
                <DivMiniBotao>
                    <Button
                        handleFunction={handleLogin}
                        title='Ajuda'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'75px'}
                        tamanhoFonte={'12px'}
                    />
                    <Button
                        handleFunction={handleLogin}
                        title='Privacidade'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'75px'}
                        tamanhoFonte={'12px'}
                    />
                    <Button
                        handleFunction={handleLogin}
                        title='Termos'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'86px'}
                        tamanhoFonte={'12px'}
                    />
                </DivMiniBotao>
            </CardInfo>
        </Card>
    )
}