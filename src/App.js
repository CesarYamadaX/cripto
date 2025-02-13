import './App.css';

function App() {

  const handleLogin = (e) => {
    e.preventDefault();

    alert("Logged in!");
  }

  return (
    <>
      <h1 className="title">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-row">
          <label for="username-input">Username:</label>
          <input id="username-input" type="text" placeholder="username" required/>
        </div>
        <div className="login-row">
          <label for="password-input">Password:</label>
          <input id="password-input" type="password" required/>
        </div>
        <button className="login-btn">Login</button>
      </form>
    </>
  );
}

export default App;
