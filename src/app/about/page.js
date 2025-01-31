"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExpertiseCard } from "./Card"
import { TeamMember } from "./Team"
import { MinimalButton } from "./Goldenbutton"
import { Camera, Aperture, Sparkles, Users } from "lucide-react"
import { NavBar } from "./Navbar"
import { Footer } from "../Footer"

export default function AboutPage() {
  const [activeExpertise, setActiveExpertise] = useState(0)

  const expertiseAreas = [
    {
      title: "Visionary Artistry",
      description:
        "We transform ordinary moments into extraordinary masterpieces, capturing the essence of life through our unique artistic vision.",
      icon: <Camera className="w-8 h-8" />,
    },
    {
      title: "Technical Mastery",
      description:
        "Our unparalleled expertise in cutting-edge photographic techniques ensures every image is crafted to perfection.",
      icon: <Aperture className="w-8 h-8" />,
    },
    {
      title: "Innovative Approach",
      description:
        "We constantly push the boundaries of photography, blending traditional methods with groundbreaking technologies.",
      icon: <Sparkles className="w-8 h-8" />,
    },
    {
      title: "Client Experience",
      description:
        "Every shoot is a bespoke journey, tailored to capture your unique story and exceed your expectations.",
      icon: <Users className="w-8 h-8" />,
    },
  ]

  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "Visionary Founder & Master Photographer",
      image: "https://www.shutterstock.com/image-photo/smiling-cheerful-young-adult-african-260nw-1850821510.jpg",
    },
    { name: "Bob Smith", role: "Light Sculpting Specialist", image: "https://www.shutterstock.com/image-photo/happy-dreaming-businessman-standing-by-260nw-2161634855.jpg" },
    { name: "Carol Williams", role: "Composition Virtuoso", image: "https://www.shutterstock.com/image-photo/happy-young-man-sitting-home-260nw-2248472067.jpg" },
    { name: "David Brown", role: "Post-Production Maestro", image: "https://www.shutterstock.com/image-photo/happy-dreaming-businessman-standing-by-260nw-2161634855.jpg" },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
        <NavBar />
        <header className="py-20 bg-gradient-to-b from-white to-gray-100">
        <motion.h1
          className="text-6xl font-bold text-center mt-20"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="dancfont text-black">Vivid and Vision</span>
        </motion.h1>
        <motion.p
          className="text-2xl text-center mt-4 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Illuminating Moments, Crafting Legacies
        </motion.p>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="mb-20">
          <h2 className="dancfont text-4xl font-bold mb-8 text-center text-black">Our Expertise</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {expertiseAreas.map((area, index) => (
              <MinimalButton key={index} onClick={() => setActiveExpertise(index)} isActive={activeExpertise === index}>
                {area.title}
              </MinimalButton>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <ExpertiseCard key={activeExpertise} {...expertiseAreas[activeExpertise]} />
          </AnimatePresence>
        </section>

        <section>
          <h2 className="dancfont text-4xl font-bold mb-12 text-center text-black">Meet Our Visionary Artists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember key={index} {...member} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
