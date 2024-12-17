import React, { useState, useEffect } from 'react';
import { getTranslations, t } from '../../i18n';

const UserDropDown = ({ locale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [token, setToken] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // State to toggle modal

  // Safely get the token on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
    }
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    localStorage.setItem('token', '1234456ui');
    setToken('1234456ui'); // Update token state
    setIsModalOpen(false); // Close modal after login
    window.location.reload();
  };

  return (
    <div className="relative">
      {/* If token exists, render the dropdown, else render login */}
      {token ? (
        <>
          <div className=" flex flex-row gap-2 p-1">
            <button
              onClick={toggleDropdown}
             
              className="flex items-center justify-center w-28 h-10 rounded-sm focus:outline-none"
            >
              {/* User Icon */}
              <img src="src/assets/images/user.jpg" alt="user-img" className="rounded-full" width={45} />
              <div className="flex flex-col px-1">
                <span className="text-primary">User_test</span>
                
              </div>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <div>
                <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hi, User</span>
              </div>
              <li>
                <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t(locale, 'Profile')}
                </a>
              </li>
              <li>
                <a href="/settings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  {t(locale, 'Settings')}
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem('token');
                    window.location.reload();
                  }}
                  className="block px-4 py-2 text-sm w-full text-gray-700 hover:bg-red-100"
                >
                  <span className='text-red-500'>
                  {t(locale, 'Logout')}
                  </span>
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <>
          <button
            onClick={() => setIsModalOpen(true)} // Open modal
            className="hover:text-[#53b6ac] bg-primary rounded-md text-white dark:text-white dark:hover:text-blue-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:rounded-md mx-2 p-2 flex items-center lg:justify-center whitespace-nowrap"
          >
            {t(locale, 'Login')}
          </button>

          {/* Login Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
              <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
                <h2 className="text-xl font-bold mb-4">{t(locale, 'Login')}</h2>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                  }}
                >
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Username</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Password</label>
                    <input
                      type="password"
                      className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
                  >
                    {t(locale, 'Login')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="w-full mt-2 text-gray-500 hover:underline"
                  >
                    {t(locale, 'Cancel')}
                  </button>
                </form>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default UserDropDown;
