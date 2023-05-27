import React, { useState } from 'react';
import './App.css';
import { useRef } from 'react'

export default function  ForgotPasswordScreen () {
    const urlRef = useRef(null)
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
        urlRef.current.href = '/forgot-password/';
        return;
      }
      // Strong password validation
      const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
      if (!strongPasswordRegex.test(newPassword)) {
          alert(
              'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one digit, and one special character.'
          );
          urlRef.current.href = '/forgot-password/';
          return;
      }
      urlRef.current.href = '/change-password/';
      return;
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
        
        <a ref={urlRef} className="link"><button onClick={handleChangePassword} className="button">Change</button></a>
      </div>
    );
  };