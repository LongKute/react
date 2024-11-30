import "./style.css"
const MyComponent = () => {
    // const long = "longkute"
    // const long = 25
    // const long = true
    // const long = undefined
    // const long = null
    // // array
    const long = [1,2,3]
    // const long = {
    //     name: "longkute",
    //     age: 24
    // }

  //Fragment
  return (
    <>
      <div>Hello, {JSON.stringify(long)}</div> 
      <div>{console.log("hello, Longkute")}</div>
      <div className="child"
      style={{backgroundColor:"Black" , borderRadius:"10px"}}
      >Nice</div>
    </>
  );
};

export default MyComponent;
