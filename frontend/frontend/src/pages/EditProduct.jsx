import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../styles/EditProduct.module.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const adminName = localStorage.getItem("adminName") || "Admin";

  const [product, setProduct] = useState({
    productId: 0,
    name: "",
    category: "",
    price: 0,
    quantity: 0
  });

  useEffect(() => {
    fetch(`http://localhost:8080/product/id/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: ["price", "quantity"].includes(name)
        ? Number(value)
        : value
    });
  };

  const handleUpdate = () => {
    fetch("http://localhost:8080/product/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product)
    })
      .then(res => {
        if (!res.ok) throw new Error("Update failed");
        return res.text();
      })
      .then(msg => {
        alert(msg);
        navigate("/update-success");
      })
      .catch(err => alert("Error: " + err.message));
  };

 return (
  <div className={styles.page}>
    <header className={styles.header}>
      ElectroZone - Edit Product
    </header>

    <div className={styles.dashboardContainer}>
      <div className={styles.welcomeBox}>

        <div className={styles.welcomeMsg}>
          <strong>Hello {adminName} Please edit!!!</strong>
        </div>

        <label className={styles.label}>Product Price:</label>
        <input
          type="text"
          name="price"
          value={product.price}
          onChange={handleChange}
          className={styles.input}
        />

        <label className={styles.label}>Product Quantity:</label>
        <input
          type="text"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          className={styles.input}
        />

        <button
          onClick={handleUpdate}
          className={styles.updateBtn}
        >
          Update
        </button>

      </div>
    </div>

    <footer className={styles.footer}>
      © 2025 ElectroZone. Admin Panel.
    </footer>
  </div>
);
}

export default EditProduct;