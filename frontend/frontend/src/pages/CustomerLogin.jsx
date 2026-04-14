import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CustomerLogin.module.css";

function CustomerLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    fetch(`http://localhost:8080/customer/login?email=${username}&password=${password}`)
      .then(res => res.json())
      .then(data => {
        console.log("Data:", data);

        if (data) {
          localStorage.setItem("customerName", data.name);

          alert("Login Success");
          window.location.href = "/customer-home";
        } else {
          alert("Invalid Credentials");
        }
      })
      .catch(err => console.error("Login Error:", err));
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        ElectroZone - Customer Portal
      </header>

      <div className={styles.loginContainer}>
        <div className={styles.loginBox}>
          <h2>Customer Login</h2>

          <input
            type="text"
            placeholder="Enter Email"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>
            Login
          </button>

          <div className={styles.links}>
            <Link to="/customer-register">
              New Customer? Register Here
            </Link>
          </div>
        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Customer Access Only.
      </footer>
    </div>
  );
}

export default CustomerLogin;