import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

export default function Categories() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/categories")
      .then((res) => setCategories(res.data))
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This category will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/api/categories/${id}`);
        setCategories((prev) => prev.filter((category) => category._id !== id));
        Swal.fire("Deleted!", "Category has been deleted.", "success");
      } catch (error) {
        console.error("Error deleting category:", error);
        Swal.fire("Error!", "Failed to delete category.", "error");
      }
    }
  };

  const handleEdit = (category) => {
    navigate("/FormForCategory", { state: { category } });
  };

  return (
    <>
      <section className="text-gray-600 w-full min-h-200 bg-blue-50 rounded-2xl">
        <div className="container px-5 mx-auto w-full">
          <div>
            <h1 className="text-2xl text-zinc-950 font-bold mt-5">
              Categories Management
            </h1>
            <p className="text-grey">Showing Products</p>
          </div>
          <div className="button-div flex justify-end items-end">
            <a
              href="/FormForCategory"
              className="bg-blue-500 text-white font-semibold p-2 rounded hover:bg-blue-900"
            >
              + Add Category
            </a>
          </div>
          <div className="flex flex-wrap mt-5 ">
            {categories.map((category, index) => (
              <div key={index} className="xl:w-1/3 md:w-1/2 p-4 ">
                <div className="relative shadow-all1 p-6 rounded-2xl hover:shadow shadow-blue-500  flex flex-col items-center bg-white">
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button
                      onClick={() => handleEdit(category)}
                      className="text-gray-600 rounded-full p-1 shadow-icon hover:text-blue-700 hover:bg-blue-100"
                    >
                      <PencilIcon className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="text-gray-600 rounded-full p-1 shadow-icon hover:text-red-600 hover:bg-red-100"
                    >
                      <TrashIcon className="h-5 w-5" />
                    </button>
                  </div>

                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-32 h-32 mb-4  group-hover:border-blue-500"
                  />
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2 group-hover:text-blue-900">
                    {category.name}
                  </h2>
                  <p className="leading-relaxed text-base group-hover:text-blue-950">
                    {category.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
