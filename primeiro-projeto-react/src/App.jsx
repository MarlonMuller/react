import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';


function App() {
  const [list, setList] = useState([{id:uuid(), task:"Nada"}]);
  const [task, setTask] = useState('');


  function inputMudou(event) {
    setTask(event.target.value)
    console.log(task)
  }

  function cliqueiNoBotao() {
    setList([...list, {id:uuid(), task}])
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
