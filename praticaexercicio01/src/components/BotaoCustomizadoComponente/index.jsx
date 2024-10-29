export const BotaoCustomizadoComponente = ({ funcao, cor, corFundo, nome, corAlerta, textoCor, fonte }) => {
    return (
        <div>
            <button onClick={funcao} style={{ color: cor, backgroundColor: corFundo}} >
                {nome}
            </button>
        </div>
    )
}