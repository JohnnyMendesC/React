import { EstiloDeBotao } from "./style"

export const Button = ({title, handleFunction, corDeFundo, corDaLetra, larguraBotao}) => {
  
  return (
    <EstiloDeBotao 
    onClick={handleFunction} 
    style={{ backgroundColor: corDeFundo, color: corDaLetra, width: larguraBotao }}
    >
      {title}      
    </EstiloDeBotao>
  )
}