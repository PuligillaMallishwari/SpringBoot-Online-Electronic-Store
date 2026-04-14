import { useState } from "react";
import styles from "../styles/CustomerRegister.module.css";

function CustomerRegister() {

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    password: "",
    addr: "",
    phn: ""
  });

  const handleChange = (e) => {
    setCustomer({
      ...customer,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = () => {
    const requestData = {
      name: customer.name,
      email: customer.email,
      password: customer.password
    };

    fetch("http://localhost:8080/customer/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(requestData)
    })
    .then(res => res.text())
    .then(msg => alert(msg))
    .catch(err => console.error("Error:", err));
  };

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        ElectroZone - Customer Portal
      </header>

      <div className={styles.container}>
        <div className={styles.formBox}>

          <h1>Customer Registration</h1>

          <div className={styles.inputGroup}>
            <input type="text" name="name" onChange={handleChange} required />
            <label>UserName</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="email" name="email" onChange={handleChange} required />
            <label>Mail-ID</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="password" name="password" onChange={handleChange} required />
            <label>Password</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="text" name="addr" onChange={handleChange} />
            <label>Address</label>
          </div>

          <div className={styles.inputGroup}>
            <input type="text" name="phn" onChange={handleChange} />
            <label>Mobile</label>
          </div>

          <button className={styles.button} onClick={handleRegister}>
            Register
          </button>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Customer Access Only.
      </footer>

    </div>
  );
}

export default CustomerRegister;