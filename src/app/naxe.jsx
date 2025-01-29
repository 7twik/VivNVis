"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Camera, Home, Users, Mail, MoreHorizontal } from "lucide-react"

const navItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Portfolio", icon: Camera, href: "/portfolio" },
  { name: "Contact", icon: Mail, href: "/contact" },
  { name: "More", icon: MoreHorizontal, href: "/more" },
]

export function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeItem, setActiveItem] = useState("Home")

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 p-4 md:top-0 md:bottom-auto">
      <div className="container mx-auto">
        <motion.div
          className="bg-black/80 backdrop-blur-md rounded-full p-2 flex items-center justify-between"
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <Link href="/" className="text-white font-serif text-xl px-4">
            BRAHMA
            <span className="block text-xs text-amber-400 font-sans italic">studio</span>
          </Link>
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                className={`relative p-2 text-white rounded-full ${activeItem === item.name ? "bg-white/20" : ""}`}
                onClick={() => {
                  setActiveItem(item.name)
                  setIsOpen(!isOpen)
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <item.icon size={24} />
                {activeItem === item.name && (
                  <motion.span className="absolute bottom-0 left-0 right-0 h-1 bg-amber-400" layoutId="underline" />
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg p-8 flex flex-col items-center space-y-4"
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-black text-xl hover:text-amber-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

