import Barchart from "../components/Barchart";
import Linechart from "../components/Linechart";
const Home = () => {
  const stats = [
    {
      title: "Total Sales",
      value: "$24,350",
      icon: <path d="M12 1v22M17 5H9a3 3 0 0 0 0 6h6a3 3 0 0 1 0 6H6" />,
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      title: "Orders Placed",
      value: "325 Orders",
      icon: (
        <>
          <path d="M3 3h18v4H3z" />
          <path d="M6 7v13h12V7" />
          <path d="M9 10h6" />
        </>
      ),
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      title: "Customers",
      value: "150 Users",
      icon: (
        <>
          <circle cx="12" cy="7" r="4" />
          <path d="M5.5 21a6.5 6.5 0 0 1 13 0" />
        </>
      ),
      iconColor: "text-purple-600",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className=" text-gray-600 w-full">
      <div className=" px-5 mx-auto w-full">
        <div>
          <h1 className="text-4xl text-zinc-950 font-bold">
            Welcome back, User!
          </h1>
          <p>
            &nbsp;Here's a{" "}
            <span className="text-blue-400 font-bold">
              <em> quick summary</em>
            </span>{" "}
            of your store's activity.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex items-center p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-full ${stat.bgColor} ${stat.iconColor} mr-4`}
              >
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                >
                  {stat.icon}
                </svg>
              </div>
              <div>
                <p className="text-gray-500 text-sm">{stat.title}</p>
                <p className="text-xl font-semibold text-gray-900">
                  {stat.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-16 mt-6 px-1">
          <div className="bg-white p-2 shadow-[-4px_0_2px_rgba(0,0,0,0.1)] rounded ">
            <Barchart />
          </div>
          <div className="bg-white p-2 shadow-[-4px_0_2px_rgba(0,0,0,0.1)] rounded">
            <Linechart />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
