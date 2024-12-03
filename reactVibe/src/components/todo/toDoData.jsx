const TodoData = (props) => {
  const { name, age, data, toDoList } = props;
  console.log("check point: ", props);



  return ( 
    <div className="todo-data">
        {toDoList.map((item, index) => {
            // console.log(">>> check: ", item, index);
            return (<div>
                {item.name}
                <button>Delete</button>
            </div>)
        })}
     
      <div>`{JSON.stringify(props.toDoList)}`</div>
    </div>
  );
};
export default TodoData;
