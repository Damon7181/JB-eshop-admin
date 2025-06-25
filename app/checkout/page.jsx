"use client";

import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export default function CheckoutPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOrder = async () => {
    if (!formData.name || !formData.email || !formData.address) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      const response = await axios.post(
        "jb-eshop-backend-production.up.railway.app/api/orders",
        {
          customerName: formData.name,
          customerEmail: formData.email,
          deliveryAddress: formData.address,
          products: cartItems,
          totalAmount: total,
        }
      );
      console.log("Order saved:", response.data);
      alert("Order placed successfully!");
    } catch (err) {
      console.error("Failed to save order:", err);
      alert("Something went wrong while saving the order.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {/* Order Items */}
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex items-center justify-between border-b pb-4"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-600">
                      Quantity: {item.quantity}
                    </p>
                    <p className="text-sm text-gray-600">
                      Price: ${item.price}
                    </p>
                  </div>
                </div>
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </li>
            ))}
          </ul>

          {/* Total */}
          <div className="mt-6 flex justify-between items-center border-t pt-4">
            <h2 className="text-xl font-bold">Total:</h2>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>

          {/* Checkout Form */}
          <div className="mt-8 space-y-4 bg-gray-50 p-6 rounded-xl border">
            <h3 className="text-xl font-semibold mb-2">Customer Information</h3>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Delivery Address"
              rows={4}
              className="w-full p-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-between">
            <button
              onClick={handleOrder}
              className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 w-full sm:w-auto"
            >
              Confirm & Place Order
            </button>
            <Link
              href="/Sauna"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded w-full sm:w-auto text-center"
            >
              Add More Products
            </Link>
            <Link
              href="/cart"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 rounded w-full sm:w-auto text-center"
            >
              Back to Cart
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
