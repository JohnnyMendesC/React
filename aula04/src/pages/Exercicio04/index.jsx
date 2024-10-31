import { useState } from "react"

export const Exercicio04 = () => {
  //funções
  const [inputText, setInputText] = useState('')

  const [display, setDisplay] = useState('')

  function pegarInput(event) {
    setInputText(event.target.value)
    console.log(event.target.value)
  }

  function enviarDisplay() {
    setDisplay(inputText)
  }
  //body
  return (
    <div>
      <input
        onChange={pegarInput}
        type="text"
        placeholder="Digite seu digite aqui"
      />
      <button onClick={enviarDisplay}>Send</button>
      Texto exibido {display}
    </div>
  )
}

// Criar um componente que contém um campo
// de entrada de texto e um botão, o texto digitado
// deve ser exibido abaixo do campo e ao clicar no
// botão, exiba o texto na tela.