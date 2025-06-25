import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function FormForCategory() {
  const location = useLocation();
  const navigate = useNavigate();
  const editingCategory = location.state?.category;

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    image: "",
  });

  useEffect(() => {
    if (editingCategory) {
      setFormData(editingCategory);
    }
  }, [editingCategory]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editingCategory) {
        await axios.put(
          `http://localhost:5000/api/categories/${editingCategory._id}`,
          formData
        );
        toast.success("Category updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/categories", formData);
        toast.success("Category added successfully!");
      }
      navigate("/Categories");
    } catch (err) {
      console.error("Error saving category:", err);
      toast.error("Failed to save category.");
    }
  };

  return (
    <div className="mx-auto mt-10 p-10 rounded-2xl shadow-md h-full xlg:w-3xl lg:w-3xl md:w-xl bg-white">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        {editingCategory ? "Edit Category" : "Add New Category"}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Category Title
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            rows="4"
            value={formData.description}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {editingCategory ? "Update Category" : "Add Category"}
        </button>
      </form>
    </div>
  );
}
