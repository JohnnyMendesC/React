import { useState } from "react";
import { Container, Title } from "./style";


export const ImutabilidadeArray = () => {
    const[openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => {
        setOpenModal(!openModal)
    }
    // Funções

    const [newPost, setNewPost] = useState("");
    const [posts, setPosts] = useState([// [] pois é array
        { id: 1, post: 'Primeiro Post da Pagina' },
        { id: 2, post: 'Segundo Post da Pagina' }
    ]);

    const addPost = () => {
        setPosts([
            ...posts,//assim não apaga os posts anteriores
            //{ id: posts.length, post: 'Terceiro Post: Olá Mundo' }
            { id: posts.length, post: newPost }
        ])
    }

    // Estrutura da Página
    return (
        <Container>
            <button onClick={handleOpenModal}></button>
            {openModal &&
            <p>Abriu Teste se não for não foi</p> }

            <Title>
                Imutabilidade Array
            </Title>

            {posts.map(post => (
                <p>{post.post}</p>
            ))}

            <input 
            placeholder="Digite o novo post" 
            value={newPost}
            onChange={(e)=>setNewPost(e.target.value)}
            />
            <button onClick={addPost}>Adicionar Post</button>
        </Container>
    )
}