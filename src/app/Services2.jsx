"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

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
  

export function ServicesCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scrollToIndex = (index: number) => {
    if (carouselRef.current) {
      const scrollWidth = carouselRef.current.scrollWidth
      const itemWidth = scrollWidth / services.length
      carouselRef.current.scrollTo({
        left: itemWidth * index,
        behavior: "smooth",
      })
    }
    setActiveIndex(index)
  }

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % services.length
    scrollToIndex(newIndex)
  }

  const prevSlide = () => {
    const newIndex = (activeIndex - 1 + services.length) % services.length
    scrollToIndex(newIndex)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-12">Our Services</h2>
        <div className="relative">
          <motion.div
            ref={carouselRef}
            className="flex overflow-x-hidden snap-x snap-mandatory"
            whileTap={{ cursor: "grabbing" }}
          >
            {servicearr.map((service, index) => (
              <motion.div
                key={service.name}
                className="min-w-full flex flex-col items-center justify-center snap-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative w-full max-w-2xl aspect-video mb-8">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.name}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
                <h3 className="text-2xl font-semibold text-black mb-4">{service.name}</h3>
                <p className="text-gray-600 text-center max-w-md mb-6">
                  Capture life's precious moments with our professional {service.name.toLowerCase()} services.
                </p>
                <motion.button
                  className="bg-black text-white py-2 px-6 rounded-full text-sm font-semibold"
                  whileHover={{ scale: 1.05, backgroundColor: "#333" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6 text-black" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6 text-black" />
          </button>
        </div>
        <div className="flex justify-center mt-8 space-x-2">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? "bg-black" : "bg-gray-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
