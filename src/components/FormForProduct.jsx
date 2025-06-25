import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormForProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingProduct = location.state?.product;

  const [formData, setFormData] = useState({
    name: "",
    image: "",
    url: "",
    price: "",
    originalPrice: "",
    status: "",
    views: 0,
  });

  useEffect(() => {
    if (editingProduct) {
      setFormData(editingProduct);
    }
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev, //this line add the previous fields with this form
      [name]: name === "views" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await axios.put(
          `http://localhost:5000/api/products/${editingProduct._id}`,
          formData
        );
        toast.success("Product updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/products", formData);
        toast.success("Product added successfully!");
      }
      //take you back to the products Dashboard
      navigate("/Products");
    } catch (err) {
      console.error("Error saving product:", err);
      toast.error("Failed to save product.");
    }
  };

  return (
    <div className="mx-auto p-5 rounded-2xl shadow-md bg-white max-w-xl max-h-">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingProduct ? "Edit Product" : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="url"
          value={formData.url}
          onChange={handleChange}
          placeholder="Website URL"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          placeholder="Original Price"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="maxTemperature"
          value={formData.maxTemperature}
          onChange={handleChange}
          placeholder="Maximum Temperature"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="material"
          value={formData.material}
          onChange={handleChange}
          placeholder="Material Used"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="emfEmission"
          value={formData.emfEmission}
          onChange={handleChange}
          placeholder="EMF Emission"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="text"
          name="status"
          value={formData.status}
          onChange={handleChange}
          placeholder="Status"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          required
        />
        <input
          type="number"
          name="views"
          value={formData.views}
          onChange={handleChange}
          placeholder="Views"
          className="w-full border border-gray-300 rounded-lg px-4 py-2"
          min="0"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          {editingProduct ? "Update Product" : "Submit"}
        </button>
      </form>
      
    </div>
  );
}
