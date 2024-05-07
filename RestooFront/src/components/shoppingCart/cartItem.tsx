import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../assets/css/style.css";
import { useNavigate } from "react-router-dom";

function CartItem({
  userCart,
  setUserCart,
  foodId,
  image,
  foodName,
  price,
  totalPrice,
  qyt,
  i,
  username,
}: {
  userCart: any;
  setUserCart: any;
  foodId: string;
  image: string;
  foodName: string;
  price: number;
  totalPrice: number;
  qyt: number;
  i: number;
  username: string;
}) {
  const navigate = useNavigate();

  function handleCheck() {
    const url = "http://localhost:9090/user/shopping-cart/add";

    const shoppingCartReqData = {
      foodName: `${foodName}`,
      quantity: `${qyt}`,
      username: localStorage.getItem("username"),
    };
    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    console.log(shoppingCartReqData);
    axios
      .post(url, shoppingCartReqData, config)
      .then((response) => {
        console.log("Response:", response.data);
        navigate(`/checkout?cart=${JSON.stringify(response.data.shopingCarts)}`);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const increase = () => {
    const newCart = JSON.parse(userCart);
    newCart[i].qyt = newCart[i].qyt + 1;
    newCart[i].totalPrice = newCart[i].qyt * price; // Update the total price
    setUserCart(JSON.stringify(newCart));
  };

  const decrease = () => {
    const newCart = JSON.parse(userCart);
    if (newCart[i].qyt - 1 < 0) return;
    newCart[i].qyt = newCart[i].qyt - 1;
    newCart[i].totalPrice = newCart[i].qyt * price; // Update the total price
    setUserCart(JSON.stringify(newCart));
  };

  const deleteItem = () => {
    const newCart = JSON.parse(userCart);
    newCart.splice(i, 1);
    setUserCart(JSON.stringify(newCart));
  };

  return (
    <>
      <tr>
        <td className="details-control">
          <input
            className="form-check-input"
            type="checkbox"
            id="checkboxNoLabel-0"
            value=""
            aria-label="..."
          />
        </td>
        <td>
          <div className="tabel-item">
            <div className="tabel-img">
              <img src={image} alt="img" height="200px" width="200px" />
            </div>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h5>{foodName}</h5>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h6>${price}</h6>
          </div>
        </td>
        <td>
          <div className="tabel-text-btn">
            <div className="grid">
              <button className="btn btn-minus" onClick={decrease}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="column product-qty">{qyt}</div>
              <button className="btn btn-plus" onClick={increase}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </td>
        <td>
          <div className="tabel-text">
            <h6>${totalPrice}</h6>
          </div>
        </td>
        <td>
          <div className="tabel-modal-btn">
            <button onClick={deleteItem}>
              <a href="#">
                <span>
                  <svg
                    width="17"
                    height="20"
                    viewBox="0 0 17 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.834 0.890599C6.20493 0.334202 6.8294 0 7.4981 0H9.35737C10.0261 0 10.6505 0.334202 11.0215 0.8906L11.9277 2.25H15.6777C16.0919 2.25 16.4277 2.58579 16.4277 3C16.4277 3.41421 16.0919 3.75 15.6777 3.75H1.17773C0.763521 3.75 0.427734 3.41421 0.427734 3C0.427734 2.58579 0.763521 2.25 1.17773 2.25H4.92773L5.834 0.890599ZM11.4277 20H5.42773C3.2186 20 1.42773 18.2091 1.42773 16V5H15.4277V16C15.4277 18.2091 13.6369 20 11.4277 20ZM6.42773 8.25C6.84195 8.25 7.17773 8.58579 7.17773 9V16C7.17773 16.4142 6.84195 16.75 6.42773 16.75C6.01352 16.75 5.67773 16.4142 5.67773 16L5.67773 9C5.67773 8.58579 6.01352 8.25 6.42773 8.25ZM10.4277 8.25C10.8419 8.25 11.1777 8.58579 11.1777 9V16C11.1777 16.4142 10.8419 16.75 10.4277 16.75C10.0135 16.75 9.67774 16.4142 9.67773 16V9C9.67773 8.58579 10.0135 8.25 10.4277 8.25Z"
                    fill="white"
                  />
                  </svg>
                </span>
              </a>
            </button>
            <div className="main-btn-four">
              <button onClick={handleCheck}>Check</button>
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}

export default CartItem;
