import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/DeleteProduct.module.css";

function DeleteProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:8080/product/delete/${id}`, {
      method: "DELETE"
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);
        navigate("/view-products"); // React way (better than window.location)
      });
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        ElectroZone - Admin Dashboard
      </header>

      <div className={styles.dashboardContainer}>
        <div className={styles.welcomeBox}>

          <div className={styles.welcomeMsg}>
            Are you sure you want to delete product ID:{" "}
            <strong>{id}</strong>?
          </div>

          <button
  onClick={handleDelete}
  className={`${styles.button} ${styles.deleteBtn}`}
>
  Yes, Delete
</button>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Admin Access Panel.
      </footer>
    </div>
  );
}

export default DeleteProduct;