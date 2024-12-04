import { useState } from "react";
import ToDoData from "./components/todo/toDoData.jsx";
import ToDoNew from "./components/todo/toDoNew.jsx";
import reactLogo from "./assets/react.svg";
import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/footer.jsx";

function App() {

  const [toDoList, setToDoList] = useState([]);
  function GetRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min + 1) + min);
  }


  const deleteBtn = (id) => {
    const updatedList = toDoList.filter((item) => item.id !== id);
    setToDoList(updatedList);
  };

  const addNewToDo = (name) => {
    const newToDo = {
      id: GetRandomArbitrary(1, 10000),
      name: name,
    };
    setToDoList([...toDoList, newToDo]);
  };
  return (
    <>
      <Header />
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
        <ToDoNew addNewToDo={addNewToDo} />
        {toDoList.length > 0 ? (
          <ToDoData toDoList={toDoList} deleteBtn={deleteBtn} />
        ) : (
          <a className="logo" href="https://react.dev/" target="_blank">
            <img src={reactLogo} className="logo_react" />
          </a>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;
