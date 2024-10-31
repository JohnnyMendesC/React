import { Card, CardInfo, Subtexto, Subtitulo, Texto, Titulo } from "./style"

export const Login = () => {
    return (
        <Card>
            <CardInfo>
                <Titulo>Fazer login</Titulo>
                <Subtitulo>Prosseguir no YouTube</Subtitulo>
            </CardInfo>
            <CardInfo>
                <Texto>Esqueceu seu e-mail?</Texto>
                <Texto>Não está no seu computador? Use o modo visitante para fazer login com privacidade. Saiba mais sobre como usar o Modo visitante</Texto>
            <Subtexto>Ajuda Privacidade Termos</Subtexto>
            </CardInfo>
        </Card>
    )
}