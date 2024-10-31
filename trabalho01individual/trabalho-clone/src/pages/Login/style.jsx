import styled from "styled-components";

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
    background-color: #db1d1da0;
    box-sizing: border-box;
    height: 61.8vh;
    width: 50%;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Titulo = styled.text`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: xx-large;
    margin: 20px;
`;
export const Subtitulo = styled.text`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: large;
    margin: 20px;
`;
export const Texto = styled.text`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: medium;
    margin: 20px;
`;
export const Subtexto = styled.text`
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: small;
    margin: 20px;
`;