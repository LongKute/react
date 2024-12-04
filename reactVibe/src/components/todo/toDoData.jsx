const TodoData = (props) => {
  const{ toDoList , deleteBtn} = props;
//   console.log(props.toDoList[1].id);
  
  
//   console.log("check point: ", toDoList);
//button with filter
const HandleClick = (id) => {
  deleteBtn(id)
  };
//button with filter end
  
  return (
    <div className="todo-data">
      {toDoList.map((item, index) => {
        // console.log(">>> check: ", item, index);
        return (
          <div className="todo-item" key={item.id}>
            {item.name}
            <button onClick={() => HandleClick(item.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default TodoData;
