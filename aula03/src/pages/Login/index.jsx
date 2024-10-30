import React, { useState, useReducer } from 'react'
import { Button } from '../../components/Button'
import { InputField } from '../../components/InputField'
import { Container, ContentForms, Title } from './style'

export const Login = () => {

    const handleLogin = () => {
        alert('Login')
    }

    //useState
    const [estadoInicial, setEstadoInicial] = useState(0);

    //useState
    function aumentarEstadoInicialFormaCallback() {
        setEstadoInicial(prevState => prevState + 1)
    }
    //useState
    function aumentarEstadoInicialFormaLiteral() {
        setEstadoInicial(prevState + 1)
    }


    //useReducer
    function usandoReducer(state, action) {
        switch (action.type) {
            case 'aumentar':
                return { count: state.count + 1 }
            case 'diminuir':
                return { count: state.count - 1 }
            case 'multiplicar':
                return { count: state.count * 2 }
            case 'dividir':
                return { count: state.count / 2 }
            default:
                return state;
        }
    }
    //useReducer
    const estadoInicialReducer = { count: 0 }
    const [state, dispatch] = useReducer(usandoReducer, estadoInicialReducer)

    //useMemo
    //useCallback
    //useRef
    //useEffect
    //useContext
    return (
        <Container>
            <ContentForms>
                <Title>
                    Login
                </Title>
                <p>Você Reducer clicou {state.count} vezes</p>
                <button onClick={() => dispatch({ type: 'aumentar' })}>
                    AumentarUseREDUCER
                </button>
                <button onClick={() => dispatch({ type: 'diminuir' })}>
                    DiminuirUseREDUCER
                </button>
                <button onClick={() => dispatch({ type: 'multiplicar' })}>
                    MultiplicarUseREDUCER
                </button>
                <button onClick={() => dispatch({ type: 'dividir' })}>
                    DividirUseREDUCER
                </button>


                <p>Você State clicou {estadoInicial} vezes</p>
                <button onClick={aumentarEstadoInicialFormaCallback}>AumentarUseSTATE</button>
                <button onClick={() => setEstadoInicial(estadoInicial - 1)}>DiminuirUseSTATE</button>



                {/* <button onClick={() => setEstadoInicial(estadoInicial+1)}>Click</button> */}

                <InputField
                    propsplaceholder="Digite seu login"
                    propstype="text"
                />

                <InputField
                    propsplaceholder="Digite sua senha"
                    propstype="password"
                />

                <Button
                    title="Entrar"
                    handleFunction={handleLogin}
                />
            </ContentForms>
        </Container>
    )
}