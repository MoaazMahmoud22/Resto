import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
  const [feedbackList, setFeedbackList] = useState([]);
  const [newFeedback, setNewFeedback] = useState({
    username: "",
    content: "",
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    try {
      const response = await axios.get("http://localhost:9090/public/feedback");
      setFeedbackList(response.data);
    } catch (error) {
      console.error("Error fetching feedback:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewFeedback((prevFeedback) => ({
      ...prevFeedback,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:9090/public/feedback/create", newFeedback);
      setNewFeedback({ username: "", content: "" });
      fetchFeedback(); // Refresh feedback list after submitting
    } catch (error) {
      console.error("Error submitting feedback:", error);
    }
  };

  const AddressCom = ({ feedback }) => {
    const handleDelete = async () => {
      try {
        await axios.delete(
          `http://localhost:9090/public/feedback/${feedback.id}`
        );
        fetchFeedback(); // Refresh feedback list after deleting
      } catch (error) {
        console.error("Error deleting feedback:", error);
      }
    };

    return (
      <div className="col-lg-6 aos-init aos-animate" data-aos="fade-left">
        <div className="dashboard-address-item">
          <div className="shopping-cart-address-one">
            <div className="shopping-cart-address-one-item">
              <div className="text">
                <h4>Comment#{feedback.id}</h4>
                <button className="btn btn-danger" onClick={handleDelete}>
                  Delete
                </button>
              </div>
            </div>
            <address>
              Username: <b>{feedback.username}</b>
              <br />
              Content: <b>{feedback.content}</b>
            </address>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <h2>Add New Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={newFeedback.username}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="content">Content</label>
              <textarea
                className="form-control"
                id="content"
                name="content"
                value={newFeedback.content}
                onChange={handleInputChange}
                rows="3"
                required
              ></textarea>
            </div>
            <div className="main-btn-four">
              <button type="submit" >
                Submit Feedback
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
