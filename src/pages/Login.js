// File: Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignedIn, setIsSignedIn] = useState(null)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Set the username and password in local storage if they haven't already been set
    // if (!localStorage.getItem('username')) {
    //   localStorage.setItem('username', 'xhelo');
    // }
    // if (!localStorage.getItem('password')) {
    //   localStorage.setItem('password', '12345');
    // }
  
    // const storedUsername = localStorage.getItem('username');
    // const storedPassword = localStorage.getItem('password');
    // if (username === storedUsername && password === storedPassword) {
    //   navigate('/home');
    // } else {
    //   alert('Incorrect username or password. Please try again.');
    // }
    // const signin = () => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        setIsSignedIn(true);
        navigate('/home');
      //};
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <br />
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <br />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
