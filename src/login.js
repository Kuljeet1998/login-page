import React, { useState } from 'react';
import './App.css';
export default function SignInScreen() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const mockUserName = 'admin';
  const mockPassword = 'password';

  const handleSignIn = () => {
    if (!userName || !password) {
      alert('User Name and password cannot be blank.');
    } else if (userName !== mockUserName || password !== mockPassword) {
      alert('Invalid userid/password');
    } else {
      alert('Login is authenticated');
    }
  };


  return (
    <div className="container">
      <h2>Log In</h2>
      <input
        type="text"
        placeholder="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className="input"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input"
      />
      <button onClick={handleSignIn} className="button">Login</button>
      <a href="forgot-password/" className="link">
        Forgot password
      </a>
    </div>
  );
};
