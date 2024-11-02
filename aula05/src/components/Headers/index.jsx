import { useProps } from "../../hooks/useProps"

export const Headers = () => {

    const {email} = useProps();

  return (
    <div style={{
        display:'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
        <button>Home</button>
        <button>About</button>
        <button>Settings</button>
        <button>Carrinho</button>
        <p>Boas vindas {email}</p>
    </div>
  )
}
