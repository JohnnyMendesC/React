import { ButtonComponents } from "../ButtonComponents"

export const PropsEspecial = ({children, nome}) => {
    return (
        <div>     
            <p> 
                Props {nome} onde voce pode reutilizar
            </p>
            {children}
        </div>
    )
}