import { Link } from "react-router-dom";
import styles from "../styles/AdminHome.module.css";

function AdminHome() {

  const adminName = localStorage.getItem("adminName") || "Admin";

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        <h1>ElectroZone - Admin Dashboard</h1>
      </header>

      <div className={styles.dashboardContainer}>
        <div className={styles.dashboardBox}>

          <h2>Welcome, Mr/Ms. {adminName}!</h2>

          <Link to="/add-product" className={styles.link}>
            Add Product
          </Link>

          <br />

          <Link to="/view-products" className={styles.link}>
            View Product
          </Link>

          <br />

          <Link to="/" className={styles.link}>
            Logout
          </Link>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone | Admin Panel
      </footer>

    </div>
  );
}

export default AdminHome;