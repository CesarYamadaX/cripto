import { useState } from 'react';

function Register() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    let message = await fetch('http://127.0.0.1:5000/login', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          username: username,
          password: password
      })
    })
    message = await message.json();
    console.log(message);
  }

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <h1 className="company-title">Poncho Corp</h1>
      </header>
      <h2 className="title">REGISTER</h2>

      <form onSubmit={handleLogin} className="login-form">
        <div className="login-row">
          <label htmlFor="username-input">Username:</label>
          <input id="username-input" type="text" placeholder="username" required onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="login-row">
          <label htmlFor="password-input">Password:</label>
          <input id="password-input" type="password" required onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button className="login-btn">Login</button>
      </form>

      <div className="extra-links" style={{ display: "flex", justifyContent: "space-between", marginTop: "10px", fontSize: "0.9em" }}>
        <p style={{ cursor: "pointer", color: "#555", marginLeft: "10px" }}>Crear nuevo usuario</p>
        <p style={{ cursor: "pointer", color: "#555", marginRight: "10px" }}>Recuperar contraseña</p>
      </div>
    </>
  );
}

export default Register;