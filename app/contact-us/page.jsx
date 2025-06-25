"use client";

export default function ContactUs() {
  return (
    <div className="bg-blue-50 min-h-screen px-6 py-10 flex flex-col items-center justify-start">
      <div className="max-w-3xl w-full bg-white shadow-md rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-6">Contact Us</h1>

        <div className="space-y-5 text-gray-800 text-base">
          <div>
            <h2 className="text-xl font-semibold mb-2">📧 Email</h2>
            <p>info@jinnbyte.com</p>
            <p>hr@jinnbyte.com</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📞 Phone</h2>
            <p>+92-423-7309873</p>
            <p>+92-345-2642152</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">📍 Address</h2>
            <p>
              227-CCA FF Block, DHA Phase IV, <br />
              Lahore, Pakistan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
