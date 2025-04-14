import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { SlMenu } from 'react-icons/sl';
import { AiOutlineClose, AiOutlineLineChart } from 'react-icons/ai';
import { RiSettings3Fill } from 'react-icons/ri';
import { FaChartPie, FaComments } from 'react-icons/fa';
import { BsMap, BsPersonFill } from 'react-icons/bs';
import { SiSpeedtest } from 'react-icons/si';
import { CgMoreVerticalO } from 'react-icons/cg';
import { MdLocationCity } from 'react-icons/md';

import Header from './Header';
import { useDashboardAuth } from '../../../../context/DashboardAuthContext';
import { RoleEnum } from '../../../../enums';

const Sidebar = ({ children }) => {
  const { user } = useDashboardAuth();
  const router = useRouter();
  const [SidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setSidebarOpen(!SidebarOpen);
  };

  return (
    <>
      {/* Butoni hamburger për mobile */}
      <div className="flex bg-[#F8F9FA]">
        <button
          data-drawer-target="default-sidebar"
          data-drawer-toggle="default-sidebar"
          aria-controls="default-sidebar"
          type="button"
          className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 
                     rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none 
                     focus:ring-2 focus:ring-gray-200 dark:text-gray-400 
                     dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={toggleSidebar}
        >
          {SidebarOpen ? <AiOutlineClose size={25} /> : <SlMenu size={25} />}
        </button>
        <div className={`sm:hidden ${SidebarOpen ? 'hidden ' : 'block '} `}>
          <Header />
        </div>
      </div>

      {/* Sidebar + Përmbajtja */}
      <aside>
        <div className="flex font-sans bg-[#F8F9FA]">
          <div
            id="default-sidebar"
            className={`w-80 px-8 ${SidebarOpen ? 'w-full h-screen' : 'hidden'} sm:block`}
          >
            <div className="menu is-menu-main h-full px-5">
              <div className="p-2 py-1 mb-2 border-b">
                <Link href="/dashboard/dashboard">
                  <div className="block h-20 p-5 w-auto">
                    <Image src="/insi.png" alt="Logo" width={100} height={100} />
                  </div>
                </Link>
              </div>

              {/* Lidhja e "Dashboard" */}
              <Link
                href="/dashboard/dashboard"
                className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                  router.pathname === '/dashboard/dashboard'
                    ? 'bg-white shadow-lg'
                    : 'text-black'
                }`}
              >
                <div
                  className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center shadow-md ${
                    router.pathname === '/dashboard/dashboard'
                      ? 'text-white bg-[#CB0C9F]'
                      : 'text-black bg-white'
                  }`}
                >
                  <SiSpeedtest size={20} />
                </div>
                <span className="grow ml-3 text-gray-600">Dashboard</span>
              </Link>

              {/* Landing Page */}
              <p className="text-xs leading-4 pt-6 ml-1 font-bold text-gray-400 uppercase ">
                Landing Page
              </p>
              <ul className="menu-list text-white ">
                {/* Vetëm për user me rol SUPER_ADMIN */}
                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/content-page"
                      className={`flex items-center p-2 mb-1 rounded-lg font-medium ${
                        router.pathname === '/dashboard/content-page'
                          ? 'bg-white shadow-lg'
                          : 'text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/content-page'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <CgMoreVerticalO />
                      </div>
                      <span className="grow ml-3 text-gray-600">Content</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/active-admin"
                      className={`flex items-center p-2 mb-1 mt-2 rounded-lg font-medium ${
                        router.pathname === '/dashboard/active-admin'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/active-admin'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <CgMoreVerticalO />
                      </div>
                      <span className="grow ml-3 text-gray-600">Active</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/comments"
                      className={`flex items-center p-2 mb-1 mt-2 rounded-lg font-medium ${
                        router.pathname === '/dashboard/comments'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/comments'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <FaComments />
                      </div>
                      <span className="grow ml-3 text-gray-600">Comments</span>
                    </Link>
                  </li>
                )}
              </ul>

              {/* Kategori tjetër */}
              <p className="text-xs leading-4 pt-6 ml-1 font-bold text-gray-400 uppercase ">
                Questionnaire
              </p>
              <ul className="menu-list text-white">
                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/user-admin"
                      className={`flex items-center p-2 mb-1 rounded-lg font-medium ${
                        router.pathname === '/dashboard/user-admin'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/user-admin'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <BsPersonFill />
                      </div>
                      <span className="grow ml-3 text-gray-600">Users</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/card-pzhk"
                      className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                        router.pathname === '/dashboard/card-pzhk'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/card-pzhk'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <RiSettings3Fill />
                      </div>
                      <span className="grow ml-3 text-gray-600">Context</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/cities"
                      className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                        router.pathname === '/dashboard/cities'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/cities'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <MdLocationCity />
                      </div>
                      <span className="grow ml-3 text-gray-600">Cities</span>
                    </Link>
                  </li>
                )}

                {/* Kjo mund të shihet për të gjithë, jo vetëm SUPER_ADMIN */}
                <li>
                  <Link
                    href="/dashboard/map-data"
                    className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                      router.pathname === '/dashboard/map-data'
                        ? 'bg-white shadow-lg'
                        : ' text-black'
                    }`}
                  >
                    <div
                      className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                        router.pathname === '/dashboard/map-data'
                          ? 'text-white bg-[#CB0C9F]'
                          : 'text-black bg-white'
                      }`}
                    >
                      <BsMap />
                    </div>
                    <span className="grow ml-3 text-gray-600">Map data</span>
                  </Link>
                </li>

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/statistics"
                      className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                        router.pathname === '/dashboard/statistics'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/statistics'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <AiOutlineLineChart />
                      </div>
                      <span className="grow ml-3 text-gray-600">Statistics</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/priority-admin"
                      className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                        router.pathname === '/dashboard/priority-admin'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/priority-admin'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <FaChartPie />
                      </div>
                      <span className="grow ml-3 text-gray-600">Priorities Chart</span>
                    </Link>
                  </li>
                )}

                {user?.role === RoleEnum.SUPER_ADMIN && (
                  <li>
                    <Link
                      href="/dashboard/problems-admin"
                      className={`flex items-center p-2 mb-1 mt-5 rounded-lg font-medium ${
                        router.pathname === '/dashboard/problems-admin'
                          ? 'bg-white shadow-lg'
                          : ' text-black'
                      }`}
                    >
                      <div
                        className={`w-8 h-8 p-1 rounded-lg ml-2 flex justify-center items-center ${
                          router.pathname === '/dashboard/problems-admin'
                            ? 'text-white bg-[#CB0C9F]'
                            : 'text-black bg-white'
                        }`}
                      >
                        <FaChartPie />
                      </div>
                      <span className="grow ml-3 text-gray-600">Problem charts</span>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>

          {/* Përmbajtja e brendshme */}
          <div className={`w-full ${SidebarOpen ? 'hidden' : ''}`}>
            <main className="w-full min-h-screen">
              <div className="hidden sm:block">
                <Header />
              </div>
              {children}
            </main>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
