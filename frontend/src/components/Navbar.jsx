import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import useAuth from "../hooks/useAuth"; // Import the useAuth hook

const Navbar = () => {
  const { user, logout } = useAuth();
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-white dark:bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          MemoTag
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex space-x-6 text-gray-700 dark:text-gray-200">
          <li>
            <a href="#" className="hover:text-primary" smooth="true">
              Home
            </a>
          </li>
          <li>
            <a href="#work" className="hover:text-primary" smooth="true">
              How it works
            </a>
          </li>
          <li>
            <a href="#Impact" className="hover:text-primary" smooth="true">
              Impact
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary" smooth="true">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Controls */}
        <div className="flex items-center gap-4">
          {/* Toggle Dark Mode */}
          <button
            onClick={toggleDarkMode}
            className="text-gray-700 dark:text-gray-200 cursor-pointer"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger Icon - Mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 cursor-pointer dark:text-gray-200"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Login/Logout Button */}
          {user ? (
            <button
              onClick={logout}
              className="text-gray-700 dark:text-gray-200 hover:text-primary"
            >
              Logout
            </button>
          ) : (
            <a
              href="/login"
              className="text-gray-700 dark:text-gray-200 hover:text-primary"
            >
              Login
            </a>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white dark:bg-gray-900 px-4 py-4 space-y-3 text-gray-700 dark:text-gray-200`}
      >
        <a
          href="#"
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 hover:text-primary"
        >
          Home
        </a>
        <a
          href="#work"
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 hover:text-primary"
        >
          How it works
        </a>
        <a
          href="#Impact"
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 hover:text-primary"
        >
          Impact
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="block py-2 px-4 hover:text-primary"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
