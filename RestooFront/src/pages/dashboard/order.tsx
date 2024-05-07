import React, { useState, useEffect } from "react";
import Pagination from "../../components/foodList/pagination";
import OrderData from "../../components/dashboard2/orderData2";

function Order() {
  const getToken = () => {
    return sessionStorage.getItem("token");
  };

  const [orders, setOrders] = useState([]);
  const token = getToken();

  useEffect(() => {
    if (!token) {
      console.error("Token not found.");
      return;
    }

    fetch("http://localhost:9090/admin/checkout/details", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error("Error fetching orders:", error));
  }, [token]); // Make sure to include token as a dependency

  const handleUpdateCheckout = (checkoutId : any) => {
    // Send request to update checkout status
    fetch(`http://localhost:9090/admin/checkout/${checkoutId}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: true }), // Change status as needed
    })
      .then((response) => {
        if (response.ok) {
          // If successful, update the local state or fetch orders again
          // Here, we are updating the local state assuming the response body contains the updated order data
          const updatedOrders = orders.map((order: any) =>
            order.checkoutId === checkoutId ? { ...order, checked: true } : order
          );
          setOrders(updatedOrders);
        } else {
          console.error("Failed to update checkout status:", response.statusText);
        }
      })
      .catch((error) => console.error("Error updating checkout status:", error));
  };

  return (
    <div className="order-reorderingmain-box">
      <div className="order-reorderingmain-box-item">
        <div className="text">
          <h4>Order &amp; Checkout</h4>
        </div>
        <div className="icon">
          <a href="#">
            Last Week
            <span>
              <svg
                width="15"
                height="18"
                viewBox="0 0 15 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* SVG Paths */}
              </svg>
            </span>
          </a>
        </div>
      </div>

      <div className="order-reorderingmain-box-tabel">
        <table className="table w-100">
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Quantity</th>
              <th>Checked</th>
              <th>Total Amount</th>
              <th>Checkout Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order : any) => (
              <tr key={order.checkoutId}>
                <td>{order.foodName}</td>
                <td>{order.quantity}</td>
                <td>{order.checked ? "Checked" : "Not Checked"}</td>
                <td>${order.totalAmount}</td>
                <td>{order.checkoutDate}</td>
                <td>
                 
                  <button className="btn btn-danger" onClick={() => handleUpdateCheckout(order.checkoutId)}>
                    Update
                  </button>
                  
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Pagination />
      </div>
    </div>
  );
}

export default Order;
