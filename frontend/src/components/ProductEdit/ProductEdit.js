import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductEdit.css"; // Import the CSS file for styling

const ProductEdit = () => {
  let [details, setDetails] = useState("details");
  let [price, setPrice] = useState("price");
  let [name, setName] = useState("name");
  let [discount, setDiscount] = useState("discount");
  let navigate = useNavigate();
  let { Prodid } = useParams();
  var Product;
  var ProductArr = JSON.parse(sessionStorage.getItem("Productdata"));
  let [productRes, setProductRes] = useState({});

  useEffect(() => {
    axios.get("http://localhost:8080/products" + "/" + Prodid).then((res) => {
      setProductRes(res.data);
    });
  }, [Prodid]);

  const submitFun = (event) => {
    event.preventDefault();

    if (ProductArr == null) {
      ProductArr = [];
    }
    if (name === "name") {
      name = productRes.name;
    }
    if (price === "price") {
      price = productRes.price;
    }
    if (discount === "discount") {
      discount = productRes.discount;
    }
    if (details === "details") {
      details = productRes.details;
    }
    Product = {
      id: Prodid,
      name: name,
      details: details,
      price: parseInt(price),
      discount: parseInt(discount),
    };

    ProductArr.push(Product);

    axios.put("http://localhost:8080/products", Product).then((res) => {
      console.log(res.data);
    });

    navigate("/prodetails");
    window.location.reload();
  };

  return (
    <div className="product-edit-container">
      <form className="product-edit-form" onSubmit={submitFun}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            placeholder={productRes.name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Details: </label>
          <input
            type="text"
            placeholder={productRes.details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Price: </label>
          <input
            type="number"
            placeholder={productRes.price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Discount: </label>
          <input
            type="number"
            placeholder={productRes.discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ProductEdit;
