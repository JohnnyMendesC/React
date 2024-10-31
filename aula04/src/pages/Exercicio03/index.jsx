import { useState } from "react"

export const Exercicio03 = () => {
//funções
    const [state, setState] = useState(0)

    function contar () {
        setState(state +1)
        //ou
        //setState(prevState => prevState +1)
    }
    function zerar () {
        setState(0)
    }
//body
    return (
        <div>
            <h2>
            Contou: {state}
            </h2>
            <button onClick={contar}>
                Contar
            </button>
            <button onClick={zerar}>
                Zerar
            </button>
        </div>
    )
}

// 3 - Criar um componente que mantém um contador do 
// número de vezes que um botão foi clicado, mostre o 
// número de cliques na tela, use a forma literal do 
// useState para fazer essa contagem.