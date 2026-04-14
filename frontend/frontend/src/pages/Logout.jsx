import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
  localStorage.clear();

  setTimeout(() => {
    navigate("/");
  }, 2000);
}, [navigate]); 

  return <h2>Logging out...</h2>;
}export default Logout;