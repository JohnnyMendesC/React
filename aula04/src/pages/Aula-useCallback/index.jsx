import React, {useCallback, useState} from 'react' // Componente nativo do React
import styled from 'styled-components' // Isso e uma biblioteca
import { Container } from './style'

export const AulaUseCallback = () => {

  // () => {} -> Isso é uma arrow function

  const [count, setCount] = useState(0);

  const aumentar = useCallback(() => {
    setCount(prevState => prevState + 1); // forma de callback
    // setCount(count + 1); // forma literal
  }, []);


  return (
    <Container>
      <h1>AulaUseCallback</h1>
      <h2>Contador: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Aumentar botão 1</button>

      <FilhoDoCallback />
    </Container>
  )
}

//interrompe a renderização duplicada do callback
const FilhoDoCallback = React.memo(() => {
  console.log('FilhoDoCallback')
  return (
    <div>ola</div>
  )
})


