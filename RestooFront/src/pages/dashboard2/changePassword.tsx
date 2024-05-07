import React, { useState, useEffect } from "react";
import axios from "axios";

function ChangePassword() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdFromLocalStorage = localStorage.getItem("user_id");
    if (userIdFromLocalStorage) {
      setUserId(userIdFromLocalStorage);
    }
  }, []);

  const handleChangePassword = async () => {
    setError("");
    if (newPassword !== confirmPassword) {
      setError("New password and confirm password do not match.");
      return;
    }

    try {
      setLoading(true);
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found.");
      }

      const response = await axios.put(
        `http://localhost:9090/user/${userId}`,
        {
          currentPassword,
          newPassword,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type":"application/json"
          },
        }
      );
      setLoading(false);
      alert("Password updated successfully.");
      // Optionally, you can redirect the user to another page or show a success message
    } catch (error) {
      setLoading(false);
      console.error("Error updating password:", error);
      setError("Failed to update password. Please try again.");
    }
  };

  return (
    <div className="col-lg-12">
      <div className="dashboard-edit-profile-from">
        <div className="shopping-cart-new-address-from">
          {error && <div className="alert alert-danger">{error}</div>}
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label htmlFor="currentPassword" className="form-label">
                Current Password
              </label>
              <input
                type="password"
                className="form-control"
                id="currentPassword"
                placeholder="Type your current password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
            </div>
          </div>
          <div className="shopping-cart-new-address-from-item">
            <div className="shopping-cart-new-address-from-inner">
              <label htmlFor="newPassword" className="form-label">
                New Password
              </label>
              <input
                type="password"
                className="form-control"
                id="newPassword"
                placeholder="Type your new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>
            <div className="shopping-cart-new-address-from-inner">
              <label htmlFor="confirmPassword" className="form-label">
                Confirm Password
              </label>
              <input
                type="password"
                className="form-control"
                id="confirmPassword"
                placeholder="Confirm your new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="change-passowerd-btn">
            <button
              className="main-btn-four"
              onClick={handleChangePassword}
              disabled={loading}
            >
              {loading ? "Updating..." : "Save now"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;
