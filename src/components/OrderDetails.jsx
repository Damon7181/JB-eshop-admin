import { useLocation, useNavigate } from "react-router-dom";

export default function OrderDetails() {
  const { state } = useLocation();
  const order = state?.order;
  const navigate = useNavigate();

  if (!order) {
    return (
      <div className="p-6">
        <p>No order details found.</p>
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
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-xl shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Order Details</h2>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Customer Information
        </h3>
        <p>
          <strong>Name:</strong> {order.customerName ?? "N/A"}
        </p>
        <p>
          <strong>Email:</strong> {order.customerEmail ?? "N/A"}
        </p>
        <p>
          <strong>Delivery Address:</strong> {order.deliveryAddress ?? "N/A"}
        </p>
        <p>
          <strong>Order Date:</strong>{" "}
          {new Date(order.createdAt).toLocaleString()}
        </p>
        <p>
          <strong>Total Amount:</strong> ${order.totalAmount?.toFixed(2)}
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Products</h3>
        <div className="space-y-4">
          {order.products.map((product, index) => (
            <div key={index} className="flex gap-4 border-b pb-2">
              <img
                src={product.image}
                alt={product.title}
                className="w-16 h-16 rounded"
              />
              <div>
                <p className="font-medium">{product.title}</p>
                <p>Quantity: {product.quantity}</p>
                <p>Price: ${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate(-1)}
        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
      >
        Go Back
      </button>
    </div>
  );
}
