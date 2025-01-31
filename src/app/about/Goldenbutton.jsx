import { motion } from "framer-motion"


export function MinimalButton({ children, onClick, isActive }) {
  return (
    <motion.button
      className={`dancfont px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 ${
        isActive ? "bg-black text-white" : "bg-white text-black border border-black hover:bg-gray-100"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

