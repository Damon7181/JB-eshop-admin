import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const { state } = useLocation();
  const product = state?.product;
  const navigate = useNavigate();

  if (!product) {
    return (
      <div className="p-4">
        <p>No product details available.</p>
        <button
          onClick={() => navigate(-1)}
          className="text-blue-500 underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg max-w-xl w-full p-6">
        <div className="mb-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center text-blue-600 hover:text-blue-950"
          >
            <span>Back</span>
          </button>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
          Product Details
        </h2>

        <div className="flex justify-center mb-6">
          <img
            src={product.image}
            alt="Product"
            className="w-40 h-40 rounded object-cover"
          />
        </div>

      
        <div className="text-gray-800 space-y-3 max-w-md mx-auto mt-6">
          <div className="flex justify-between">
            <strong>Name:</strong>
            <span>{product.name}</span>
          </div>
          <div className="flex justify-between">
            <strong>Price:</strong>
            <span>{product.price}</span>
          </div>
          <div className="flex justify-between">
            <strong>Original Price:</strong>
            <span>{product.originalPrice}</span>
          </div>
          <div className="flex justify-between">
            <strong>Max Temperature:</strong>
            <span>{product.maxTemperature ?? "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <strong>Material:</strong>
            <span>{product.material ?? "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <strong>EMF Emission:</strong>
            <span>{product.emfEmission ?? "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <strong>Status:</strong>
            <span>{product.status ?? "N/A"}</span>
          </div>
          <div className="flex justify-between">
            <strong>Views:</strong>
            <span>{product.views ?? 0}</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a
            className="text-blue-600 underline"
            href={product.url}
            target="_blank"
            rel="noreferrer"
          >
            <strong>Visit Product Page</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
