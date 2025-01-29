"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const services = [
    {
      title: "Wedding & Pre-Wedding",
      year: "2024",
      technologies: ["Candid", "Traditional", "Cinematic"],
      description: "Capturing your special moments with a perfect blend of traditional elegance and modern storytelling. Our wedding photography services ensure every precious moment is preserved forever.",
      image: "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_640.jpg"
    },
    {
      title: "Portfolio Shoot",
      year: "2024",
      technologies: ["Fashion", "Model", "Artistic"],
      description: "Professional portfolio photography services designed to showcase your unique personality and talent. Perfect for models, actors, and professionals seeking to make a lasting impression.",
      image: "https://cdn.pixabay.com/photo/2023/05/20/19/58/woman-8007247_1280.jpg"
    },
    {
      title: "Street Photography",
      year: "2024",
      technologies: ["Documentary", "Urban", "Lifestyle"],
      description: "Capturing the raw essence of urban life through candid street photography. Our approach focuses on authentic moments and the genuine spirit of city living.",
      image: "https://cdn.pixabay.com/photo/2020/02/09/22/56/london-4834823_640.jpg"
    },
    {
      title: "Exhibitions",
      year: "2024",
      technologies: ["Gallery", "Art", "Events"],
      description: "Specialized photography services for art exhibitions, galleries, and cultural events. We ensure your artwork and exhibitions are documented with precision and artistic sensitivity.",
      image: "https://cdn.pixabay.com/photo/2014/12/29/08/29/lens-582605_640.jpg"
    },
    {
      title: "Baby Shoot",
      year: "2024",
      technologies: ["Newborn", "Infant", "Milestone"],
      description: "Gentle and professional baby photography capturing those precious early moments. Our specialized approach ensures comfortable and safe sessions for your little ones.",
      image: "https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_640.jpg"
    },
    {
      title: "Maternity Shoot",
      year: "2024",
      technologies: ["Pregnancy", "Family", "Studio"],
      description: "Celebrating the beauty of motherhood through elegant maternity photography. We create timeless images that capture this special journey in your life.",
      image: "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg"
    },
    {
      title: "Commercial Shoot",
      year: "2024",
      technologies: ["Product", "Brand", "Marketing"],
      description: "Professional commercial photography that elevates your brand. From product photography to marketing materials, we help businesses showcase their best features.",
      image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg"
    },
    {
      title: "Corporate Shoot",
      year: "2024",
      technologies: ["Business", "Professional", "Team"],
      description: "Corporate photography services tailored for the modern business environment. Including headshots, team photos, and event coverage for professional settings.",
      image: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
    },
    {
      title: "Property Shoot",
      year: "2024",
      technologies: ["Real Estate", "Interior", "Architectural"],
      description: "Expert property photography showcasing real estate at its finest. We capture spaces in their best light, helping properties stand out in the market.",
      image: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg"
    },
    {
      title: "Anniversary Shoot",
      year: "2024",
      technologies: ["Couple", "Celebration", "Portrait"],
      description: "Romantic anniversary photography celebrating your journey together. We create beautiful memories that capture the love and joy of your special milestone.",
      image: "https://cdn.pixabay.com/photo/2014/08/29/07/22/lens-430621_640.jpg"
    },
    {
      title: "Birthday",
      year: "2024",
      technologies: ["Party", "Event", "Celebration"],
      description: "Vibrant birthday photography services capturing all the fun and excitement. From kids' parties to milestone celebrations, we document every special moment.",
      image: "https://cdn.pixabay.com/photo/2022/08/02/18/30/birthday-party-7361026_640.jpg"
    },
    {
      title: "Rice Ceremony",
      year: "2024",
      technologies: ["Traditional", "Cultural", "Ritual"],
      description: "Specialized photography for traditional rice ceremony celebrations. We capture this important cultural milestone with respect and attention to detail.",
      image: "https://media.istockphoto.com/id/1298810011/photo/beautifully-decorated-pooja-thali-for-festival-celebration-to-worship-rice-grain-and-kumkum.jpg?s=2048x2048&w=is&k=20&c=rfDwaIqkBjtFH4YCuvFaQB1ZSXdbhrR62kC4YeSqB7A="
    }
  ];

export function Services() {
  return (
    <section className="bg-black min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="space-y-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={800}
                  height={600}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>

              <div className="flex flex-wrap items-start gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="px-4 py-1 rounded-full border border-neutral-700 text-neutral-400"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.year}
                  </motion.div>
                  <div className="px-6 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm">
                    <p className="text-neutral-400">{service.technologies.join(" • ")}</p>
                  </div>
                </div>
              </div>

              <motion.h2
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
                whileHover={{ x: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {service.title}
              </motion.h2>

              <p className="text-neutral-400 text-lg max-w-3xl">{service.description}</p>

              <motion.button
                className="mt-6 px-6 py-2 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

