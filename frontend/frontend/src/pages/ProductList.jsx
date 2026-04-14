import { useEffect, useState } from "react";
import styles from "../styles/ProductList.module.css";
import { Link } from "react-router-dom";
function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/product/all")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error(err));
  }, []);

  return (
  <div className={styles.container}>
    <h2 className={styles.title}> these are the  available Products</h2>

    {products.length === 0 ? (
      <div className={styles.noProducts}>No Products Available</div>
    ) : (
      products.map(p => (
        <div className={styles.productCard} key={p.productId}>
          <div className={styles.productInfo}>
            {p.productId} | {p.name} | {p.category} | ₹{p.price} | Qty: {p.quantity}

            <a href={`/buy/${p.productId}`} className={styles.buyButton}>
              Buy
            </a>
          </div>
        </div>
      ))
    )}

    <Link to="/logout" className={styles.logout}>
      Logout
    </Link>
  </div>

        );
      
     
  
}

export default ProductList;