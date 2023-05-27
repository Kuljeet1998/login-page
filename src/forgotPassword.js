import React, { useState } from 'react';
import './App.css';
import { useRef } from 'react'

export default function  ForgotPasswordScreen () {
    const favIconRef = useRef(null)
    const [email, setEmail] = useState('');
    const [newPassword, setNewPassword] = useState('');
    
    const handleEmailChange = (e) => {
      setEmail(e.target.value);
    };
  
    const handleNewPasswordChange = (e) => {
      setNewPassword(e.target.value);
    };
  
    const handleChangePassword = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Please enter a valid email address.');
          favIconRef.current.href = '/forgot-password/';
          return;
        }
        else{
            favIconRef.current.href = '/change-password/';
            return
        }
    };
    
    return (
      <div className="container">
        <h2>Forgot Password</h2>
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={handleEmailChange}
          className="input"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={handleNewPasswordChange}
          className="input"
        />
        
        <a ref={favIconRef} className="link"><button onClick={handleChangePassword} className="button">Change</button></a>
      </div>
    );
  };
//   href='/change-password/'