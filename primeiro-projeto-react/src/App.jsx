import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { FcCheckmark, FcEmptyTrash } from "react-icons/fc";
import { Container, ToDoList, Input, Button, ListItem } from './styles'

function App() {
  const [list, setList] = useState([{ id: uuid(), task: "Nada", finished: true }]);
  const [task, setTask] = useState('');

  function inputMudou(event) {
    setTask(event.target.value)
    console.log(task)
  }

  function cliqueiNoBotao() {
    setList([...list, { id: uuid(), task, finished: false }])
  }

  function concluirTarefa(id) {
    const newList = list.map(item => (
      item.id === id ? { ...item, finished: !item.finished } : item
    ));

    setList(newList)
  }

  function excluirTarefa(id) {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
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
              <ListItem isFinished={item.finished} key={item.id}>
                <FcCheckmark onClick={() => concluirTarefa(item.id)} />
                <li> {item.task}</li>
                <FcEmptyTrash onClick={() => excluirTarefa(item.id)} />
              </ListItem>
            ))
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
