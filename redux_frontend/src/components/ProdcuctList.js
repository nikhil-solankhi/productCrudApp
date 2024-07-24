import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../actions/productActions";
import { Link } from "react-router-dom";

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("name_asc"); // Default sorting option

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const sortedProducts = [...products].sort((a, b) => {
    const [field, order] = sortOption.split("_");
    if (field === "price") {
      if (order === "asc") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    } else {
      if (order === "asc") {
        return a[field].localeCompare(b[field]);
      } else {
        return b[field].localeCompare(a[field]);
      }
    }
  });

  const filteredProducts = sortedProducts.filter((product) => {
    return product.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow-lg rounded-lg mt-8">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">Product List</h2>
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-1/3">
          <select
            value={sortOption}
            onChange={handleSortChange}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
          >
            <option value="name_asc">Name (A - Z)</option>
            <option value="name_desc">Name (Z - A)</option>
            <option value="price_asc">Price (Low to High)</option>
            <option value="price_desc">Price (High to Low)</option>
          </select>
        </div>
        <Link to="/add" className="text-blue-500 hover:text-blue-700">
          Add Product
        </Link>
      </div>
      <div className="flex justify-between bg-gray-100 p-4 mb-2 rounded-lg">
        <div className="w-1/4">
          <h3 className="text-gray-700 font-semibold">Product Name</h3>
        </div>
        <div className="w-1/4">
          <h3 className="text-gray-700 font-semibold">Price</h3>
        </div>
        <div className="w-1/4">
          <h3 className="text-gray-700 font-semibold">Actions</h3>
        </div>
      </div>
      <ul className="divide-y divide-gray-200">
        {filteredProducts.map((product) => (
          <li
            key={product.id}
            className="flex justify-between items-center p-4 hover:bg-gray-50 transition-all duration-200 ease-in-out"
          >
            <div className="w-1/4">
              <span className="font-semibold text-gray-700">
                {product.name}
              </span>
            </div>
            <div className="w-1/4">
              <span className="text-gray-600">₹{product.price}</span>
            </div>
            <div className="w-1/4">
              <Link
                to={`/edit/${product.id}`}
                className="text-blue-500 hover:text-blue-700 mr-4"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product.id)}
                className="text-red-500 hover:text-red-700"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
