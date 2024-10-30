import { ButtonComponents } from "../ButtonComponents"

export const ContainerText = ({children, nome}) => {
    return (
        <div>
            <ButtonComponents 
                nome="Botao no ContainerText"
            />            
            <p> 
                Esse é o componente ContainerText {nome}
            </p>
            {children}
        </div>
    )
}