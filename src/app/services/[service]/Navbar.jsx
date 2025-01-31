"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Home, Users, Mail, ChevronDown, Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Contact", icon: Mail, href: "/contact" },
]

const sectionItems = [
  "Wedding",
  "Portfolio Shoot",
  "Street Photography",
  "Exhibitions",
  "Baby Shoot",
  "Maternity Shoot",
  "Commercial Shoot",
  "Corporate Shoot",
  "Property Shoot",
  "Anniversary Shoot",
  "Birthday",
  "Rice Ceremony",
]

function Dropdown({ items }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" flex items-center text-white hover:text-amber-400 transition-colors duration-300"
      >
        More <ChevronDown className="ml-1" size={16} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="overflow-hidden absolute top-full left-0 bg-black bg-opacity-90 rounded-md py-2 mt-2 w-48"
          >
            {items.map((item) => (
              <Link
                key={item}
                href={`/services/${item.toLowerCase().replace(/\s+/g, "")}`}
                className="block px-4 py-2 text-sm text-white hover:bg-amber-400 hover:text-black transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      if (window.scrollY > 50) setIsOpen(false)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${Math.min(scrollY / 300, 0.8)})`,
        boxShadow: scrollY > 50 ? "0 2px 4px rgba(0,0,0,.1)" : "none",
      }}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center text-amber-400 text-3xl dancfont">
            Vivid & Vision
          </Link>
          <div className="hidden md:flex items-center md:mr-10 space-x-6">
          <Dropdown items={sectionItems} />
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-amber-400 transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
            
          </div>
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-black bg-opacity-90 md:hidden"
          >
            <div className="container mx-auto px-6 py-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-white hover:text-amber-400 transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="inline-block mr-2" size={18} />
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 border-t border-gray-700 pt-4">
                <p className="text-white mb-2">Services:</p>
                {sectionItems.map((item) => (
                  <Link
                    key={item}
                    href={`/services/${item.toLowerCase().replace(/\s+/g, "")}`}
                    className="block py-2 text-white hover:text-amber-400 transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

