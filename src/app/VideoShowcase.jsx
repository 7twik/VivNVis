"use client"

import { useState, useRef } from "react"
import { Play, Pause } from "lucide-react"

const videoProjects = [
  {
    title: "Wedding Cinematography",
    date: "Jan 2024 - Present",
    description:
      "Professional wedding videography services capturing your special moments in cinematic quality. We specialize in creating timeless wedding films that tell your unique love story.",
    videoUrl: "/v1.mp4",
  },
  {
    title: "Commercial Productions",
    date: "Dec 2023 - Present",
    description:
      "High-end commercial video production for businesses and brands. Our team creates compelling visual content that helps businesses connect with their audience and achieve their marketing goals.",
    videoUrl: "/v2.mp4",
  }
]

function VideoPlayer({ url }) {
  const [isPlaying, setIsPlaying] = useState(true)
  const videoRef = useRef(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden">
      <video ref={videoRef} src={url} className="w-full h-full object-cover" loop autoPlay muted playsInline />
      <button
        onClick={togglePlay}
        className="absolute bottom-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      >
        {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
      </button>
    </div>
  )
}

export function VideoShowcase() {
  return (
    <section className="bg-black py-20 ">
      <div className="container mx-auto px-4">
        <div className="space-y-32  md:flex md:justify-center">
          <div className=" md:w-[80vw]">
          {videoProjects.map((project, index) => (
            <div key={project.title} className={`grid grid-cols-1 md:grid-cols-2 pb-20 gap-12 items-center `}>
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <VideoPlayer url={project.videoUrl} />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-white dancfont">{project.title}</h3>
                  <p className="text-neutral-400 text-lg leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </section>
  )
}

