"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import { Search, ShoppingCart, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  // Scroll to top when route changes (with smooth behavior)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [location.pathname])

  // Check if a link is active
  const isActive = (path: string) => {
    return location.pathname === path
  }

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold">
            KURISKU
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { path: "/", label: "Home" },
              { path: "/products", label: "Products" },
              { path: "/about", label: "About" },
              { path: "/contact", label: "Contact" },
            ].map((item) => (
              <div key={item.path} className="relative">
                <Link to={item.path} className="font-medium py-2 inline-block">
                  {item.label}
                </Link>
                {isActive(item.path) && (
                  <motion.div
                    className="absolute bottom-0 left-0 h-[3px] rounded-full bg-[#000000]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-1">
            <button aria-label="Search" className="p-2">
              <Search size={20} />
            </button>
            <Link to="/cart" aria-label="Cart" className="p-2">
              <ShoppingCart size={20} />
            </Link>
            <div className="rounded-full h-[16px] w-0.5 mx-2 bg-gray-200"></div>
            <button className="hidden md:block bg-black text-white px-4 py-[6px] rounded text-sm">Sign Up</button>

            {/* Mobile menu button */}
            <button className="md:hidden p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4"
          >
            <nav className="flex flex-col space-y-4">
              {[
                { path: "/", label: "Home" },
                { path: "/products", label: "Products" },
                { path: "/about", label: "About" },
                { path: "/contact", label: "Contact" },
              ].map((item) => (
                <div key={item.path} className="relative">
                  <Link to={item.path} className="font-medium py-2 inline-block">
                    {item.label}
                  </Link>
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-black"
                      initial={{ width: 0 }}
                      animate={{ width: "30%" }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              ))}
              <div className="flex space-x-4 pt-4">
                <button className="bg-black text-white px-4 py-2 rounded text-sm flex-1">Sign Up</button>
              </div>
            </nav>
          </motion.div>
        )}
      </div>
    </header>
  )
}

export default Navbar

