import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CustomerProducts.module.css";

function CustomerProductList() {
  const [products, setProducts] = useState([]);

  const adminName = localStorage.getItem("adminName") || "Admin";

  useEffect(() => {
    fetch("http://localhost:8080/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        ElectroZone - Product List
      </header>

      <div className={styles.container}>

        <div className={styles.greeting}>
          Hello {adminName}, here are your product details
        </div>

        {products.length === 0 ? (
          <div className={styles.noProducts}>
            No Products Available
          </div>
        ) : (
          products.map((p) => (
            <div className={styles.productCard} key={p.productId}>

              <div className={styles.productInfo}>
                {p.productId} | {p.name} | {p.category} | {p.price} | {p.quantity}
              </div>

              <div className={styles.buttonGroup}>
                <Link to={`/edit/${p.productId}`} className={`${styles.btn} ${styles.edit}`}>
                  Edit
                </Link>

                <Link to={`/delete/${p.productId}`} className={`${styles.btn} ${styles.delete}`}>
                  Delete
                </Link>
              </div>

            </div>
          ))
        )}

        <div className={styles.footerActions}>
          <Link to="/logout" className={`${styles.btn} ${styles.logout}`}>
            Logout
          </Link>
        </div>

      </div>

     
    </div>
  );
}

export default CustomerProductList;