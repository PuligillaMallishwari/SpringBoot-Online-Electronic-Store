import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/BuyProduct.module.css";

function BuyProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [customerName, setCustomerName] = useState("");

  useEffect(() => {
    // Product fetch
    fetch(`http://localhost:8080/product/id/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error("Product fetch error:", err));

    // Customer fetch
    fetch("http://localhost:8080/customer/all")
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setCustomerName(data[0]?.name);
          setCustomerId(data[0]?.customerId);
        } else {
          setCustomerName(data.name);
          setCustomerId(data.customerId);
        }
      })
      .catch(err => console.error("Customer fetch error:", err));

  }, [id]);

  const handleBuy = () => {
    if (!quantity || quantity <= 0) {
      alert("Enter valid quantity");
      return;
    }

    if (Number(quantity) > product.quantity) {
      alert("Insufficient stock");
      return;
    }

    const totalPrice = product.price * Number(quantity);

    fetch("http://localhost:8080/order/place", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        productId: product.productId,
        quantity: Number(quantity),
        customerId: Number(customerId)
      })
    })
      .then(res => res.text())
      .then(msg => {
        alert(msg);

        navigate("/order-confirmed", {
          state: {
            customerName,
            finalPrice: totalPrice
          }
        });
      })
      .catch(err => {
        console.error(err);
        alert("Buy failed: " + err.message);
      });
  };

  if (!product) {
    return <h3 className={styles.loading}>Loading...</h3>;
  }

  return (
    <div className={styles.page}>

      <header className={styles.header}>
        ElectroZone - Buy Product
      </header>

      <div className={styles.container}>
        <div className={styles.contentBox}>

          <div className={styles.welcomeText}>
            Buy Products!!!
          </div>

          <label className={styles.label}>Product ID :
          </label>
          <input value={product.productId} readOnly className={styles.input} />

          <label className={styles.label}>Product Name :</label>
          <input value={product.name} readOnly className={styles.input} />

          <label className={styles.label}>Product Category :</label>
          <input value={product.category} readOnly className={styles.input} />

          <label className={styles.label}>Product Price :</label>
          <input value={product.price} readOnly className={styles.input} />

          <label className={styles.label}>Available Quantity :</label>
          <input value={product.quantity} readOnly className={styles.input} />

          <label className={styles.label}>Enter Quantity :</label>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className={styles.input}
          />

          <button onClick={handleBuy} className={styles.button}>
            Buy
          </button>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Customer Panel.
      </footer>

    </div>
  );
}

export default BuyProduct;