import { useReducer } from "react"

export const ExercicioReducer = () => {
    //functions
    const estadoInicial = { count: 0 }
    function usandoReducer(state, action) {
        switch (action.type) {
            case "aumentar":
                return { count: state.count + 1 }
            case "diminuir":
                return { count: state.count - 1 }
            case "resetar":
                return estadoInicial
            default:
                return new Error()
        }
    }
    const [state, dispatch] = useReducer(usandoReducer, estadoInicial)
    //body
    return (
        <div>
            <h1>Voce clicou {state.count} vezes</h1>
            <button onClick={() => dispatch({type:"aumentar"})}>Aumentar</button>
            <button onClick={() => dispatch({type:"diminuir"})}>Diminuir</button>
            <button onClick={() => dispatch({type:"resetar"})}>Resetar</button>
        </div>
    )
}
// Criar um componente que utiliza useReducer para
// gerenciar o estado de um contador, o componente deve
// ter botões para aumentar, diminuir e um pra resetar
//  o contador.