import { motion } from "framer-motion"


export function ExpertiseCard({ title, description, icon }) {
  return (
    <motion.div
      className="bg-gray-100 p-8 rounded-lg shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center mb-4">
        <div className="mr-4 text-gray-800">{icon}</div>
        <h3 className="text-3xl font-semibold text-black dancfont">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

