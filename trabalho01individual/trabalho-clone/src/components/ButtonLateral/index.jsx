import { EstiloDeBotao } from "./style"

export const ButtonLateral = ({title, handleFunction, corDeFundo, corDaLetra, borda, raioDaBorda, alturaBotao, larguraBotao, tamanhoFonte}) => {
  
  return (
    <EstiloDeBotao 
    onClick={handleFunction} 
    style={{ backgroundColor: corDeFundo, color: corDaLetra, width: larguraBotao, height: alturaBotao,
      fontSize: tamanhoFonte, border: borda, borderRadius: raioDaBorda }}
    >
      {title}      
    </EstiloDeBotao>
  )
}