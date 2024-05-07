import React, { useEffect, useState } from "react";
import axios from "axios";
import AddNewAddress from "../../components/addressadmin/addNewAddress";
const getToken = () => {
  try {
    const tokenString = localStorage.getItem("token");
    if (tokenString) {
      const token = JSON.parse(tokenString);
      return token;
    } else {
      console.error("Token not found in localStorage");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving token from localStorage:", error);
    return null;
  }
};

const isValidTokenFormat = (token) => {
  const regex = /^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.[A-Za-z0-9-_.+/=]*$/;
  return regex.test(token);
};

const ReservationList = () => {
  const [reservations, setReservations] = useState([]);
  const token = sessionStorage.getItem("token");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/admin/allReservaion",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReservations(response.data);
      } catch (error) {
        if (error.response && error.response.status === 401) {
          // Token expired, refresh token or log out
          console.error("Token expired. Please refresh token or log in again.");
          // Handle token refresh or log out here
        } else {
          console.error("Error fetching reservation data: ", error);
        }
      }
    };

    fetchData();
  }, [token]);
  return (
    <div>
      <h2>Reservation List</h2>
      <div className="card-container">
        {reservations.map((reservation) => (
          <div className="card" key={reservation.reservation_id}>
            <h3>Reservation ID: {reservation.reservation_id}</h3>
            <p>User ID: {reservation.user.id}</p>
            <p>Date: {reservation.date_reservation}</p>
            <p>Number of Guests: {reservation.num_of_guests}</p>
            <p>Phone Number: {reservation.phone_number}</p>
            <p>Table ID: {reservation.tableResturant.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



const App = () => {
  return (
    <div>
      <div>
        <ReservationList />
      </div>
      <div>
        <AddNewAddress />
      </div>
    </div>
  );
};

export default App;
