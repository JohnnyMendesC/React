import { EstiloDeInput } from "./style"

export const InputField = ({propsplaceholder, propstype}) => {

  return (
    <EstiloDeInput
      placeholder={propsplaceholder}
      type={propstype}
     />
  )
}