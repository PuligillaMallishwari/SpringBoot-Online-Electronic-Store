import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CustomerHome.module.css";

function CustomerHome() {
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("customerName");
    console.log("Stored Name:", name);
    setCustomerName(name);
  }, []);

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        ElectroZone - Customer Portal
      </header>

      <div className={styles.container}>
        <div className={styles.contentBox}>

          <div className={styles.welcomeText}>
            {customerName ? `Welcome Mr/Ms. ${customerName}` : "Welcome"}
          </div>

          <Link to="/productPage" className={styles.link}>
            View Products
          </Link>

         

          <Link to="/logout" className={styles.link}>
            Logout
          </Link>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Customer Access Only.
      </footer>

    </div>
  );
}

export default CustomerHome;