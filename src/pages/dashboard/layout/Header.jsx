import { BsPersonFill } from 'react-icons/bs';
import React, { useState } from 'react';
import Link from 'next/link';

import { useDashboardAuth } from '../../../../context/DashboardAuthContext';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import { BiBell } from 'react-icons/bi';

const Header = () => {
  const { logout, user } = useDashboardAuth();
  const router = useRouter();
  const currentRoute = router.pathname.split('/')[2];

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownOpen, setDropdownNotificationOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  const toggledropdownNotificationOpen = () => {
    setDropdownNotificationOpen(!dropdownOpen);
  };

  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-8  bg-[#F8F9FA] ">
      <div className="flex justify-between h-16">
        {' '}
        <div className="flex  items-center ">
          {' '}
          <p className="text-gray-500  lg:ml-2">
            <FontAwesomeIcon icon={faDesktop} /> Dashboard / {currentRoute}
          </p>
        </div>
        <div className="p-3 rounded-lg flex">
          <div>
            <div className="relative inline-block text-left z-50">
              <div>
                <button
                  type="button"
                  className="flex items-center text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300 transition"
                  onClick={toggleDropdown}
                >
                  <Image
                    src="/defaultuserphoto.png"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <h1 className="md:block hidden mx-2 font-bold">{user?.first_name}</h1>
                  <svg
                    className="md:block hidden h-4 w-4 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <div
                className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                style={{ display: dropdownVisible ? 'block' : 'none' }}
              >
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-xs text-gray-400">
                    Manage Account
                  </a>
                  <Link
                    href="/dashboard/profileadmin/profile-user-admin"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Profile{' '}
                  </Link>

                  <a
                    href="#"
                    onClick={logout}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
