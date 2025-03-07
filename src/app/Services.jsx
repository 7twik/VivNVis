"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react";

const services = [
  {
    title: "Wedding",
    year: "2024",
    link:"/services/wedding",
    technologies: ["Candid", "Traditional", "Cinematic"],
    description: "Capturing your special moments with a perfect blend of traditional elegance and modern storytelling. Our wedding photography services ensure every precious moment is preserved forever.",
    image: "https://cdn.pixabay.com/photo/2025/01/11/09/08/wedding-9325558_640.jpg"
  },
  {
    title: "Portfolio Shoot",
    year: "2024",
    link:"/services/portfolioshoot",
    technologies: ["Fashion", "Model", "Artistic"],
    description: "Professional portfolio photography services designed to showcase your unique personality and talent. Perfect for models, actors, and professionals seeking to make a lasting impression.",
    image: "https://cdn.pixabay.com/photo/2023/05/20/19/58/woman-8007247_1280.jpg"
  },
  {
    title: "Street Photography",
    year: "2024",
    link:"/services/streetphotography",
    technologies: ["Documentary", "Urban", "Lifestyle"],
    description: "Capturing the raw essence of urban life through candid street photography. Our approach focuses on authentic moments and the genuine spirit of city living.",
    image: "https://cdn.pixabay.com/photo/2020/02/09/22/56/london-4834823_640.jpg"
  },
  {
    title: "Exhibitions",
    year: "2024",
    link:"/services/exhibitions",
    technologies: ["Gallery", "Art", "Events"],
    description: "Specialized photography services for art exhibitions, galleries, and cultural events. We ensure your artwork and exhibitions are documented with precision and artistic sensitivity.",
    image: "https://cdn.pixabay.com/photo/2014/12/29/08/29/lens-582605_640.jpg"
  },
  {
    title: "Baby Shoot",
    year: "2024",
    services:"/services/babyshoot",
    technologies: ["Newborn", "Infant", "Milestone"],
    description: "Gentle and professional baby photography capturing those precious early moments. Our specialized approach ensures comfortable and safe sessions for your little ones.",
    image: "https://cdn.pixabay.com/photo/2023/06/11/14/38/baby-8056153_640.jpg"
  },
  {
    title: "Maternity Shoot",
    year: "2024",
    link:"/services/maternityshoot",
    technologies: ["Pregnancy", "Family", "Studio"],
    description: "Celebrating the beauty of motherhood through elegant maternity photography. We create timeless images that capture this special journey in your life.",
    image: "https://cdn.pixabay.com/photo/2023/05/29/00/24/blue-tit-8024809_640.jpg"
  },
  {
    title: "Commercial Shoot",
    year: "2024",
    link:"/services/commercialshoot",
    technologies: ["Product", "Brand", "Marketing"],
    description: "Professional commercial photography that elevates your brand. From product photography to marketing materials, we help businesses showcase their best features.",
    image: "https://cdn.pixabay.com/photo/2016/01/09/18/27/camera-1130731_640.jpg"
  },
  {
    title: "Corporate Shoot",
    year: "2024",
    link:"/services/corporateshoot",
    technologies: ["Business", "Professional", "Team"],
    description: "Corporate photography services tailored for the modern business environment. Including headshots, team photos, and event coverage for professional settings.",
    image: "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_640.jpg"
  },
  {
    title: "Pre-wedding Shoot",
    year: "2024",
    link:"/services/prewedding",
    technologies: ["Photography", "Storytelling", "Cinematography"],
    description: "Expert pre-wedding photography capturing love stories at their finest. We frame moments in their most romantic light, helping couples treasure their memories forever.",
    image: "https://cdn.pixabay.com/photo/2014/12/27/15/31/camera-581126_640.jpg"
  },
  {
    title: "Anniversary Shoot",
    year: "2024",
    link:"/services/anniversaryshoot",
    technologies: ["Couple", "Celebration", "Portrait"],
    description: "Romantic anniversary photography celebrating your journey together. We create beautiful memories that capture the love and joy of your special milestone.",
    image: "https://cdn.pixabay.com/photo/2014/08/29/07/22/lens-430621_640.jpg"
  },
  {
    title: "Birthday",
    year: "2024",
    link:"/services/birthday",
    technologies: ["Party", "Event", "Celebration"],
    description: "Vibrant birthday photography services capturing all the fun and excitement. From kids' parties to milestone celebrations, we document every special moment.",
    image: "https://cdn.pixabay.com/photo/2022/08/02/18/30/birthday-party-7361026_640.jpg"
  },
  {
    title: "Rice Ceremony",
    year: "2024",
    link: "/services/riceceremony",
    technologies: ["Traditional", "Cultural", "Ritual"],
    description: "Specialized photography for traditional rice ceremony celebrations. We capture this important cultural milestone with respect and attention to detail.",
    image: "https://media.istockphoto.com/id/1298810011/photo/beautifully-decorated-pooja-thali-for-festival-celebration-to-worship-rice-grain-and-kumkum.jpg?s=2048x2048&w=is&k=20&c=rfDwaIqkBjtFH4YCuvFaQB1ZSXdbhrR62kC4YeSqB7A="
  }
];
export function Services({data}) {
  const [dataa, setData] = useState([
    {
      title: "Wedding",
      title2: "Wedding",
      year: "2024",
      link:"/services/wedding",
      technologies: ["Candid", "Traditional", "Cinematic"],
      description: "Capturing your special moments with a perfect blend of traditional elegance and modern storytelling. Our wedding photography services ensure every precious moment is preserved forever.",
      image: data.im1
    },
    {
      title: "Portfolio Shoot",
      title2: "Portfolio Shoot",
      year: "2024",
      link:"/services/portfolioshoot",
      technologies: ["Fashion", "Model", "Artistic"],
      description: "Professional portfolio photography services designed to showcase your unique personality and talent. Perfect for models, actors, and professionals seeking to make a lasting impression.",
      image: data.im2
    },
    {
      title: "Street Photography",
      title2: "Street Photography",
      year: "2024",
      link:"/services/streetphotography",
      technologies: ["Documentary", "Urban", "Lifestyle"],
      description: "Capturing the raw essence of urban life through candid street photography. Our approach focuses on authentic moments and the genuine spirit of city living.",
      image: data.im3
    },
    {
      title: "Exhibitions",
      title2: "Exhibitions",
      year: "2024",
      link:"/services/exhibitions",
      technologies: ["Gallery", "Art", "Events"],
      description: "Specialized photography services for art exhibitions, galleries, and cultural events. We ensure your artwork and exhibitions are documented with precision and artistic sensitivity.",
      image: data.im4
    },
    {
      title: "Baby Shoot",
      title2: "Baby Shoot",
      year: "2024",
      link:"/services/babyshoot",
      technologies: ["Newborn", "Infant", "Milestone"],
      description: "Gentle and professional baby photography capturing those precious early moments. Our specialized approach ensures comfortable and safe sessions for your little ones.",
      image: data.im5
    },
    {
      title: "Maternity Shoot",
      title2: "Maternity Shoot",
      year: "2024",
      link:"/services/maternityshoot",
      technologies: ["Pregnancy", "Family", "Studio"],
      description: "Celebrating the beauty of motherhood through elegant maternity photography. We create timeless images that capture this special journey in your life.",
      image: data.im6
    },
    {
      title: "Commercial Shoot",
      title2: "Commercial Shoot",
      year: "2024",
      link:"/services/commercialshoot",
      technologies: ["Product", "Brand", "Marketing"],
      description: "Professional commercial photography that elevates your brand. From product photography to marketing materials, we help businesses showcase their best features.",
      image: data.im7
    },
    {
      title: "Corporate Shoot",
      title2: "Corporate Shoot",
      year: "2024",
      link:"/services/corporateshoot",
      technologies: ["Business", "Professional", "Team"],
      description: "Corporate photography services tailored for the modern business environment. Including headshots, team photos, and event coverage for professional settings.",
      image: data.im8
    },
    {
      title: "Pre-wedding Shoot",
      title2: "Pre-wedding Shoot",
      year: "2024",
      link:"/services/prewedding",
      technologies: ["Photography", "Storytelling", "Cinematography"],
      description: "Expert pre-wedding photography capturing love stories at their finest. We frame moments in their most romantic light, helping couples treasure their memories forever.",
      image: data.im9
    },
    {
      title: "Anniversary Shoot",
      title2: "Anniversary Shoot",
      year: "2024",
      link:"/services/anniversaryshoot",
      technologies: ["Couple", "Celebration", "Portrait"],
      description: "Romantic anniversary photography celebrating your journey together. We create beautiful memories that capture the love and joy of your special milestone.",
      image: data.im10
    },
    {
      title: "Birthday",
      title2: "Birthday",
      year: "2024",
      link:"/services/birthday",
      technologies: ["Party", "Event", "Celebration"],
      description: "Vibrant birthday photography services capturing all the fun and excitement. From kids' parties to milestone celebrations, we document every special moment.",
      image: data.im11
    },
    {
      title: "Rice Ceremony",
      title2: "Rice Ceremony",
      year: "2024",
      link: "/services/riceceremony",
      technologies: ["Traditional", "Cultural", "Ritual"],
      description: "Specialized photography for traditional rice ceremony celebrations. We capture this important cultural milestone with respect and attention to detail.",
      image: data.im12
    }
  ])

  return (
    <section className="bg-white min-h-screen py-32">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-black text-center mb-12 dancfont">WE ARE WITH YOU IN</h2>
        </div>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {dataa.map((service, index) => (
            <motion.div
            id={service.title2.toLowerCase().replace(/\s+/g, "")}
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`relative flex flex-col ${service.fullWidth ? "md:col-span-2" : ""}`}
            >
              

              {/* Image Container with Overlay */}
              <div className={`relative overflow-hidden rounded-lg ${
                service.tall ? "h-[800px]" : service.fullWidth ? "h-[600px]" : "h-[400px]"
              }`}>
                <Image 
                  src={service.image || "/placeholder.svg"} 
                  alt={service.title} 
                  fill 
                  className="object-cover" 
                />
                {/* Mobile Title (above image) */}
              <div className="md:hidden  absolute inset-0 bg-gradient-to-t from-black/30 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex flex-wrap items-start gap-4 mb-4">
                <motion.h2
                  className="text-2xl font-bold text-white"
                  whileHover={{ x: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {service.title}
                </motion.h2>
                </div>
                </div>
              </div>
                {/* Overlay for laptop - only year, technologies, and title */}
                <div className="absolute inset-0 bg-gradient-to-t  to-transparent hidden md:block">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <div className="flex flex-wrap items-start gap-4 mb-4">
                      <div className="flex items-center gap-4">
                        
                        <div className="px-6 py-1 rounded-full border border-neutral-700 bg-neutral-900/50 backdrop-blur-sm">
                          <p className="text-neutral-200">{service.technologies.join(" • ")}</p>
                        </div>
                      </div>
                    </div>

                   
                  </div>
                </div>
              </div>

              {/* Content below image */}
              <div className="p-6  mt-4">
              <motion.h2
                      className="text-3xl dancfont md:text-4xl lg:text-5xl font-bold text-black "
                      whileHover={{ x: 20 }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      {service.title}
                    </motion.h2>
                {/* Mobile metadata */}
                <div className="flex flex-wrap items-start gap-4 mb-4 md:hidden">
                  <div className="flex flex-wrap items-center gap-4">
                    
                    <div className="px-6 py-1 rounded-full border border-neutral-700 bg-neutral-900/50">
                      <p className="text-neutral-100 text-sm">{service.technologies.join(" • ")}</p>
                    </div>
                  </div>
                </div>

                <p className="text-neutral-400 text-base mb-6">{service.description}</p>

                <motion.button
                 className="inline-block w-fit border-2 border-black text-black px-6 py-2 text-lg uppercase tracking-wider rounded-lg hover:bg-black hover:text-white transition-colors duration-300"
                 whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={()=>{
                    window.location.href="./"+service.link;
                  }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}