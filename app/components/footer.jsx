"use client";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  const socialIcons = [
    {
      Icon: FaFacebookF,
      label: "Facebook",
      href: "https://www.facebook.com/JinnByte?_rdc=1&_rdr#",
    },
    {
      Icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/jinnbyte/",
    },
    {
      Icon: FaTwitter,
      label: "Twitter",
      href: "https://x.com/JinnByte",
    },
    {
      Icon: FaInstagram,
      label: "Instagram",
      href: "https://www.instagram.com/jinnbyte.official/",
    },
  ];

  return (
    <footer className="bg-[#1F2937] text-white px-6 md:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-2">
            JinnByte <br /> JB eShop{" "}
            <span className="text-sm font-light">(Child Company)</span>
          </h2>
          <br />
          <p className="font-semibold mb-2">Follow Us On</p>
          <div className="flex space-x-3">
            {socialIcons.map(({ Icon, label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white p-2 rounded hover:bg-white hover:text-black transition"
              >
                <Icon className="h-5 w-5" aria-label={label} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Resources</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://jinnbyte.com/blog/" target="_blank">
                Blog
              </a>
            </li>
            <li>
              <a href="/Sauna">Popular Products</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Get in touch</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="/suggest-product" target="_blank">
                Suggest a product
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">About</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://jinnbyte.com/about-us/" target="_blank">
                About us
              </a>
            </li>
            <li>
              <a href="/contact-us" target="_blank">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-2">Portfolio</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://jinnbyte.com/our-portfolio/">Industry</a>
            </li>
            <li>
              <a href="https://jinnbyte.com/jinnbyte-portfolio-services/">
                Services
              </a>
            </li>
            <li>
              <a href="https://jinnbyte.com/jinnbyte-portfolio-technology/">
                Technology
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 text-center border-t border-gray-100 pt-4 text-sm text-gray-400">
        © 2017 JinnByte. All rights reserved.
      </div>
    </footer>
  );
}
