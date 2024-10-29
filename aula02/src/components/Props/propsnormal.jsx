import { ButtonComponents } from "../ButtonComponents"

export const PropsNormal = ({children, nome}) => {
    return (
        <div>
            <ButtonComponents 
                nome="Botao no ContainerText"
            />            
            <p> 
                Props {nome}
            </p>
            {children}
        </div>
    )
}