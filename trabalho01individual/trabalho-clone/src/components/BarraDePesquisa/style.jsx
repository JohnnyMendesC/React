import styled from 'styled-components'

export const BarraPesquisaInput = styled.input`
  background-color: #141414;
  border: 1px solid #a9a9a9;
  border-radius: 100px;
  box-sizing: border-box;
  padding-left: 15.5px;
  padding-bottom: 3px;
  color: #dfdfdf;
  font-size: 16px;
  margin-bottom: 3px;

  // Estilo para o placeholder
  &::placeholder {
    font-size: 16px;
    color: #a9a9a9;
  }

  // Estilo pra quando o input está em foco
  &:focus {
    border: 1px solid #006eff;
    outline: #006eff solid 1px ;
  }
`;