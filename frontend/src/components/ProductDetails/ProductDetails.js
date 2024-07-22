import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './ProductDetails.css'; // Import the CSS file for styling

const ProductDetails = () => {
    const navigate = useNavigate();
    const [proArr, setProArr] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/products").then((res) => {
            setProArr(res.data);
        });
    }, []);

    const deleteProduct = (id) => {
        axios.delete("http://localhost:8080/products/" + id).then((res) => {
            window.location.reload();
        });
    };

    const renderList = () => {
        return proArr.map((Prod) => {
            return (
                <tr key={Prod.id}>
                    <td>{Prod.id}</td>
                    <td>{Prod.name}</td>
                    <td>{Prod.details}</td>
                    <td>{Prod.price}</td>
                    <td>{Prod.discount}</td>
                    <td>
                        <button onClick={() => deleteProduct(Prod.id)}>Delete</button>
                    </td>
                    <td>
                        <Link to={`edit/${Prod.id}`}>
                            <button>Edit</button>
                        </Link>
                    </td>
                </tr>
            );
        });
    };

    return (
        <div className="product-details-container">
            <h2>Product Details</h2>
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Details</th>
                        <th>Price</th>
                        <th>Discount</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    );
};

export default ProductDetails;
