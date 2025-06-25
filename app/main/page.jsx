"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    name: "Saunas",
    img: "https://www.shutterstock.com/image-photo/large-galvanized-tub-filled-ice-600nw-2514072593.jpg",
  },
  // {
  //   name: 'Smart Rings',
  //   img: '/ring.png',
  // },
  // {
  //   name: 'Ice Baths',
  //   img: '/ice-bath.png',
  // },
  // {
  //   name: 'Massage Guns',
  //   img: '/massage-gun.png',
  // },
];

export default function UserPortalPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
        What are you looking for?
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {categories.map((item) => (
          <div key={item.name} className="flex flex-col items-center">
            <Link
              href="/Sauna"
              className="bg-blue-100 rounded-3xl w-36 h-36 flex items-center justify-center shadow-md shadow-all1"
            >
              <div className="relative bg-blue-100 rounded-3xl w-36 h-36 flex items-center justify-center shadow-md">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={100}
                  height={80}
                  className="object-contain rounded-full"
                />
              </div>
            </Link>
            <p className="mt-4 text-center font-medium text-gray-800">
              {item.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
