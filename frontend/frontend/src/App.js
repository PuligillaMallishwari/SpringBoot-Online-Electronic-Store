import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🔥 Import Home Page (your converted HTML)
import Home from "./pages/Home";

// Admin
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import AddProduct from "./pages/AddProduct";
import ProductList from "./pages/ProductList";
import EditProduct from "./pages/EditProduct";
import DeleteProduct from "./pages/DeleteProduct";
import UpdateProduct from "./pages/UpdateProduct";

// Customer
import CustomerLogin from "./pages/CustomerLogin";
import CustomerRegister from "./pages/CustomerRegister";
import CustomerHome from "./pages/CustomerHome";
import CustomerProductList from "./pages/CustomerProductList";
import BuyProduct from "./pages/BuyProduct";
import OrderConfirmed from "./pages/OrderConfirmed";
import Logout from"./pages/Logout";
import CustomerProductPage from"./pages/CustomerProductPage";
import AdminDashboard from "./pages/AdminDashboard";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ✅ Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Admin Routes */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-home" element={<AdminHome />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/view-products" element={<ProductList />} />
        <Route path="/products" element={<CustomerProductList />} />
        <Route path="/edit/:id" element={<EditProduct />} />
        <Route path="/delete/:id" element={<DeleteProduct />} />
        <Route path="/update-success" element={<UpdateProduct />} />
        <Route path="/logout" element={<Logout />} />
       <Route path="/admin-dashboard" element={<AdminDashboard />} />

        {/* Customer Routes */}
        <Route path="/customer-login" element={<CustomerLogin />} />
        <Route path="/customer-register" element={<CustomerRegister />} />
        <Route path="/customer-home" element={<CustomerHome />} />
        <Route path="/productPage" element={<CustomerProductPage />} />
        <Route path="/buy/:id" element={<BuyProduct />} />
        <Route path="/order-confirmed" element={<OrderConfirmed />} />
<Route path="/logout" element={<Logout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;