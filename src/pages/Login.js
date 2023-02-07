import React, { useState } from 'react';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    const hardcodedEmail = 'admin@example.com';
    const hardcodedPassword = 'secret';

    if (email === hardcodedEmail && password === hardcodedPassword) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
      setAuth({ token: true });
    } else {
      console.log('Invalid email or password');
    }
  };

  return (
    <form>
      <label>
        email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="button" onClick={handleLogin}>
        Submit
      </button>
    </form>
  );
};

export default Login;
