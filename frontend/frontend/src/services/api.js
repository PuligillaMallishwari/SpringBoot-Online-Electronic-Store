const BASE_URL = "http://localhost:8080";

// ADMIN LOGIN
export const adminLogin = (username, password) => {
  return fetch(`${BASE_URL}/admin/login?username=${username}&password=${password}`)
    .then(res => res.json());
};

// CUSTOMER LOGIN
export const customerLogin = (email, password) => {
  return fetch(`${BASE_URL}/customer/login?email=${email}&password=${password}`)
    .then(res => res.text());
};

// GET PRODUCTS
export const getProducts = () => {
  return fetch(`${BASE_URL}/product/all`)
    .then(res => res.json());
};

// ADD PRODUCT
export const addProduct = (product) => {
  return fetch(`${BASE_URL}/product/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  }).then(res => res.text());
};

// PLACE ORDER
export const placeOrder = (order) => {
  return fetch(`${BASE_URL}/order/place`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(order)
  }).then(res => res.text());
};