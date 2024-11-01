import { useEffect, useState } from "react"
import { Container } from "./style"
import { GetUsers } from "../../services/GetUsers";

export const RequestApi = () => {
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false)

    async function carregarDadosApi() {
        setIsLoading(true)
        const response = await GetUsers();
        if (response.status === 200) {
            console.log('Retorno api', response.data);
            setTimeout(() => {
                setUsers(response.data)
                setIsLoading(false)
            }, 10000)
        } else {
            console.log('Erro ao carregar dados')
            setIsLoading(false)
        }
    //3) Guarda a resposta, uma promise
    }
    useEffect(() => {
        carregarDadosApi();
    }, []);

    // Estrutura da Pagina
    return (
        <Container>
            Request API

            {isLoading ? 
            (
                "Carregando" 
            ) : (
            users.map((user) => (
                <CardUser user={user} />
            ))
        )}
        </Container>
    )
}

const CardUser = ({user}) => {
    return(
        <div key={user.id} 
        style={{
            display:'flex', 
            flexDirection:'column', 
            backgroundColor:'#fff', 
            marginTop: '10px'}}>
        <span>Nome: {user.name}</span>
        <span>Email: {user.email}</span>
    </div>
    )
}