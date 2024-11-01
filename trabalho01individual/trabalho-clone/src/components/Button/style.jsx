import styled from 'styled-components'

export const EstiloDeBotao = styled.button`
    border-radius: 50px;
    width: 110px;
    height: 40px;
    border: 1px solid transparent;
    cursor: pointer;
    padding: 10px;

    // Efeito para quando o mouse passa sobre o botão
    &:hover {
    filter: brightness(1.2)
    }
`;