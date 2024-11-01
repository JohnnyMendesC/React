import { YoutubeLogoImage } from "../../assets/imgs/YoutubeLogo"
import { Container, CardLateralEsquerda, CardSuperior, CardCentral, DivHamburguer, DivLogoYoutube, DivTituloYoutube, TituloYoutube, Sobretexto, DivSobrescritoYoutube, DivBarraPesquisa, DivTresPontos, DivTeclado, DivLupa, DivMicrofone, DivLogado } from "./style"
import { Button } from "../../components/Button"
import { BarraPesquisaInputField } from "../../components/BarraDePesquisa"
export const Home = () => {
    //  Funções:
    const handleLogin = () => {
        alert("Botão clicado com sucesso!");
    };

    //  Estrutura da Pagina:
    return (
        <Container>
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
            <CardLateralEsquerda>
                <>lateral</>
            </CardLateralEsquerda>
            <CardCentral>
                <>central</>
            </CardCentral>
        </Container>
    )
}