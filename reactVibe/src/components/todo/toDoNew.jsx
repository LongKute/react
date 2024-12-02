function handleClick() {
    alert("Hello")
}
function handleChange(name) {
    //target like pointer to onchange handlechange
    console.log(">>> handle Change: ", name);
    
}
const TodoNew = (props) => {
    console.log(">>> check point: ",props);
    
    return(
        <div className="todo-new">
            <input type="text"  onChange={(event) => handleChange(event.target.value)} className="todo-input"/>
            <button className="todoBtn" onClick={handleClick}>Add</button>
          </div>
    )
} 

export default TodoNew