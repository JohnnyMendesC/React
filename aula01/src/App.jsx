
function ComponenteReutilizavel(props) { //todo componente pode receber (props) = propriedades
  return (
    <div>
      <span>Card de pokemon {props.name}</span>
    </div>
  )
}
function ComponenteReutilizavel2({name}) { //também pode passar assim
  return (
    <div>
      <span>Card de pokemon {name}</span>
    </div>
  )
}
function App() {

  return (
    <div>
      <span>Ola!</span>
      <ComponenteReutilizavel name="Pikachu"/>
      <ComponenteReutilizavel name="Bulbasaur"/>
      <ComponenteReutilizavel name="Squirtle"/>
      <ComponenteReutilizavel name="Charmander"/>
      <ComponenteReutilizavel2 name="Cyndaquil"/>
    </div>
  )
}

export default App
