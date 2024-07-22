import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./ProductRegistration.css"; // Import the CSS file for styling

const ProductRegistration = () => {
  const [details, setDetail] = useState("");
  const [price, setPrice] = useState("");
  const [name, setName] = useState("");
  const [discount, setDiscount] = useState("");
  const navigate = useNavigate();
  var Product;
  var ProductArr = JSON.parse(sessionStorage.getItem("Productdata"));

  const submitFun = (event) => {
    event.preventDefault();
    if (ProductArr == null) {
      ProductArr = [];
    }
    Product = {
      id: 0,
      name: name,
      details: details,
      price: parseInt(price),
      discount: parseInt(discount),
    };
    console.log(Product);
    ProductArr.push(Product);
    console.log(ProductArr);

    axios
      .post("http://localhost:8080/products", Product)
      .then((res) => {
        console.log(Product);
        console.log(res.data);
      })
      .then(() => {
        navigate("/prodetails");
      })
      .then(() => {
        window.location.reload();
      });
  };

  return (
    <div className="registration-container">
      <form className="registration-form" onSubmit={submitFun}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Details: </label>
          <input
            type="text"
            value={details}
            onChange={(e) => setDetail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Discount: </label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductRegistration;
