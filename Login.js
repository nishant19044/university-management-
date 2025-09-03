// import React, {useState} from 'react';
// import api, { setAuthToken } from '../api';
// export default function Login({onLogin}){
//   const [form, setForm] = useState({username:'', password:''});
//   const [err, setErr] = useState('');
//   const submit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await api.post('/auth/login', form);
//       const token = res.data.token;
//       setAuthToken(token);
//       const payload = JSON.parse(atob(token.split('.')[1]));
//       const roles = payload.roles || [];
//       onLogin(token, roles[0] || null);
//     } catch (e) {
//       setErr('Login failed');
//     }
//   };
//   return (<div>
//     <h3>Login</h3>
//     {err && <div style={{color:'red'}}>{err}</div>}
//     <form onSubmit={submit}>
//       <input placeholder="username" value={form.username} onChange={e=>setForm({...form, username:e.target.value})} />
//       <input placeholder="password" type="password" value={form.password} onChange={e=>setForm({...form, password:e.target.value})} />
//       <button type="submit">Login</button>
//     </form>
//   </div>);
// }

import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Replace with your backend API call
    console.log("Username:", username, "Password:", password);
    alert(`Login attempted with username: ${username}`);
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>University Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
