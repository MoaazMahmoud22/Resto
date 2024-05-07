import { useState, useEffect } from 'react';
import axios from 'axios';
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Construct the payload with only the necessary fields
    const updatedUserData = {
      first_name: user.first_name,
      last_name: user.last_name,
      phone_number: user.phone_number,
    };

    // Update user data
    const userId = localStorage.getItem('user_id'); // Retrieve user_id from local storage
    const token = sessionStorage.getItem('token'); // Retrieve token from local storage
    await axios.put(`http://localhost:9090/user/${userId}`, updatedUserData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // Optionally, show success message or redirect to another page
  } catch (error) {
    console.error('Error updating user data:', error);
    // Optionally, show error message to the user
  }
};


function EditProfile() {
  const [user, setUser] = useState({
    id: '',
    username: '',
    email: '',
    first_name: '',
    last_name: '',
    phone_number: '',
    // Add other fields as needed
  });
  const phone_number = localStorage.getItem("phone_number")

  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const userId = localStorage.getItem('user_id'); // Retrieve user_id from local storage
        const token = sessionStorage.getItem('token'); // Retrieve token from local storage
        const response = await axios.get(`http://localhost:9090/user/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data.ourUsers); // Assuming user data is nested under 'ourUsers'
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures useEffect runs only once

  const handleChange = (e: any) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      // Update user data
      const userId = localStorage.getItem('user_id'); // Retrieve user_id from local storage
      const token = sessionStorage.getItem('token'); // Retrieve token from local storage
      await axios.put(`http://localhost:9090/user/${userId}`, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Optionally, show success message or redirect to another page
    } catch (error) {
      console.error('Error updating user data:', error);
      // Optionally, show error message to the user
    }
  };

  return (
    <div className="dashboard-edit-profile-from">
      <form onSubmit={handleSubmit}>
        <div className="shopping-cart-new-address-from-item">
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="first_name" className="form-label">First Name</label>
            <input
              type="text"
              className="form-control"
              id="first_name"
              name="first_name"
              value={user.first_name}
              onChange={handleChange}
              placeholder="First Name"
              readOnly
            />
          </div>
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="last_name" className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="last_name"
              name="last_name"
              value={user.last_name}
              onChange={handleChange}
              placeholder="Last Name"
              readOnly
            />
          </div>
        </div>
        <div className="shopping-cart-new-address-from-item">
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="email" className="form-label">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={user.email}
              readOnly // Make email field read-only
            />
          </div>
          <div className="shopping-cart-new-address-from-inner">
            <label htmlFor="phone_number" className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-control"
              id="phone_number"
              name="phone_number"
              value={phone_number}
              onChange={handleChange}
              placeholder="Phone Number"
              readOnly
            />
          </div>
        </div>
        {/* <button type="submit" className="btn btn-primary">Save Changes</button> */}
      </form>
    </div>
  );
}

export default EditProfile;
