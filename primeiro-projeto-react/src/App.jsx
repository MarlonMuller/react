import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button } from './styles'

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada" }]);
  const [task, setTask] = useState('');


  function inputMudou(event) {
    setTask(event.target.value)
    console.log(task)
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task }])
  }




  // Retorna código HTML
  return (
    <Container>
      <ToDoList>
        <Input onChange={inputMudou} placeholder="O que tenho para fazer" />
        <Button onClick={cliqueiNoBotao}>Adicionar</Button>
        <ul>
          {
            list.map(item => (
              <li key={item.id}> {item.task}</li>
            ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
