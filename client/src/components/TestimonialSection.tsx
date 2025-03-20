"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    id: 1,
    name: "Amanda Martins",
    role: "Customer",
    text: "Absolutely in love with my new furniture! The quality is exceptional and the customer service was outstanding. Will definitely be shopping here again.",
    avatar: "/placeholder.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Johnson",
    role: "Interior Designer",
    text: "As a professional interior designer, I always recommend KURISKU to my clients. Their furniture pieces are not only beautiful but also durable and functional.",
    avatar: "/placeholder.jpg",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah Williams",
    role: "Customer",
    text: "The delivery was prompt and the assembly was straightforward. The sofa looks even better in person than it did online. Very satisfied with my purchase!",
    avatar: "/placeholder.jpg",
    rating: 4,
  },
]

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">This is what they say</h2>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <motion.div
            key={currentTestimonial.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-gray-600 mb-6 text-lg italic">"{currentTestimonial.text}"</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">{/* Placeholder for avatar */}</div>
                <div>
                  <h4 className="font-medium">{currentTestimonial.name}</h4>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2 border border-gray-300 rounded-full"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <div className="text-sm">
                  {currentIndex + 1}/{testimonials.length}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 border border-gray-300 rounded-full"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection

