import React, { useState, useEffect } from 'react';

const SwitchLang = ({ locale }) => {
  const [currentPath, setCurrentPath] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  useEffect(() => {
    // Only run on the client side
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);
  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev); // Toggle dropdown visibility
  };
  const closeDropdown = () => {
    setDropdownVisible(false); // Close dropdown
  };

  const switchLanguage = (newLocale) => {
    // Replace the locale in the current path
    const updatedPath = currentPath.replace(
      new RegExp(`^/${locale}`), // Match current locale at the start of the path
      `/${newLocale}` // Replace with the new locale
    );
    window.location.href = updatedPath; // Navigate to the new path
  };

  return (
    <div className="relative">
      <button
        onClick={() => {
          setDropdownVisible(!dropdownVisible);
        }}
        type="button"
        className="text-muted dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
        aria-haspopup="true"
        aria-expanded="false"
        aria-label="Change Language"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.913 17H20.087M12.913 17L11 21M12.913 17L15.7783 11.009C16.0092 10.5263 16.1246 10.2849 16.2826 10.2086C16.4199 10.1423 16.5801 10.1423 16.7174 10.2086C16.8754 10.2849 16.9908 10.5263 17.2217 11.009L20.087 17M20.087 17L22 21M2 5H8M8 5H11.5M8 5V3M11.5 5H14M11.5 5C11.0039 7.95729 9.85259 10.6362 8.16555 12.8844M10 14C9.38747 13.7248 8.76265 13.3421 8.16555 12.8844M8.16555 12.8844C6.81302 11.8478 5.60276 10.4266 5 9M8.16555 12.8844C6.56086 15.0229 4.47143 16.7718 2 18"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="ml-2 uppercase">{locale}</span>
      </button>
      {dropdownVisible && (
        <ul
          className="absolute bg-white dark:bg-gray-700 rounded-lg shadow-lg mt-2 py-2 w-32"
          aria-label="Language Options"
        >
          {['en', 'fr', 'th'].map((loc) => (
            <li key={loc}>
              <button
                onClick={() => switchLanguage(loc)}
                className={`block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600 ${
                  loc === locale ? 'font-bold' : ''
                }`}
              >
                {loc.toUpperCase()}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SwitchLang;
