import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { Container, ToDoList, Input, Button, ListItem, Trash, Check, ListaVazia } from './styles'

function App() {
  const [list, setList] = useState([]);
  const [task, setTask] = useState('');

  function inputMudou(event) {
    setTask(event.target.value)
    console.log(task)
  }

  function cliqueiNoBotao() {
    if(task) {
    setList([...list, { id: uuid(), task, finished: false }])
    }

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
          {list.length > 0 ? (
            list.map(item => (
              <ListItem isFinished={item.finished} key={item.id}>
                <Check onClick={() => concluirTarefa(item.id)} />
                <li> {item.task}</li>
                <Trash onClick={() => excluirTarefa(item.id)} />
              </ListItem>
            ))
          ) : (<ListaVazia>Não possui itens na lista</ListaVazia>)
          }
        </ul>
      </ToDoList>
    </Container>
  )
}

export default App
