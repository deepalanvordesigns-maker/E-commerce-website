// const BASE_URL = "http://localhost:5000/api";
const BASE_URL = "https://e-commerce-backend-p8fm.onrender.com/api";

export async function placeOrderAPI(orderData) {
  const res = await fetch(`${BASE_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(orderData),
  });
  if (!res.ok) throw new Error("Failed to place order");
  return res.json();
}

export async function signupAPI(data) {
  const res = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Signup failed");
  return result;
}

export async function loginAPI(data) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await res.json();
  if (!res.ok) throw new Error(result.message || "Login failed");
  return result;
}
export async function getOrderAPI(orderId) {
  const res = await fetch(`${BASE_URL}/orders/${orderId}`);
  if (!res.ok) throw new Error("Order not found");
  return res.json();
}
export async function getAllOrdersAPI() {
  const res = await fetch(`${BASE_URL}/orders`);
  if (!res.ok) throw new Error("Failed to fetch orders");
  return res.json();
}

export async function cancelOrderAPI(orderId) {
  const res = await fetch(`${BASE_URL}/orders/${orderId}/cancel`, {
    method: "PATCH",
  });
  if (!res.ok) throw new Error("Failed to cancel order");
  return res.json();
}