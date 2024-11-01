import { YoutubeLogoImage } from "../../assets/imgs/YoutubeLogo"
import { Container, CardLateralEsquerda, CardSuperior, CardCentral, DivHamburguer, DivLogoYoutube, DivTituloYoutube, TituloYoutube, Sobretexto, DivSobrescritoYoutube, DivBarraPesquisa, DivTresPontos, DivTeclado, DivLupa, DivMicrofone, DivLogado, CardComecar, TextQueTal, TextAssista, DivComecar, DivAssista, DivOpcoesLateral, DivLogadoLateral, DivEspacamento, TextoDireitosAutorais, TituloCategoriasLateral, DivFacaLoginLateral, TextFacaLogin } from "./style"
import { Button } from "../../components/Button"
import { BarraPesquisaInputField } from "../../components/BarraDePesquisa"
import { ButtonLateral } from "../../components/ButtonLateral"
export const Home = () => {
    //  Funções:
    const handleLogin = () => {
        alert("Botão clicado com sucesso!");
    };

    //  Estrutura da Pagina:
    return (
        <Container>
            {/* CARD SUPERIOR */}
            <CardSuperior>
                <DivHamburguer>
                    <Button
                        title='|||'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'auto'}
                        tamanhoFonte={'23px'}
                    />
                </DivHamburguer>
                <DivLogoYoutube>
                    <YoutubeLogoImage />
                </DivLogoYoutube>
                <DivTituloYoutube>
                    <TituloYoutube>YouTube</TituloYoutube>
                </DivTituloYoutube>
                <DivSobrescritoYoutube>
                    <Sobretexto>BR</Sobretexto>
                </DivSobrescritoYoutube>

                <DivBarraPesquisa>
                    <BarraPesquisaInputField
                        propsplaceholder={'Pesquisar'}
                        propstype={'text'}
                        borda={'1px solid #313131'}
                        raioDaBorda={'100px 0px 0px 100px'}
                        comprimento={'39.15vw'}
                        altura={'6vh'}
                        cor={'#dfdfdf'}
                        tamanhoFonte={'18px'}
                    />
                </DivBarraPesquisa>
                <DivTeclado>
                    <Button
                        handleFunction={handleLogin}
                        title='[|||||]'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'86px'}
                        tamanhoFonte={'11px'}
                    />
                </DivTeclado>
                <DivLupa>
                    <Button
                        handleFunction={handleLogin}
                        title='Q'
                        corDeFundo={'#313131'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'65px'}
                        tamanhoFonte={'16px'}
                        raioDaBorda={'0px 200px 200px 0px'}
                    />
                </DivLupa>
                <DivMicrofone>
                    <Button
                        handleFunction={handleLogin}
                        title='Ü'
                        corDeFundo={'#313131'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'40px'}
                        tamanhoFonte={'16px'}
                        raioDaBorda={'200px 200px 200px 200px'}
                    />
                </DivMicrofone>
                <DivTresPontos>
                    <Button
                        handleFunction={handleLogin}
                        title='...'
                        corDeFundo={'transparent'}
                        corDaLetra={'#dfdfdf'}
                        larguraBotao={'auto'}
                        tamanhoFonte={'23px'}
                    />
                </DivTresPontos>
                <DivLogado>
                    <Button
                        handleFunction={handleLogin}
                        title='J. Mendes'
                        corDeFundo={'#0e0e0e'}
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'36.5px'}
                        larguraBotao={'125px'}
                        tamanhoFonte={'12px'}
                        borda={'1px solid #757575'}
                        raioDaBorda={'200px 200px 200px 200px'}
                    />
                </DivLogado>
            </CardSuperior>

            {/* CARD LATERAL DA ESQUERDA */}
            <CardLateralEsquerda>
                <DivOpcoesLateral>
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Início'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Shorts'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Inscrições'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>


                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Você'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Histórico'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>
                    <DivFacaLoginLateral>
                        <TextFacaLogin>
                            <p></p>Faça login para curtir vídeos, comentar e se inscrever.
                        </TextFacaLogin>
                    </DivFacaLoginLateral>

                    {/* Faça login para curtir vídeos, comentar e se inscrever. */}
                    <DivLogadoLateral>
                        <Button
                            handleFunction={handleLogin}
                            title='J. Mendes'
                            corDeFundo={'#0e0e0e'}
                            corDaLetra={'#dfdfdf'}
                            alturaBotao={'36.5px'}
                            larguraBotao={'125px'}
                            tamanhoFonte={'12px'}
                            borda={'1px solid #757575'}
                            raioDaBorda={'200px 200px 200px 200px'}
                        />
                    </DivLogadoLateral>
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>
                    <TituloCategoriasLateral>
                        Explorar
                    </TituloCategoriasLateral>
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Em alta'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Shopping'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Música'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Filmes'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Ao vivo'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Jogos'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Notícias'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Esportes'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Cursos'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Podcasts'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>

                    {/* Mais do YouTube */}
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='YouTube Premium'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='YouTube Music'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='YouTube Kids'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>

                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Configurações'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Histórico'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Ajuda'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <ButtonLateral
                        handleFunction={handleLogin}
                        title='Enviar Feedback'
                        corDaLetra={'#dfdfdf'}
                        alturaBotao={'6vh'}
                        larguraBotao={'15.2vw'}
                        tamanhoFonte={'2.1vh'}
                        raioDaBorda={'12px 12px 12px 12px'}
                    />
                    <DivEspacamento>
                        <Sobretexto>
                            __________________________________________________
                        </Sobretexto>
                    </DivEspacamento>

                    <TextoDireitosAutorais>
                        Sobre Imprensa <p></p> Direitos autorais <p></p> Entre em contato <p></p>
                        Criadores de conteúdo <p> </p>Publicidade Desenvolvedores <p></p>
                        Termos Privacidade <p></p>Política e segurança <p></p>
                        Como funciona o YouTube <p></p>Testar os novos recursos<p></p>
                        © 2024 Google LLC
                    </TextoDireitosAutorais>

                </DivOpcoesLateral>
            </CardLateralEsquerda>

            {/* CARD DA AREA PRINCIPAL CENTRAL */}
            <CardCentral>
                <CardComecar>
                    <DivComecar>
                        <TextQueTal>
                            <strong>Que tal uma pesquisa para começar?</strong>
                        </TextQueTal>
                    </DivComecar>
                    <DivAssista>
                        <TextAssista>
                            Assista vídeos para nos ajudar a criar um feed de conteúdo que combine com você.
                        </TextAssista>
                    </DivAssista>
                </CardComecar>
            </CardCentral>
        </Container >
    )
}