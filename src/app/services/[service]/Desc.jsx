"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Data } from "./data"
// In a real application, these would come from your CMS or database
const images = [
  {
    url: "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_640.jpg",
    alt: "Wedding photography scene"
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/05/20/19/58/woman-8007247_1280.jpg",
    alt: "Professional portfolio model shoot"
  },
  {
    url: "https://cdn.pixabay.com/photo/2020/02/09/22/56/london-4834823_640.jpg",
    alt: "Urban street photography"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/12/29/08/29/lens-582605_640.jpg",
    alt: "Art exhibition photography"
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_640.jpg",
    alt: "Newborn baby photoshoot"
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg",
    alt: "Maternity photography session"
  },
  {
    url: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg",
    alt: "Commercial product photography"
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg",
    alt: "Corporate professional photoshoot"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg",
    alt: "Real estate property photography"
  },
  {
    url: "https://cdn.pixabay.com/photo/2014/08/29/07/22/lens-430621_640.jpg",
    alt: "Anniversary couple photoshoot"
  },
  {
    url: "https://cdn.pixabay.com/photo/2022/08/02/18/30/birthday-party-7361026_640.jpg",
    alt: "Birthday celebration photography"
  },
  {
    url: "https://media.istockphoto.com/id/1298810011/photo/beautifully-decorated-pooja-thali-for-festival-celebration-to-worship-rice-grain-and-kumkum.jpg?s=2048x2048&w=is&k=20&c=rfDwaIqkBjtFH4YCuvFaQB1ZSXdbhrR62kC4YeSqB7A=",
    alt: "Traditional rice ceremony ritual"
  }
];

export function Desc({ datd,service }) {
  const [currentImage, setCurrentImage] = useState(0)
  const carouselRef = useRef(null)
const [imgarr, setImgarr] = useState(datd.length===0?images:datd)
  const scroll = (direction) => {
    if (direction==="right") {
      if (currentImage === imgarr.length - 1) {
        setCurrentImage(0)
      } else {
        setCurrentImage(currentImage + 1)
      }
    }
    else
    {
      if (currentImage === 0) {
        setCurrentImage(imgarr.length - 1)
      } else {
        setCurrentImage(currentImage - 1)
      }

    }
  }
    
  
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        {/* Description */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="dancfont text-black text-3xl md:text-4xl font-serif mb-6">Capturing Life&apos;s Beautiful Moments</h2>
          <p className="text-gray-600 text-lg">
            {Data[service].detail}
          </p>
        </div>

        {/* Main Image */}
        <div className=" mb-8 flex justify-center w-[100vw]">
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative md:h-[80vh] md:w-[80vh] w-[90vw] h-[90vw]"
          >
             <button
            onClick={() => scroll("left")}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-transparent backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-gray-400 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
            <Image
              src={imgarr[currentImage].url || "/placeholder.svg"}
              alt="alttt"
              fill
              className="rounded-lg object-cover md:px-0"
            />
             <button
            onClick={() => scroll("right")}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-transparent hover:bg-gray-300 backdrop-blur-sm p-2 rounded-full shadow-lg  transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          </motion.div>
        </div>

        {/* Carousel */}
        <div className="relative flex justify-center">
         

          <div
            ref={carouselRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {imgarr.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`flex-none w-32 h-32 relative rounded-lg overflow-hidden cursor-pointer ${
                  currentImage === index ? "ring-2 ring-offset-2 ring-black" : ""
                }`}
                onClick={() => setCurrentImage(index)}
              >
                <Image src={image.url || "/placeholder.svg"} alt="altt" fill className="object-cover" />
              </motion.div>
            ))}
          </div>

         
        </div>
      </div>
    </section>
  )
}

