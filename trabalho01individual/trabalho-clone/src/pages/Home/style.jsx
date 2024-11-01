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
    background-color: blue;
    margin: 8.3vh 0vw 0vh 0vw;
    width: 21vw;
    height: calc(100vh - 8.3vh);
    overflow-y: auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

//CENTRAL:
// Card central onde ficam os vídeos
export const CardCentral = styled.div`
    position: relative;
    margin: 8.3vh 0vw 0vh 0vw;
    background-color: green;
    height: calc(100vh - 8.3vh);
    width: 100vw;
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