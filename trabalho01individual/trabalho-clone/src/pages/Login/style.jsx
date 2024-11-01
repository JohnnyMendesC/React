import styled from "styled-components";

//  DIVS:

// Card central do Login
export const Card = styled.div`
    background-color: #0e0e0e;
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

// Div do botão de linguagem escolhida
export const DivMiniBotaoLinguagem = styled.div`
    background-color: transparent;
    margin: 244px 0px 0px -15px;
`;

//LADO DIREITO DO CARD:
// Div do Input
export const DivInput = styled.div`
    background-color:transparent;
    margin: 57px 0px 0px 24px;
`;

// Div do botão que fica abaixo do input
export const DivBotaoEsqueceuSenha = styled.div`
    background-color:transparent;
    margin: -5px 0px 0px -14px;
`;

// Div do texto que informa sobre o modo visitante
export const DivTextoInfo = styled.div`
    background-color: transparent;
    width: 31vw;
    margin: 35px 0px 0px 23px;
`;

// Div do Botão
export const DivBotao = styled.div`
    background-color: transparent;
    display: flex;
    justify-content: baseline;
    flex-direction: row;
    margin: 43px 0px 0px 212px;
    gap: 18px;

`;

// Div mini botões
export const DivMiniBotao = styled.div`
    margin: 48px 0px 0px 244px;
`;

//  TEXTs:

// Text de título
export const Titulo = styled.text`
    background-color: transparent;
    position: relative;
    margin: 50px;
    font-size: 36px;
    margin: 0px;
    color: #dfdfdf;
`;

// Text de subtítulo
export const Subtitulo = styled.text`
    background-color: transparent;
    font-size: large;
    font-size: 16px;
    margin: 13px;
    color: #dfdfdf;
`;

// Text de textos comuns
export const Texto = styled.text`
    background-color: transparent;
    font-size: 15px;
    color: #dfdfdf;
`;

// Text de textos menores
export const Subtexto = styled.text`
    background-color: transparent;
    font-size: small;
    margin: 20px;
    color: #dfdfdf;
`;

// Text de links
export const LinkEstilo = styled.a`
  background-color: transparent;
  color: #9ac0da;
  cursor: pointer;  
  &:hover {
      text-decoration: underline;
    }
`;