import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // Handle the login logic here, such as sending a request to the server.
    // You can use libraries like Axios to make API requests.

    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username</label>
          <input type="text" value={username} onChange={handleUsernameChange} />
        </div>
        <div>
          <label>Password</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
