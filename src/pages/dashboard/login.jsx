
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaUser } from 'react-icons/fa';
import { MdLockOutline } from 'react-icons/md';
import { useDashboardAuth } from '../../../context/DashboardAuthContext';
const ErrorMessagePopup = ({ message, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-10">
      <div className="bg-white p-5 rounded-xl flex flex-col items-center">
        <h3 className="text-red-500 mb-3 font-bold">{message}</h3>
        <button
          onClick={onClose}
          className="bg-red-500 text-white px-2 py-2 rounded-full"
        >
          Close
        </button>
      </div>
    </div>
  );
};
export default function DashboardLogin() {
  const router = useRouter();
  const { login: loginContext } = useDashboardAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('/api/admin/login', {
        username,
        password,
      });
      setToken(data.token);
      loginContext({
        username: data.username,
        role: data.role, 
        token: data.token,
      });
      router.push('/dashboard/dashboard');
    } catch (err) {
      setErrorMessage(
        err.response?.data?.message || 'Login failed. Please check your credentials.'
      );
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#F8F8F8] px-4">
      {errorMessage && (
        <ErrorMessagePopup
          message={errorMessage}
          onClose={() => setErrorMessage('')}
        />
      )}

      <main className="flex flex-col items-center justify-center w-full flex-1 text-center">
        <div className="bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row w-full max-w-4xl">
          <div className="w-full md:w-3/5 p-5">
            <h2 className="text-3xl font-bold text-black mt-9">Sign in to Dashboard</h2>
            <div className="border-2 w-10 border-black inline-block mb-2"></div>
            <div className="text-gray-400 my-3">Use your username and password</div>

            <form onSubmit={handleLogin} className="space-y-4 bg-white">
              <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 bg-gray-100 p-2 flex items-center">
                  <FaUser className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 p-2 text-sm outline-none flex-1"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-full md:w-1/2 bg-gray-100 p-2 flex items-center">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    className="bg-gray-100 p-2 text-sm outline-none flex-1"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button
                className="border-2 border-[#a93258] rounded-full inline-block font-semibold hover:bg-[#a93258] hover:text-white text-[#a93258] py-2 w-1/4"
                type="submit"
              >
                Login
              </button>
            </form>
            {token && (
              <p className="text-center mt-4 text-sm text-green-600">
                Your JWT: {token}
              </p>
            )}
          </div>
          <div className="bg-[#F8F9FA] w-full md:w-2/5 text-black rounded-b-2xl md:rounded-tr-2xl md:rounded-br-2xl py-9 px-12">
            <div className="flex justify-center font-bold">
              <Image src="/insi.png" alt="Logo" width={400} height={500} />
            </div>
            <div className="border-2 w-10 border-[#a93258] inline-block mb-2"></div>
            <p className="mb-2">
              Welcome to our app. Feel free to contact us on social media:
            </p>
            <div className="flex justify-center my-2">
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="#"
                className="border-2 border-gray-200 rounded-full p-3 mx-1"
              >
                <FaLinkedinIn />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
