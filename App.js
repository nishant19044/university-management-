import React, {useState} from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
export default function App(){
  const [token, setToken] = useState(null);
  const [role, setRole] = useState(null);
  return (
    <div style={{padding:20}}>
      <h1>University Management</h1>
      {!token ? <Login onLogin={(t,r)=>{setToken(t); setRole(r);}} /> : <Dashboard token={token} role={role} onLogout={()=>{setToken(null); setRole(null);}} />}
    </div>
  );
}
