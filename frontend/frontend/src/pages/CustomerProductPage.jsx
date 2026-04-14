import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/CustomerProductPage.module.css";

function CustomerProductPage() {
  const [products, setProducts] = useState([]);
  const [customer, setCustomer] = useState({ name: "" });

  useEffect(() => {
    fetch("http://localhost:8080/product/all")
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .catch(() => setProducts([]));

    fetch("http://localhost:8080/customer/all")
      .then((res) => res.json())
      .then((data) =>
        setCustomer(Array.isArray(data) ? data[0] : data)
      )
      .catch(() => setCustomer({ name: "Guest" }));
  }, []);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        ElectroZone - Products
      </header>

      <div className={styles.container}>
        <div className={styles.contentBox}>

          <div className={styles.helloMessage}>
            Hello {customer?.name || "Guest"} these are the Products available
          </div>

          {products.length > 0 ? (
            products.map((pb) => (
              <div className={styles.productDetails} key={pb.productId}>
                {pb.productId} | {pb.name} | {pb.category} | {pb.price} | {pb.quantity}

                <a
                  href={`/buy/${pb.productId}`}
                  className={styles.buyButton}
                >
                  Buy
                </a>
              </div>
            ))
          ) : (
            <p>No products available</p>
          )}

          <Link to="/logout" className={styles.logout}>
            Logout
          </Link>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. All rights reserved.
      </footer>
    </div>
  );
}

export default CustomerProductPage;