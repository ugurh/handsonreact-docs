import { useState } from "react";

const SigninForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSend = (event) => {
    event.preventDefault();
    console.log(username + ", " + password);
  };

  return (
    <form onSubmit={handleSend}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SigninForm;
