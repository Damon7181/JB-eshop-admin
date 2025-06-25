"use client";

import { useSelector, useDispatch } from "react-redux";
import { Minus, Plus, Trash2 } from "lucide-react";

import {
  addToCart,
  removeFromCartById,
  decreaseQuantity,
  clearCart,
} from "../store/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center space-y-7">
          <p className="text-gray-500 text-center">Your cart is empty.</p>
          <Link
            href="/Sauna"
            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
          >
            Back to Products
          </Link>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded-lg bg-white shadow-md flex justify-between items-center"
            >
              <div>
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-sm text-gray-600">Price: ${item.price}</p>
                <p className="text-sm text-gray-600">
                  Quantity: {item.quantity}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded text-sm hover:bg-blue-600"
                  onClick={() =>
                    dispatch(
                      addToCart({
                        id: item.id,
                        title: item.title,
                        price: item.price,
                      })
                    )
                  }
                >
                  <Plus size={20} />
                </button>
                <button
                  className="bg-yellow-500 text-white px-3 py-1 rounded text-sm hover:bg-yellow-600"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  <Minus size={20} />
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                  onClick={() => dispatch(removeFromCartById(item.id))}
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>
          ))}

          <div className="border-t pt-4 flex justify-between items-center text-lg font-semibold">
            <span>Total:</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>

          <div className="flex justify-between items-center mt-6">
            <button
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </button>
            <Link
              href="/Sauna"
              className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded"
            >
              Back to Products
            </Link>
            <Link
              href="/checkout"
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
