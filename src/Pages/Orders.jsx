import { useEffect, useState } from "react";
import axios from "axios";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleViewOrder = (order) => {
    navigate("/orderDetails", { state: { order } });
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  const filteredOrders = orders.filter((order) =>
    order.products?.some((product) =>
      product.title?.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <section className="text-gray-700 w-full py-6">
      <div className="container px-6 mx-auto">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            🛒 Orders Management
          </h1>
          <p className="text-gray-600">
            Manage all your orders and view detailed product information.
          </p>
        </div>

        <div className="mt-6">
          <div className="relative w-full max-w-3xl">
            <span className="absolute left-2 top-1.5 text-gray-500">
              <MagnifyingGlassIcon className="h-5 w-5" />
            </span>
            <input
              type="search"
              placeholder="Search products in orders..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOrders.map((order, index) => (
            <div
              key={index}
              onClick={() => handleViewOrder(order)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md border border-gray-200 flex flex-col justify-between hover:shadow-lg transition"
            >
              <div>
                <div className="mb-4">
                  <h2 className="text-lg font-semibold mb-1">
                    Recent Order #{index + 1}
                    {/* Orderid: {order._id} */}
                  </h2>
                  <p className="text-sm text-gray-500">
                    Date: {new Date(order.createdAt).toLocaleString()}
                  </p>
                </div>

                <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
                  {order.products.map((product, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 items-center border-b border-b-gray-200 pb-2"
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="font-medium">{product.title}</p>
                        <p className="text-sm text-gray-600">
                          Quantity: {product.quantity}
                        </p>
                        <p className="text-sm text-gray-600">
                          Price: ${product.price}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Total + Buttons */}
              <div className="mt-4">
                <p className="text-right font-semibold text-blue-700">
                  Total: ${order.totalAmount?.toFixed(2)}
                </p>
                {/* <div className="flex justify-between mt-3">
                  <a
                    href="/cart"
                    className="text-sm text-blue-600 hover:underline"
                  >
                    ← Back to Cart
                  </a>
                  <a
                    href="/main"
                    className="text-sm text-green-600 hover:underline"
                  >
                    + Add More Products
                  </a>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Orders;
