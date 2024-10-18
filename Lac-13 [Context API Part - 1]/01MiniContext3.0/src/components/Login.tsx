import { useState } from "react";
import { useUserContext } from "../context/userContext";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPwd, setUserPwd] = useState("");

  const { setUserData } = useUserContext();
  function handleUserLogin() {
    setUserData({ name: userName, password: userPwd });
  }
  return (
    <div>
      <p>Login</p>
      <input
        type="text"
        placeholder="username"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <input
        type="password"
        placeholder="password"
        value={userPwd}
        onChange={(event) => setUserPwd(event.target.value)}
      />
      <button onClick={handleUserLogin}>submit</button>
    </div>
  );
};

export default Login;
