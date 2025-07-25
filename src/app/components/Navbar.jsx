"use client"; 
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { signOut } from 'firebase/auth';
import { auth } from '../../../lib/firebaseConfig';
import { useAuth } from '../context/authContext';
import { Home, Info, CloudSun, BookOpen, HelpCircle,LogIn,
  LogOut } from 'lucide-react'

export default function Navbar() {
  const { user } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center font-poppins">
      <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <CloudSun className="w-6 h-6 text-yellow-500" />
        TripClime
      </h1>

      <ul className="flex gap-4 md:flex hidden">
        <li className="group relative">
          <Link
            href="/"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"

          >
            <Home className="w-5 h-5" /> Home
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/about"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"

          >
            <Info className="w-5 h-5" /> About
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/weather"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"

          >
            <CloudSun className="w-5 h-5" /> Weather
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/blog"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"

          >
            <BookOpen className="w-5 h-5" /> Blog
          </Link>
        </li>
        <li className="group relative">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2 rounded-md text-gray-700 hover:bg-blue-100 hover:text-blue-700 transition duration-200"

          >
            <HelpCircle className="w-5 h-5" /> Help
          </Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        {user ? (
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <LogIn className="w-4 h-4" />
            Login
          </Link>
        )}
      </div>
    </nav>
  )
}
