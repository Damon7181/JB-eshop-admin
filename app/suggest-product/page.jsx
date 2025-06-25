"use client";
import { useState } from "react";

export default function SuggestProductPage() {
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with an API POST later
    console.log("Suggested Product:", { url, description });

    setSubmitted(true);
    setUrl("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-blue-50 py-10 px-6">
      <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Suggest a Product
        </h1>
        <p className="text-gray-600 text-sm mb-6 text-center">
          Found a product we should add? Share the link and tell us why!
        </p>

        {submitted ? (
          <div className="text-green-600 text-center font-medium">
            ✅ Thank you! Your suggestion has been received.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">
                Product URL
              </label>
              <input
                type="url"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="https://example.com/product"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Why should we add this product?
              </label>
              <textarea
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-3 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Briefly explain why this product is a good fit..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
            >
              Submit Suggestion
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
