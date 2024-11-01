import styled from 'styled-components'

export const EstiloDeBotao = styled.button`
    background-color: #0e0e0e;
    border-radius: 20px;
    width: 110px;
    height: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    padding-left: 4.4vw;
    padding-bottom: 0.35vh;
    display: flex;
    justify-content: center;
    align-items: baseline;
    flex-direction: column;

    // Efeito para quando o mouse passa sobre o botão
    &:hover {
    filter: brightness(1.2);
    background-color: #333333;
    }
`;