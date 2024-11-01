import styled from 'styled-components'

export const EstiloDeInput = styled.input`
  background-color: transparent;
  border: 1px solid #a9a9a9;
  border-radius: 6px;
  width: 92.5%;
  height: 56px;
  box-sizing: border-box;
  padding-left: 13px;
  color: #dfdfdf;
  font-family: Geneva, Tahoma, sans-serif;
  font-size: 16px;
  margin-bottom: 3px;

  // Estilo para o placeholder
  &::placeholder {
    font-size: 16px;
    color: #a9a9a9;
  }

  // Estilo pra quando o input está em foco
  &:focus {
    border: 1px solid #9ac0da;
    outline: #9ac0da solid 1px ;
  }
`;