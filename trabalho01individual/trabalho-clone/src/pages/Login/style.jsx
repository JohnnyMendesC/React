import styled from "styled-components";

//  DIVS:

// Card central do Login
export const Card = styled.div`
    background-color: #1d82db;
    margin: 14.4vh 14.8vw;
    height: 61.8vh;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

// Subdivisão dentro do Card central para dispor as informações corretamente em coluna
export const CardInfo = styled.div`
    background-color: #0e0e0e;
    box-sizing: border-box;
    height: 61.8vh;
    width: 50%;
    border-radius: 30px;
    display: flex;
    justify-content: baseline;
    flex-direction: column;
`;

// Div de posicionamento da Logo do Google (*não consegui modificar o tamanho da imagem por aqui diretamente)
export const LogoGoogle = styled.div`
    background-color: #0e0e0e;
    margin: 37px 0px 0px 36px;
    position: relative;
`;

// Div do título Fazer Login
export const DivTitulo = styled.div`
    background-color: transparent;
    margin: 21px 0px 0px 34px;
    position: relative;
`;

// Div do subtítulo Prosseguir no Youtube
export const DivSubTitulo = styled.div`
    background-color: transparent;
    margin: 0px 0px 0px 34px;
    position: relative;
`;

// Div do Input
export const DivInput = styled.div`
    background-color:transparent;
    margin: 57px 0px 0px 24px;
`;

// Div do Botão
export const DivBotao = styled.div`
    background-color: white;
`;

//  TEXTs:

// Text de título
export const Titulo = styled.text`
    background-color: transparent;
    position: relative;
    margin: 50px;
    font-family: Geneva, Tahoma, sans-serif;
    font-size: 36px;
    margin: 0px;
    color: #dfdfdf;
`;

// Text de subtítulo
export const Subtitulo = styled.text`
    background-color: transparent;
    font-family: Geneva, Tahoma, sans-serif;
    font-size: large;
    font-size: 16px;
    margin: 13px;
    color: #dfdfdf;
`;

// Text de textos comuns
export const Texto = styled.text`
    background-color: transparent;
    font-family: Geneva, Tahoma, sans-serif;
    font-size: medium;
    margin: 20px;
    color: #dfdfdf;
`;

// Text de textos menores
export const Subtexto = styled.text`
    background-color: transparent;
    font-family: Geneva, Tahoma, sans-serif;
    font-size: small;
    margin: 20px;
    color: #dfdfdf;
`;