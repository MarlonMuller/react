
function App() {
  const list = [{id:12345, task:"Levar o Nico para passear"}, {id:"123456", task:"Terminar as aulas de React no DevClub"}]

  //"Levar o Nico para passear", "Terminar as aulas de React no DevClub"

  function inputMudou (event) {
    console.log(event.target.value)
  }

  function cliqueiNoBotao() {
    console.log("Cliquei")
  }


  // Retorna código HTML
  return (
      <div>
        <input onChange={inputMudou} placeholder="O que tenho para fazer" />
        <button onClick={cliqueiNoBotao}>Adicionar</button>
        <ul>
          {
          list.map(item => (
            <li key={item.id}> {item.task}</li>
          ))
          }
        </ul>
      </div>
  )
}

export default App
