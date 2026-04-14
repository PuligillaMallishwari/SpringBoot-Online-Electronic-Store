import { useLocation, useNavigate } from "react-router-dom";
import styles from "../styles/OrderConfirmed.module.css";

function OrderConfirmed() {
  const location = useLocation();
  const navigate = useNavigate();

  const customerName = location.state?.customerName || "Guest";
  const finalPrice = location.state?.finalPrice || 0;

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        ElectroZone - Order Confirmation
      </header>

      <div className={styles.container}>
        <div className={styles.contentBox}>

          <div className={styles.welcomeText}>
            Hello {customerName}
          </div>

          <div className={styles.infoText}>
            <strong>You Have Charged : {finalPrice}</strong>
            <br /><br />
            <strong>Your Order is Placed Successfully</strong>
          </div>

          <button
            className={styles.button}
            onClick={() => navigate("/customer-home")}
          >
            View Product
          </button>

          <button
            className={styles.button}
            onClick={() => navigate("/logout")}
          >
            Logout
          </button>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Customer Access Only.
      </footer>

    </div>
  );
}

export default OrderConfirmed;