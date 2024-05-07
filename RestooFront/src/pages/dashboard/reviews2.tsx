import React, { useState, useEffect } from "react";
import axios from "axios";

function Reviews() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const response = await axios.get(
          "http://localhost:9090/public/feedback"
        );
        setFeedbackList(response.data);
      } catch (error) {
        console.error("Error fetching feedback:", error);
      }
    };

    fetchFeedback();
  }, []);

  const AddressCom = ({ feedback}) => {
    const handleDelete = async () => {
      try {
        await axios.delete(
          `http://localhost:9090/public/feedback/${feedback.id}`
        );
        setFeedbackList((prevFeedbackList) =>
          prevFeedbackList.filter((item) => item.id !== feedback.id)
        );
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
        {feedbackList.map((feedback) => (
          <AddressCom key={feedback.id} feedback={feedback} />
        ))}
      </div>
    </div>
  );
}

export default Reviews;
