import './App.css';

function App() {

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Logged in!");
  }

  return (
    <>
      <header className="header" style={{ textAlign: "center" }}>
        <h1 className="company-title">Poncho Corp</h1>
      </header>
      <h2 className="title">Login</h2>

      <form onSubmit={handleLogin} className="login-form">
        <div className="login-row">
          <label htmlFor="username-input">Username:</label>
          <input id="username-input" type="text" placeholder="username" required />
        </div>
        <div className="login-row">
          <label htmlFor="password-input">Password:</label>
          <input id="password-input" type="password" required />
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

export default App;
