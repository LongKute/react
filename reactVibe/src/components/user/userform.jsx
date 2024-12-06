import { Input, Button } from "antd";
import { useState } from "react";



const Userform = () => {
    // variable Username, email, password, phone number use useState
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
    // click create user
  const HandleCreateUserBtn = () => {
    console.log("Create User:" ,userName, email, passWord, phoneNumber);s
  }
  return (
    <div className="user-form" style={{ margin: "20px 0" }}>
      <div style={{ display: "flex", gap: "15px", flexDirection: "column" }}>
        <div>
          <span>UserName</span>
          <Input
            placeholder="Username"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Email</span>
          <Input
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Password</span>
          <Input.Password
            placeholder="Password"
            value={passWord}
            onChange={(event) => {
              setPassWord(event.target.value);
            }}
          />
        </div>
        <div>
          <span>Phone number</span>
          <Input
            placeholder="Phone number"
            value={phoneNumber}
            onChange={(event) => {
              setPhoneNumber(event.target.value);
            }}
          />
        </div>
        <div>
          <Button type="primary" onClick={HandleCreateUserBtn}>Create User</Button>
        </div>
      </div>
    </div>
  );
};
export default Userform;
