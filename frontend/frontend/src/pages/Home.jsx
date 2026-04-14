import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <div className={styles.page}>   {/* ✅ added wrapper */}

      <header className={styles.header}>
        <h1>Welcome to ElectroZone</h1>
        <p>Your one-stop shop for electronics</p>
      </header>

      <div className={styles.loginLinks}>
        <Link to="/admin-login">Admin Login</Link><br />
        <Link to="/customer-login">Customer Login</Link>
      </div>

      <div className={styles.gallery}>
        <img src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9" alt="Laptop" />
        <img src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8" alt="Headphones" />
        <img src="https://images.hindustantimes.com/img/2022/10/10/1600x900/techietech-tech-a1sLf9uceXM-unsplash_1665404138271_1665404156092_1665404156092.jpg" alt="Smartphone" />
        <img src="https://cdn.mos.cms.futurecdn.net/4wpKrH93D37dDPTisdqGy4.jpg" alt="Camera" />
        <img src="https://img.freepik.com/premium-photo/closeup-hand-using-realistic-smartwatch_573790-2032.jpg" alt="Smartwatch" />
      </div>

      <footer className={styles.footer}>
        © 2025 ElectroZone. All Rights Reserved.
      </footer>

    </div>
  );
}

export default Home;