import { useState } from "react";
import { Container, Title } from "./style";


export const Imutabilidade = () => {
    // Funções
    const [user, setUser] = useState({
        name: 'Nome',
        age: 25,
    });

    const alterarNome = () => {
        setUser({ // ... diz que pode ter mais
            ...user,
            name: 'Sobrenome'
        })
    }
    // Estrutura da Página
    return (
        <Container>
            <Title>
                Imutabilidade Objetos <p></p>
                nome: {user.name} <p></p>
                idade: {user.age}
            </Title>
            <button onClick={alterarNome} >Alterar nome</button>
        </Container>
    )
}