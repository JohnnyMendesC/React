import { BarraPesquisaInput } from "./style"

export const BarraPesquisaInputField = ({ propsplaceholder, propstype, cor, tamanhoFonte, borda, raioDaBorda, comprimento, altura }) => {

  return (
    <BarraPesquisaInput
      placeholder={propsplaceholder}
      type={propstype}
      style={
        {
          border: borda,
          borderRadius: raioDaBorda,
          width: comprimento,
          height: altura,
          color: cor,
          fontSize: tamanhoFonte
        }
      }
    />
  )
}