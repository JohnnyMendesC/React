import { useState } from "react"


export const Exercicio02 = () => {
    //funções
    const [color, setColor] = useState("yellow")

    function alterarCor() {
        //"?" é ternario, ou seja if else
        //prevState é yellow ?
        //então color cyan senão yellow
        setColor(prevState => prevState === "yellow" ? "cyan" : "yellow")
    }

    //body
    return (
        <div style={{ backgroundColor: color }}>
            <button
                style={{ backgroundColor: color }}
                onClick={alterarCor}>
                Alterar Cor
            </button>
        </div>
    )
}
// Criar um componente que exibe um botão,
// ao clicar no botão, a cor de fundo do botão deve mudar
// entre duas cores diferentes (ex: vermelho e azul),
// use o callback do useState para essa troca.