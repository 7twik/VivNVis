"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const servicearr = [
  { name: "Wedding & Pre-Wedding", image: "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_640.jpg" },
  { name: "Portfolio Shoot", image: "https://cdn.pixabay.com/photo/2023/05/20/19/58/woman-8007247_1280.jpg" },
  { name: "Street Photography", image: "https://cdn.pixabay.com/photo/2020/02/09/22/56/london-4834823_640.jpg" },
  { name: "Exhibitions", image: "https://cdn.pixabay.com/photo/2014/12/29/08/29/lens-582605_640.jpg" },
  { name: "Baby Shoot", image: "https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_640.jpg" },
  { name: "Maternity Shoot", image: "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg" },
  { name: "Commercial Shoot", image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg" },
  { name: "Corporate Shoot", image: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg" },
  { name: "Property Shoot", image: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg" },
  { name: "Anniversary Shoot", image: "https://cdn.pixabay.com/photo/2014/08/29/07/22/lens-430621_640.jpg" },
  { name: "Birthday", image: "https://cdn.pixabay.com/photo/2022/08/02/18/30/birthday-party-7361026_640.jpg" },
  { name: "Rice Ceremony", image: "https://media.istockphoto.com/id/1298810011/photo/beautifully-decorated-pooja-thali-for-festival-celebration-to-worship-rice-grain-and-kumkum.jpg?s=2048x2048&w=is&k=20&c=rfDwaIqkBjtFH4YCuvFaQB1ZSXdbhrR62kC4YeSqB7A=" },
]

export function Services() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-white text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {servicearr.map((service, index) => (
            <motion.div
              key={service.name}
              className="relative group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  width={600}
                  height={600}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                  <p className="text-white/80 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Capture life's precious moments with our professional {service.name.toLowerCase()} services.
                  </p>
                  <motion.button
                    className="bg-white text-black py-2 px-4 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Read More
                  </motion.button>
                </div>
              </div>
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -inset-4 bg-amber-400/20 rounded-lg -z-10"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

