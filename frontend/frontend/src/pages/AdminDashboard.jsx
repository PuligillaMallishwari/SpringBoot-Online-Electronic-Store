import { Link } from "react-router-dom";
import styles from "../styles/AdminDashboard.module.css";

function AdminDashboard() {

  const adminName = localStorage.getItem("adminName") || "Admin";

  return (
    <div>

      <header className={styles.header}>
        ElectroZone - Admin Dashboard
      </header>

      <div className={styles.dashboardContainer}>
        <div className={styles.welcomeBox}>

          <div className={styles.welcomeMsg}>
            <span style={{ fontWeight: "600" }}>
              {adminName} Product Details Added Successfully
            </span>
            <br /><br />
          </div>

          <div className={styles.loginLinks}>

            <Link to="/add-product" className={styles.link}>
              Add Product
            </Link>
            <br />

            <Link to="/products" className={styles.link}>
              View Products
            </Link>
            <br />

            <Link to="/logout" className={`${styles.buttonLink} ${styles.logout}`}>
              Logout
            </Link>

          </div>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Admin Access Panel.
      </footer>

    </div>
  );
}

export default AdminDashboard;