import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AdminLogin.module.css";  // ✅ FIXED

function AdminLogin() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch(`http://localhost:8080/admin/login?username=${username}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        if (data) {
          localStorage.setItem("adminName", username);

          alert("Login Success");
          navigate("/admin-home");
        } else {
          alert("Invalid");
        }
      });
  };

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1>ElectroZone - Admin Portal</h1>
      </header>

      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>

          <h2>Admin Login</h2>

          <label>UserName:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button onClick={handleLogin} className={styles.button}>
            Login
          </button>

          <center>
            <br />
            <a href="/" className={styles.homeLink}>Home Page</a>
          </center>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Admin Access Only.
      </footer>

    </div>
  );
}

export default AdminLogin;