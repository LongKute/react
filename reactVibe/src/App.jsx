
import { useState } from "react";
import ToDoData from "./components/todo/toDoData.jsx";
import ToDoNew from "./components/todo/toDoNew.jsx";
import reactLogo from "./assets/react.svg" 




function App() {
  // setInterval(() => {
  //   const randomId = parseInt(Math.random(0, 10000) * 10) 
  // console.log(randomId);
  // }, 2000);
  function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min) 
  }
  
  const [toDoList, setToDoList] = useState([
  ])
 
  const addNewToDo = (name) => {
    
    const newToDo = {
      id: getRandomArbitrary(1,10000),
      name: name
    }
    setToDoList([...toDoList, newToDo])

  }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <ToDoNew
      addNewToDo = {addNewToDo}
     
      />
      <ToDoData
      
      toDoList = {toDoList}
      />
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
   
}

export default App;
