import { EstiloDeBotao } from "./style"

export const Button = ({title, handleFunction, corDeFundo, corDaLetra, larguraBotao, tamanhoFonte}) => {
  
  return (
    <EstiloDeBotao 
    onClick={handleFunction} 
    style={{ backgroundColor: corDeFundo, color: corDaLetra, width: larguraBotao, 
      fontSize: tamanhoFonte }}
    >
      {title}      
    </EstiloDeBotao>
  )
}