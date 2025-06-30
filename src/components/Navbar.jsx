import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { generateToken, messaging } from "../notifications/firebase";
import { onMessage } from "firebase/messaging";

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const navigate = useNavigate();
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationRef = useRef();

  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);

  const toggleNotificationPanel = () => {
    setShowNotifications((prev) => {
      if (!prev) setUnreadCount(0); // Reset badge count when opening
      return !prev;
    });
  };

  // Close panel when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target)
      ) {
        setShowNotifications(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Set up Firebase Messaging
  useEffect(() => {
    generateToken(); // You already have this implemented

    const unsubscribe = onMessage(messaging, (payload) => {
      console.log("📩 Notification received:", payload);

      const { title, body } = payload.notification;
      const newNotification = {
        id: Date.now(),
        title,
        body,
        timestamp: new Date().toLocaleString(),
      };

      setNotifications((prev) => [newNotification, ...prev]);
      setUnreadCount((prev) => prev + 1);
    });

    return () => unsubscribe(); // Clean up listener
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/Login");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto sm:px-6 md:px-8 lg:px-8">
        <div className="relative flex h-16 items-center justify-end">
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* 🔔 Notification */}
            <div className="relative" ref={notificationRef}>
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                onClick={toggleNotificationPanel}
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" />

                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
                    {unreadCount}
                  </span>
                )}
              </button>

              {/* Dropdown Notifications Panel */}
              {showNotifications && (
                <div className="absolute right-0 z-50 mt-2 w-72 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none max-h-64 overflow-y-auto">
                  <div className="p-4">
                    {notifications.length === 0 ? (
                      <p className="text-sm text-gray-500">
                        No new notifications
                      </p>
                    ) : (
                      notifications.map((note) => (
                        <div key={note.id} className="mb-2 border-b pb-2">
                          <p className="text-sm font-medium text-gray-800">
                            🔔 {note.title}
                          </p>
                          <p className="text-xs text-gray-500">{note.body}</p>
                          <p className="text-[10px] text-gray-400">
                            {note.timestamp}
                          </p>
                        </div>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 👤 Profile Dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 cursor-pointer">
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://ca.slack-edge.com/T029ZTYPKHR-U04RHBG41T7-9d3e42de457d-512"
                    alt=""
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Sign out
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
