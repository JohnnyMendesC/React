import { ButtonComponents } from "../ButtonComponents"

export const AlertaComponente = ({alerta, nomeAlert}) => {
    return (
        <div>
            <ButtonComponents
            nome={nomeAlert}
            funcao={alerta}
            />
        </div>
    )
}