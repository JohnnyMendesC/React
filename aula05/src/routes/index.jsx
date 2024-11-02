//Rotas react-router-dom v5
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login } from '../pages/Login'
import { Home } from '../pages/Home'
import { PageError } from '../pages/PageError'
import { Layout } from '../components/Layout'
import { ProviderProps } from '../hooks/useProps'

export const Routers = () => {

    const messageError = "Página não encontrada!"
    const messageAccessDenied = "Você não tem acesso a essa pagina"
    return (
        <BrowserRouter>
            <Routes>
                {/* <ContextoGeral> */}
                <Route path='*' element={<PageError message={messageError} />} />
                <Route path='/login' element={<Login />} />
                {/* </ContextoGeral> */}
                
                {/* <ProviderProps> */}
                    <Route element={<Layout />}>
                        {/* <ContextoAlunos> */}
                        <Route path='/home' element={<Home />} />
                        {/* </ContextoAlunos> */}
                    </Route>
                {/* </ProviderProps> */}

                {/* <AuthContext> */}
                <Route path='/diretor' element={<PageError message={messageAccessDenied} />} />
                {/* </AuthContext> */}
            </Routes>
        </BrowserRouter>
    )
}