import Image from "next/image"
import { motion } from "framer-motion"


export function TeamMember({ name, role, image }) {
  return (
    <motion.div className="group relative" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
      <div className="relative h-80 overflow-hidden rounded-lg">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          style={{ objectFit: "cover" }}
          className="transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-xl font-semibold text-white mb-1 dancfont">{name}</h3>
          <p className="text-sm text-gray-200">{role}</p>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border-2 border-gray-300 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  )
}

