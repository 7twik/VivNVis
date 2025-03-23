"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const testimonials = [
  [
    {
      name: "Paul A.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "The photography team captured our wedding day perfectly. Every moment was beautifully documented, and the final results exceeded our expectations.",
    },
    {
      name: "Cindy J.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "Professional, creative, and incredibly talented. They made our commercial photoshoot a breeze and delivered stunning results.",
    },
    {
      name: "Michael R.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "The attention to detail and creativity they brought to our product photography was exceptional. Highly recommended!",
    },
  ],
  [
    {
      name: "Andrea B.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "Our family portraits turned out amazing. They made everyone feel comfortable and captured genuine moments.",
    },
    {
      name: "Alex F.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "The team's professionalism and artistic vision made our corporate event coverage stand out. Outstanding service!",
    },
    {
      name: "Claude C.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "Incredible talent and dedication. They went above and beyond to capture the perfect shots for our campaign.",
    },
  ],
  [
    {
      name: "Danny G.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "The quality of work and attention to detail is unmatched. They truly understand how to tell a story through photography.",
    },
    {
      name: "Ian D.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote:
        "Working with them was a pleasure. They brought our vision to life with their exceptional photography skills.",
    },
    {
      name: "Ben S.",
      role: "Founder of XYZ",
      image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png",
      quote: "The results were beyond what we imagined. Their expertise and creativity truly shine in every photo.",
    },
  ],
]

function TestimonialRow({ items, reverse = false }) {
  return (
    <div
      className="flex gap-6  animate-scroll"
      style={
        {
          animationDirection: reverse ? "reverse" : "normal",
          "--tw-scroll-duration": "40s",
        } 
      }
    >
      {items.length==0?<></>:items.map((item, index) => ( 
     
        <div key={index} className="flex-none w-[400px] bg-[#0A0F1C] rounded-lg overflow-hidden">
          <div className="flex items-start gap-4 p-6">
            <div className="flex-none w-20 h-20 rounded-lg overflow-hidden">
              <Image
                src={item.Url || "/placeholder.svg"}
                alt={item.Name}
                width={80}
                height={80}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white mb-1">{item.Name}</h3>
              <p className="text-gray-400 text-sm mb-3">{item.Designation}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{item.Message}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function Testimonial() {
  const [test, setTest] = useState([])
  const getd=async()=>{
    const response = await fetch("/api/test")
    const dataa = await response.json()
    console.log(dataa)
    var temp=[
      dataa.data,
      dataa.data
    ]
    setTest(temp)
  }
  useEffect(() => {
    getd()
  }, [])
  return (
    <section className="bg-white py-32 overflow-hidden">
      <div className="container mx-auto px-4 mb-12 text-center">
        <h2 className="dancfont text-4xl md:text-5xl font-bold text-black mb-4">Testimonials</h2>
        <p className="dancfont text-gray-800 max-w-2xl mx-auto">
          Hear what our clients have to say about their experience working with us. We take pride in delivering
          exceptional photography services.
        </p>
      </div>
      <div className="space-y-8">
        {test.map((row, index) => (
          <TestimonialRow key={index} items={row} reverse={index % 2 === 1} />
        ))}
      </div>
    </section>
  )
}

