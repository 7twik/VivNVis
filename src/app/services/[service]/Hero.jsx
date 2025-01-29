"use client"

import { useEffect, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { NavBar } from "./Navbar"
import { Data } from "./data"
export default function Hero({service}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div ref={ref} className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <motion.video
        style={{ scale }}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/v2.mp4" type="video/mp4" />
      </motion.video>

      {/* Overlay */}
      <motion.div style={{ opacity }} className="absolute inset-0 bg-black/40" />

      {/* Navigation */}
      <NavBar />

      {/* Content */}
      <motion.div
        style={{ opacity, y: textY }}
        className="relative z-10 h-full flex flex-col justify-center px-4 md:px-20 lg:px-32 max-w-3xl"
      >
        <h2 className="dancfont text-3xl font-thin md:text-5xl lg:text-6xl text-white leading-tight mb-6">
          {Data[service].heading}
        </h2>
        <p className="text-lg font-thin md:text-xl text-white mb-8">We get the perfect shot, every time!</p>
        <motion.a
  href="/portfolio"
  className="inline-block w-fit border-2 border-white text-white px-6 py-2 text-lg uppercase tracking-wider rounded-lg hover:bg-white hover:text-black transition-colors duration-300"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View Our Work
</motion.a>

      </motion.div>
    </div>
  )
}

