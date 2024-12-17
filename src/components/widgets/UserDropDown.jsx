import React, { useState } from "react";

const UserDropDown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" onBlur={()=>{
      setIsOpen(false);
    }}>
      {/* User Icon Button */}
      <button
        onClick={toggleDropdown}
        className="flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-200 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <ul
        className={`absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg transition-all duration-300 ease-in-out ${
          isOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-90 pointer-events-none"
        }`}
      >
        <li>
          <a
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Profile
          </a>
        </li>
        <li>
          <a
            href="/settings"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
        </li>
        <li>
          <a
            href="/logout"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Logout
          </a>
        </li>
      </ul>
    </div>
  );
};

export default UserDropDown;
