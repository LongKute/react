const TodoData = (props) => {
  const { name, age, data } = props;

  console.log("check point: ", props);

  return ( 
    <div className="todo-data">
      <p>my name is = {name}</p>
      <div>learn react</div>
      <div>watching youtube</div>
      <div>`{JSON.stringify(props.toDoList)}`</div>
    </div>
  );
};
export default TodoData;
