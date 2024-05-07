import { useState } from "react";
import axios from "axios";
import Header from "../components/header/index";
import Breadcrumbs from "../components/breadcrumbs";
import Footer from "../components/footer";
import logo from "../assets/images/logo/footer-logo.svg";
import { Link, useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    username: "",
    phone_number: "",
    address: "",   
  });

  const getCart = () => {
    const cart = searchParams.get("cart");
    console.log(JSON.parse(cart));
    return JSON.parse(cart);
  };

  const handleChange = (e : any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e : any) => {
    e.preventDefault();

    const token = sessionStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    const checkoutReq = {
      username: formData.username,
      phone_number: formData.phone_number,
      address: formData.address,
      cartId: getCart()?.cartId,
    };

    axios
      .post("http://localhost:9090/user/checkout/create", checkoutReq, config)
      .then((response) => {
        console.log(response.data);
        // Handle success response
        localStorage.removeItem("userCart");
        navigate("/");
        
      })
      .catch((error) => {
        console.error(error);
        // Handle error
      });
  };

  return (
    <div>
      <Header className="header-two header-three" logo={logo} />
      <main>
        <Breadcrumbs title="Checkout" address="Checkout" />
        <div className="col-lg-7 col-md-6">
        <div className="contact-us-from">
            <form className="from" onSubmit={handleSubmit}>
              <div className="from-item">
                <div className="from-inner">
                <label className="form-label">Username</label>
                <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="from-inner">
                  <label className="form-label">Phone Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
              <div className="from-item from-item-two ">
                <div className="from-inner">
                  <label className="form-label">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Address"
                    required
                  />
                </div>
                {/* <div className="from-inner">
                  <label className="form-label">Checked</label>
                  <input
                    type="checkbox"
                    className="form-check-input"
                    name="checked"
                    checked={formData.checked}
                    onChange={(e) =>
                      setFormData({ ...formData, checked: e.target.checked })
                    }
                  />
                </div> */}
              </div>
              
              <div className="main-btn-four">
                
                <button type="submit" className="main-btn-four">
                  Checkout now!
                </button>
                
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Checkout;
