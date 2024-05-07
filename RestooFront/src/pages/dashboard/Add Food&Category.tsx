import React, { useState, useEffect } from "react";
import axios from "axios";

function ViewFoodAndCategory() {
  const [categoryName, setCategoryName] = useState("");
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [nameCategory, setNameCategory] = useState("");
  const [price, setPrice] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = getToken();
      const response = await axios.get("http://localhost:9090/admin/category", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCategories(response.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleAddCategory = async () => {
    try {
      const token = getToken();
      const response = await axios.post(
        "http://localhost:9090/admin/category/create",
        {
          nameCategory: categoryName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Category added successfully:", response.data);
      // Refresh categories after adding a new one
      fetchCategories();
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  const handleAddDish = async () => {
    try {
      const token = getToken();
      if (!token) {
        console.error("Token not found.");
        return;
      }

      const formData = new FormData();
      formData.append("foodName", dishName);
      formData.append("description", description);
      formData.append("image", image);
      formData.append("nameCategory", nameCategory);
      formData.append("price", price);

      const response = await axios.post(
        "http://localhost:9090/admin/food/create",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Dish added successfully:", response.data);
    } catch (error) {
      console.error("Error adding dish:", error.response);
    }
  };

  const getToken = () => {
    return sessionStorage.getItem("token");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>Add Dish</h2>
          <form className="form">
            <div className="form-group">
              <label>Dish Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter dish name"
                value={dishName}
                onChange={(e) => setDishName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                rows={5}
                placeholder="Enter dish description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="form-group">
              <label>Image URL</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Category Name</label>
              <select
                className="form-control"
                value={nameCategory}
                onChange={(e) => setNameCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {categories.map((category) => (
                  <option key={category.idCategory} value={category.nameCategory}>
                    {category.nameCategory}
                  </option>
                ))}
              </select>
            </div>
            <div className="main-btn-four">
              <button
                type="button"
                className="modal-sign-up-from-btn"
                onClick={handleAddDish}
              >
                Add Dish
              </button>
            </div>
          </form>
        </div>
        <div className="col-lg-6">
          <h2>Add Category</h2>
          <form className="form">
            <div className="form-group">
              <label>Category Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter category name"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </div>
            <div className="main-btn-four">
              <button
                type="button"
                className="modal-sign-up-from-btn"
                onClick={handleAddCategory}
              >
                Add Category
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ViewFoodAndCategory;
