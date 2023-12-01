import { useState } from "react";

function createUser() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button type="submit">Create</button>
    </form>
  );
}

export default createUser;
