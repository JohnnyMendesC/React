import styled from "styled-components";

//  DIVS:
// GERAL:
export const Container = styled.div`
  display: flex;
`;
// SUPERIOR:
// Card superior onde fica a area de busca
export const CardSuperior = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background-color: #0e0e0e;
    margin: 0vh 0vw 0vh 0vw;
    width: 100vw;
    height: 8.3vh;
    display: flex;
    justify-content: baseline;
    align-items: center;
    z-index: 1000;
`;

// Div do hamburguer |||
export const DivHamburguer = styled.div`
    background-color: transparent;
    transform: rotate(90deg);
    margin: 0vh 0vw 0vh 1.7vw;
`;

// Div da Logomarca do YouTube
export const DivLogoYoutube = styled.div`
    background-color: transparent;
    margin: 0.4vh 0vw 0vh 0.7vw;
`;

// Div do Titulo da Logomarca
export const DivTituloYoutube = styled.div`
    background-color: transparent;
    margin: 0.2vh 0vw 0vh 0.2vw;
`;
// Div do Sobrescrito do Titulo
export const DivSobrescritoYoutube = styled.div`
    background-color: transparent;
    margin: -1.8vh 0vw 0vh 0.3vw;
`;

// Div da Barra de Pesquisa
export const DivBarraPesquisa = styled.div`
    background-color: transparent;
    margin: 0.4vh 0vw 0vh 12.95vw;    
`;

// Div teclado
export const DivTeclado = styled.div`
    background-color: transparent;
    width: auto;
    margin: 0vh 0vw 0vh -4.5vw;
`;

// Div Lupa
export const DivLupa = styled.div`
    background-color: transparent;
    margin: 0vh 0vw 0vh -1.74vw;
`;

// Div microfone
export const DivMicrofone = styled.div`
    background-color: transparent;
    margin: 0vh 0vw 0vh 1.1vw;
`;

// Div dos tres pontinhos ...
export const DivTresPontos = styled.div`
    background-color: transparent;
    transform: rotate(90deg);
    margin: 0vh 0vw 0vh 11.69vw;
`;

// Div Logado
export const DivLogado = styled.div`
    background-color: transparent;
    margin: 0vh 0vw 0vh -0.3vw;
`;

//LATERAL ESQUERDA:
// Card Lateral na Esquerda da Home
export const CardLateralEsquerda = styled.div`
    position: relative;
    background-color: #0e0e0e;
    margin: 8.3vh 0vw 0vh 0vw;
    padding-top: 1.75vh;
    width: 21vw;
    height: calc(100vh - 8.3vh);
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: baseline;
`;

// Div das Opções do Card Lateral
export const DivOpcoesLateral = styled.div`
    background-color: #0e0e0e;
    width: 100%;
    margin-right: -1.8vh;
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: column;
`;


// Div do texto Faça Login lateral
export const DivFacaLoginLateral = styled.div`
    background-color: transparent;
    width: 70%;
    margin-top: 1.6vh;
    margin-right: 1vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
// Div do botão Logado da aba Lateral
export const DivLogadoLateral = styled.div`
    background-color: transparent;
    width: 100%;
    margin-top: 2.4vh;
    margin-right: 2.8vw;
    padding-bottom: 0.6vh;
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: column;
`;

// Div de espaçamento entre botões da aba lateral
export const DivEspacamento = styled.div`
    background-color: transparent;
    margin-right: 1vw;
    padding-top: 0.1vh;

`;

//CENTRAL:
// Card central onde ficam os vídeos
export const CardCentral = styled.div`
    position: relative;
    display: flex;
    justify-content: baseline;
    align-items: center;
    flex-direction: column;
    margin: 8.3vh 0vw 0vh 0vw;
    padding-left: 1.8vw;
    background-color: #0e0e0e;
    height: calc(100vh - 8.3vh);
    width: 100vw;
`;

// Card da Mensagem Começar e Assista vídeos
export const CardComecar = styled.div`
    background-color: #202020;
    border: 0.05vh solid #3b3b3b;
    display: flex;
    align-items: center;    
    flex-direction: column;
    border-radius: 12px;
    margin: 3.5vh 0vw 0vh -1vw;
    height: 14.7vh;
    width: 47.6vw;
`;

// Div da Mensagem Começar
export const DivComecar = styled.div`
    background-color: transparent;
    margin-top: 3.7vh;
`;
// Div da Mensagem Assista Videos
export const DivAssista = styled.div`
    background-color: transparent;
    margin-top: 1.95vh;
`;

//  TEXTs:
// Text de título
export const TituloYoutube = styled.text`
    background-color: transparent;
    position: relative;    
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size: 3.4vh;
    letter-spacing: -2.6px;
    margin: 0px;
    color: #dfdfdf;
`;

// Text de textos menores sobrescritos
export const Sobretexto = styled.text`
    background-color: transparent;    
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size: 1.5vh;
    vertical-align: super;
    color: #a9a9a9;    
    margin: -10vh 0vw 0vh .1vw;
`;

// Text das categorias do menu lateral
export const TituloCategoriasLateral = styled.text`
    background-color: transparent;
    position: relative;
    font-size: 2.5vh;
    margin-right: 8.9vw;        
    padding-top: 1.2vh;
    color: #dfdfdf;
`;

// Text dos textos de direitos autorais na aba lateral esquerda
export const TextoDireitosAutorais = styled.text`
    background-color: transparent;    
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-size: 2vh;
    vertical-align: super;
    color: #a9a9a9;    
`;

// Text do titulo Que tal uma pesquisa
export const TextQueTal = styled.text`
        background-color: transparent;
    position: relative;
    font-size: 3.54vh;
    color: #dfdfdf;
`;

// Text da descrição do titulo Que tal uma pesquisa
export const TextAssista = styled.text`
    background-color: transparent;
    position: relative;
    font-size: 2.2vh;
    letter-spacing: -0.415px;
    color: #868686;
`;

// Text falando de realizar o login na aba lateral
export const TextFacaLogin = styled.text`
    background-color: transparent;
    position: relative;
    font-size: 2.2vh;
    letter-spacing: -0.415px;
    color: #868686;
`;