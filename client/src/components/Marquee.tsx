"use client"

import { useState, useEffect } from "react"
import Marquee from "react-fast-marquee"
import { motion } from "framer-motion"
import { ArrowRight, Sofa, Armchair, Lamp, PaintBucket, Bed, Coffee, BookOpen, Palette } from "lucide-react"

const BrandMarquee = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down")
  const [lastScrollY, setLastScrollY] = useState(0)

  // Track scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down")
      } else {
        setScrollDirection("up")
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  // Brands data with icons
  const brands = [
    { name: "MUUTO", icon: <Sofa size={25} /> },
    { name: "FERM LIVING", icon: <Armchair size={25} /> },
    { name: "BOLIA", icon: <Lamp size={25} /> },
    { name: "NORMANN", icon: <PaintBucket size={25} /> },
    { name: "CHASE", icon: <Bed size={25} /> },
    { name: "HERMAN MILLER", icon: <Coffee size={25} /> },
    { name: "KNOLL", icon: <BookOpen size={25} /> },
    { name: "VITRA", icon: <Palette size={25} /> },
  ]

  return (
    <div className="w-[105vw] -rotate-1 mt-8 bg-[#000000] items-center h-[7vh] hidden md:flex z-10 border-b border-white/20 overflow-hidden">
      <div className="flex items-center w-full">
        {/* Marquee */}
        <Marquee gradient={false} direction={scrollDirection === "up" ? "right" : "left"} speed={40} className="flex-1">
          {brands.map((brand, index) => (
            <span key={index} className="text-white text-2xl font-bold mx-6 flex items-center gap-2.5">
              <span className="flex items-center gap-3">
                {brand.icon}
                {brand.name}
                <motion.div
                  animate={{
                    rotate: scrollDirection === "up" ? 0 : 180,
                  }}
                  transition={{ duration: 0.5 }}
                  className="ml-1"
                >
                  <ArrowRight size={40} className="text-white" />
                </motion.div>
              </span>
            </span>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default BrandMarquee

