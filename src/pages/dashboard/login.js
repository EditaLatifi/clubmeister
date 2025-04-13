// pages/dashboard/login.js
import { useState } from 'react';
import axios from 'axios';

export default function DashboardLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/dashboard/login', {
        username,
        password,
      });
      setToken(data.token);
      alert('You are logged in! Token: ' + data.token);
    } catch (err) {
      alert('Login failed: ' + err.response?.data?.message || err.message);
    }
  };

  return (
    <div>
      <h1>Dashboard Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username: </label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="admin"
          />
        </div>
        <div>
          <label>Password: </label>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••"
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {token && <p>Your JWT: {token}</p>}
    </div>
  );
}
