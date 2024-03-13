import { useState, useRef } from 'react'

type Task = {
  id: number,
  name: string,
}

function App() {
  const inputRef = useRef(null);
  const [list, setList] = useState<Task[]>([]);

  function handlerAdd() {
    const currentValue = inputRef.current.value;
    if (currentValue !== '') {
      const newTask: Task = {
        id: Math.floor(Math.random() * 1000),
        name: currentValue
      }
      setList([...list, newTask])
      inputRef.current.value = '';
      // function add item in list
    }    
  }

  function handlerRemoveTask(id: number) {
    return function () {
      const newList = list.filter(task => task.id !== id)
      setList(newList);
      //action remove item
    }
  }

  return (
    <>
      <h1>Todo List</h1>
      <p>This is todo list create in 20min</p>
      <input ref={inputRef} />
      <button
        onClick={handlerAdd}
      >Add</button>
      <ul>
      {list.map(task => {
        return (
          <li key={`${task.id}`}>
            {task.name}
            <button onClick={handlerRemoveTask(task.id)}>
              Remove
            </button>
          </li>
        )
      })}
      </ul>
    </>
  )
}

export default App
