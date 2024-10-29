
function ComponenteReutilizavel({children}) { //todo componente pode receber (props) = propriedades
  return (
    <div>
      <p>Card de pokemon antes</p>
      {children}
      <p>Card de pokemon depois</p>
    </div>
  )
}

function App() {

  return (
    <div>
      <ComponenteReutilizavel>
      <span>Ola!</span>
      </ComponenteReutilizavel>
    </div>
  )
}

export default App
