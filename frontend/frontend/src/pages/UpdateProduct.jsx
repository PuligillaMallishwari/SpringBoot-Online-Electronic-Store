
import { Link } from "react-router-dom";
import styles from "../styles/UpdateProduct.module.css";
function UpdateProduct() {
  return (
    <div className={styles.page}>

      <header className={styles.header}>
        ElectroZone - Admin Home
      </header>

      <div className={styles.container}>
        <div className={styles.contentBox}>
          
          <h2 className={styles.title}>
            Product Updated Successfully ✅
          </h2>
          
          <Link to="/add-product" className={styles.button}>
            Add Product
          </Link>

          <Link to="/view-products" className={styles.button}>
            View Product
          </Link>

          <Link
            to="/logout"
            className={`${styles.button} ${styles.logout}`}
          >
            Logout
          </Link>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Admin Access Only.
      </footer>

    </div>
  );
}

export default UpdateProduct;