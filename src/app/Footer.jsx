import Link from "next/link"
import { Instagram, Facebook, Twitter, Whatsapp , Contact, Youtube, Mail, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {/* Brand Section */}
          <div className="space-y-4 lg:pr-8">
            <Image src="/im1.png" alt="Vivid And Vision" width={220} height={220} className="ml-[-20px] rounded-full" />
            <h2 className="text-2xl dancfont">Vivid And Vision</h2>
            
          </div>

          {/* Quick Links */}
          <div className="space-y-4 lg:pl-8">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-3">
              {["Home",  "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="text-neutral-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 lg:pl-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white">
                <Phone size={16} className="flex-shrink-0" />
                <span className="text-sm">+91 8789524372 / +91 8617290073</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <Mail size={16} className="flex-shrink-0" />
                <span className="text-sm break-all">vividandvisionphoto@gmail.com</span>
              </li>
              <li className="flex items-center gap-3 text-white">
                <MapPin size={16} className="flex-shrink-0" />
                <span className="text-sm">8H, Roy para bye lane 
                Kol 700050 </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 lg:pl-4">
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="flex gap-6">
              <Link href="https://wa.me/8617290073" className="text-neutral-400 hover:text-white transition-colors p-2">
                <Contact size={24} />
              </Link>
              <Link href="https://www.facebook.com/people/Vivid-Vision-Photography/100077598306507/" className="text-neutral-400 hover:text-white transition-colors p-2">
                <Facebook size={24} />
              </Link>
              <Link href="https://www.facebook.com/people/Vivid-Vision-Photography/100077598306507/" className="text-neutral-400 hover:text-white transition-colors p-2">
                <Youtube size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400 text-sm">
          <p>© {new Date().getFullYear()} Vivid And Vision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}