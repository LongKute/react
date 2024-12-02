import reactLogo  from "./assets/react.svg";
import TodoData from "./components/todo/toDoData";

import TodoNew from "./components/todo/toDoNew";




function App() {
  // const newtodo = {
  //   name: "Longkute",
  //   age: 25,
  //   address: {
  //     country: VietNam
  //   }
  // }
  return (
    <div className="todo-container">
      <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData/>
      <div className="todo-image">
        <img src={reactLogo} className="logo" />
      </div>
    </div>
  )
  
}

export default App
