import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function AddNewAddress() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [date_reservation, setDate] = useState(new Date());
  const [num_of_guests, setNumOfGuests] = useState("");
  const [phone_number, setPhone] = useState("");
  const [nameOfTable, setTable] = useState("");
  const [tables, setTables] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [unavailableDates, setUnavailableDates] = useState([]);

  useEffect(() => {
    fetchTables();
  }, []);

  useEffect(() => {
    if (nameOfTable) {
      fetchUnavailableDates();
    }
  }, [nameOfTable]);

  const fetchTables = async () => {
    try {
      const response = await axios.get(
        "http://localhost:9090/auth/table-resturants/all"
      );
      setTables(response.data);
      if (response.data.length > 0) {
        setTable(response.data[0].nameOfTable);
      }
    } catch (error) {
      console.error("Error fetching tables:", error);
      setError("Failed to fetch tables. Please try again.");
    }
  };

  const fetchUnavailableDates = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9090/auth/reservation/dates/${nameOfTable}`
      );
      const dates = response.data.map((item) => new Date(item.date_reservation));
      setUnavailableDates(dates);
      setError(""); // Reset error if data is successfully fetched
    } catch (error) {
      console.error("Error fetching unavailable dates:", error);
      setError("No Date Reserved");
      // Make all dates available
      setUnavailableDates([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reservation = {
      email: email,
      date_reservation: date_reservation,
      num_of_guests: num_of_guests,
      phone_number: phone_number,
      nameOfTable: nameOfTable,
    };
    try {
      const token = getToken();
      const response = await axios.post(
        "http://localhost:9090/adminuser/addReservaion",
        reservation,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Reservation added successfully:", response.data);
      setSuccess(true);
      navigate("/");
    } catch (error : any) {
      console.error("Error adding reservation:", error.response);
      setError("Failed to add reservation. Please try again.");
    }
  };

  const getToken = () => {
    return sessionStorage.getItem("token");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Reserve Table</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <label htmlFor="date">Date</label>
            <div className="form-group">
              
              <DatePicker
                selected={date_reservation}
                onChange={(date :any) => setDate(date)}
                minDate={new Date()}
                excludeDates={unavailableDates}
                dateFormat="yyyy-MM-dd"
                className="form-control"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="numOfGuests">Number of Guests</label>
              <input
                type="number"
                className="form-control"
                id="numOfGuests"
                name="numOfGuests"
                placeholder="Enter number of guests"
                value={num_of_guests}
                onChange={(e) => setNumOfGuests(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                id="phone"
                name="phone"
                placeholder="Enter phone number"
                value={phone_number}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              
              <select
                className="form-control"
                id="table"
                name="table"
                value={nameOfTable}
                onChange={(e) => setTable(e.target.value)}
                required
              >
                <option value="">Select Table</option>
                {tables.map((table) => (
                  <option
                    key={table.resturantTable_id}
                    value={table.nameOfTable}
                  >
                    {table.nameOfTable}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button type="submit" className="btn btn-danger">
                Reserve Table
              </button>
            </div>
          </form>
          {error && <p className="text-danger">{error}</p>}
          {success && (
            <p className="text-success">Reservation added successfully!</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AddNewAddress;
