"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import { useRouter } from "next/navigation";

export default function SaunaPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("jb-eshop-backend-production.up.railway.app/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
        setError("Failed to fetch products");
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-center">Loading...</p>
      </div>
    );

  if (error)
    return (
      <div className="p-6 text-red-500 items-center justify-center text-center h-screen flex">
        {error}
      </div>
    );

  return (
    <div className="container px-5 w-full my-24 mx-auto">
      <div className="px-5 mx-auto max-w-screen-xl">
        <h1 className="text-3xl font-bold mb-4 mt-5 text-zinc-950 text-center">
          Saunas
        </h1>

        <div className="flex flex-wrap mt-5 justify-center">
          {products.map((product, index) => (
            <div
              key={index}
              className="xl:w-1/4 md:w-1/2 w-full p-4 flex justify-center"
              style={{
                animation: `fadeInUp 0.6s ${0.1 * index}s both`,
              }}
            >
              <div className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 rounded-2xl flex flex-col items-center border border-gray-200 group transform hover:-translate-y-2 hover:scale-105">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-32 h-32 mb-4 object-cover rounded-lg shadow group-hover:scale-110 transition-transform duration-300"
                />
                <h2 className="text-lg text-gray-900 font-semibold title-font mb-2 text-center group-hover:text-gray-500 transition-colors duration-300">
                  {product.name}
                </h2>
                <div className="leading-snug space-y-0 mb-2">
                  <p className=" text-base text-center text-gray-700">
                    {product.price}
                  </p>
                  <p className=" text-grey line-through text-gray-400 ">
                    {product.originalPrice}
                  </p>
                </div>

                <div className="flex gap-2 w-full justify-center mt-2">
                  <button
                    onClick={() =>
                      dispatch(
                        addToCart({
                          id: product._id,
                          title: product.name,
                          price: parseFloat(product.price),
                          image: product.image,
                        })
                      )
                    }
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-xl transition w-full sm:w-auto shadow group-hover:scale-105"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product._id,
                          title: product.name,
                          price: parseFloat(product.price),
                          image: product.image,
                        })
                      );
                      router.push("/checkout");
                    }}
                    className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-xl transition w-full sm:w-auto shadow group-hover:scale-105"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Animation keyframes for fadeInUp */}
      <style jsx>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
