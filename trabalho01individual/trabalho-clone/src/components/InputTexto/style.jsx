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

  &::placeholder {
    font-size: 16px;
    color: #a9a9a9;
  }
`;