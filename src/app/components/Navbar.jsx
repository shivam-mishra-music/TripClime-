import Link from 'next/link'
import { Home, Info, CloudSun, BookOpen, HelpCircle } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center font-poppins">
      <h1 className="text-2xl font-bold text-blue-600 flex items-center gap-2">
        <CloudSun className="w-6 h-6 text-yellow-500" />
        Check Weather
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
    </nav>
  )
}
