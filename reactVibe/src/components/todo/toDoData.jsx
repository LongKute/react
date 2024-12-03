const TodoData = (props) => {
  const { toDoList } = props;
  console.log("check point: ", toDoList);



  return ( 
    <div className="todo-data">
        {toDoList.map((item, index) => {
            // console.log(">>> check: ", item, index);
            return (<div className="todo-item" key = {item.id}>
                {item.name}
                <button>Delete</button>
            </div>)
        })}
     
     
    </div>
  );
};
export default TodoData;
