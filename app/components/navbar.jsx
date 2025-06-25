"use client";
import Link from "next/link";
import {
  ShoppingCart,
  X,
  Minus,
  Plus,
  Trash2,
  XCircle,
  Menu,
} from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import {
  addToCart,
  removeFromCartById,
  decreaseQuantity,
  clearCart,
} from "../store/cartSlice";

export default function Navbar() {
  const dispatch = useDispatch();
  const cartCount = useSelector((state) => state.cart.cartCount);
  const cartItems = useSelector((state) => state.cart.items);
  const [showCart, setShowCart] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-blue-50 shadow-md py-5 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4 relative">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-xl font-bold">
            <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
              J
            </span>
            <span className="text-blue-400 font-serif border-b-3 border-b-blue-800">
              B
            </span>{" "}
            e
            <span className="text-red-400 font-thin border-b-3 border-b-red-600">
              S
              <span className="text-black border-b-3 border-b-blue-800">
                hop
              </span>
            </span>
          </h1>
          {/* toggle button */}
          <button
            className="md:hidden ml-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 "
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium items-center">
          <li>
            <Link href="/main">Home</Link>
          </li>
          <li>
            <Link href="/suggestions">Suggestions</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <div
              className="relative cursor-pointer"
              onClick={() => setShowCart(!showCart)}
            >
              <ShoppingCart size={24} color="black" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </li>
        </ul>

        {/* Small screen lower than medium menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-3 bg-white shadow-lg rounded-lg p-4 absolute top-16 left-0 right-0 z-40">
            <li>
              <Link href="/main" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/suggestions" onClick={() => setMenuOpen(false)}>
                Suggestions
              </Link>
            </li>
            <li>
              <Link href="/profile" onClick={() => setMenuOpen(false)}>
                Profile
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <div
                className="relative cursor-pointer"
                onClick={() => {
                  setShowCart(!showCart);
                  setMenuOpen(false);
                }}
              >
                <ShoppingCart size={24} color="black" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </div>
            </li>
          </ul>
        )}

        {showCart && (
          <div className="absolute top-20 right-0 md:top-16 md:right-6 w-full max-w-xs md:w-120 bg-white border rounded-lg shadow-lg z-50 p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Cart</h2>
              <button onClick={() => setShowCart(false)}>
                <X size={20} />
              </button>
            </div>

            {cartItems.length === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty.</p>
            ) : (
              <>
                <ul className="space-y-3 max-h-60 overflow-y-auto mb-4">
                  {cartItems.map((item, index) => (
                    <li key={index} className="border-b pb-2 text-sm">
                      <div className="flex justify-between items-start">
                        <div>
                          <strong>{item.title}</strong>
                          <p className="text-xs text-gray-600">
                            Price: ${item.price}
                          </p>
                          <p className="text-xs text-gray-600">
                            Quantity: {item.quantity}
                          </p>
                        </div>
                        <div className="flex  items-end gap-1">
                          <button
                            className="text-xs bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded"
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
                            className="text-xs bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
                            onClick={() => dispatch(decreaseQuantity(item.id))}
                          >
                            <Minus size={20} />
                          </button>
                          <button
                            className="text-xs bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                            onClick={() =>
                              dispatch(removeFromCartById(item.id))
                            }
                          >
                            <XCircle size={20} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Total */}
                <div className="border-t pt-2 text-sm font-semibold flex justify-between">
                  <span>Total:</span>
                  <span>
                    $
                    {cartItems
                      .reduce(
                        (acc, item) => acc + item.price * item.quantity,
                        0
                      )
                      .toFixed(2)}
                  </span>
                </div>
              </>
            )}

            <div className="mt-4 flex justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded text-sm"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>

              <Link
                href="/cart"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
                onClick={() => setShowCart(false)}
              >
                Go to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
