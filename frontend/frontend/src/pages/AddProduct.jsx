import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/AddProduct.module.css";

function AddProduct() {

  const navigate = useNavigate();

  const [product, setProduct] = useState({
    productId: 0,
    name: "",
    category: "",
    price: 0,
    quantity: 0
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProduct({
      ...product,
      [name]: ["productId", "price", "quantity"].includes(name)
        ? Number(value)
        : value
    });
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/product/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(product)
    })
      .then(res => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.text();
      })
      .then(msg => {
        alert(msg);
        navigate("/admin-dashboard");
      })
      .catch(err => alert("Error: " + err.message));
  };

  return (
    <div>

      <header className={styles.header}>
        ElectroZone - Admin Dashboard
      </header>

      <div className={styles.dashboardContainer}>
        <div className={styles.welcomeBox}>

          <div className={styles.welcomeMsg}>
            Add a New Product
          </div>

          <label>Product Code:</label>
          <input name="productId" onChange={handleChange} />

          <label>Product Name:</label>
          <input name="name" onChange={handleChange} />

          <label>Product Category:</label>
          <input name="category" onChange={handleChange} />

          <label>Product Price:</label>
          <input name="price" onChange={handleChange} />

          <label>Product Quantity:</label>
          <input name="quantity" onChange={handleChange} />

          <button onClick={handleSubmit} className={styles.button}>
            Add Product
          </button>

        </div>
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. Admin Access Panel.
      </footer>

    </div>
  );
}

export default AddProduct;