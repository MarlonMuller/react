import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  const [list, setList] = useState([{id:uuid(), task:"Nada"}]);

  function inputMudou(event) {
    console.log(event.target.value)

    setList([{id:uuid(), task:event.target.value}])
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
