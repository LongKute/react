import { useState } from "react";

const TodoNew = (props) => {
  const [valueInput, setValueInput] = useState("");
const {addNewToDo} = props

  const handleClick = () => {
    addNewToDo(valueInput)
    setValueInput("")
  };


  const handleChange = (name) => {
    //target like pointer to onchange handlechange
    setValueInput(name);
    // console.log(name);
    
  };
  return (
    <div className="todo-new">
      <input
        type="text"
        onChange={(event) => handleChange(event.target.value)}
        value={valueInput}  
        className="todo-input"
      />
      <button className="todoBtn" onClick={handleClick}>
        Add
      </button>
      <div>my text input is = {valueInput}</div>
    </div>
  );
};

export default TodoNew;
