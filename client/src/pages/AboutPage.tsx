"use client"

import { motion } from "framer-motion"

const AboutPage = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About KURISKU</h1>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 mb-6">
            KURISKU was founded in 1998 with a simple mission: to create beautiful, functional furniture that brings joy
            to everyday living. Over the past 25 years, we've grown from a small workshop to a global brand, but our
            commitment to quality craftsmanship and thoughtful design has never wavered.
          </p>
          <p className="text-lg text-gray-600">
            We believe that great design should be accessible to everyone. That's why we work directly with skilled
            artisans and manufacturers to create furniture that's both high-quality and affordable. From our sustainable
            sourcing practices to our ethical manufacturing processes, we're committed to making furniture that you can
            feel good about bringing into your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="h-[400px] bg-gray-200 rounded-lg">
            {/* Placeholder for about image */}
            <div className="h-full flex items-center justify-center text-gray-400">About Image Placeholder</div>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              What started as a passion project in a small garage has grown into a beloved furniture brand with
              showrooms across the country. Our founder, John Kurisku, began by crafting custom pieces for friends and
              family, focusing on quality materials and timeless designs.
            </p>
            <p className="text-gray-600">
              As word spread about the exceptional quality and design of his work, demand grew, and KURISKU was born.
              Today, we continue to honor John's legacy by creating furniture that stands the test of time, both in
              durability and style.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Quality</h3>
              <p className="text-gray-600">
                We never compromise on materials or craftsmanship. Every piece of furniture we create is built to last,
                using the finest materials and time-tested techniques.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to minimizing our environmental impact. From responsibly sourced wood to eco-friendly
                packaging, we make choices that protect our planet.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-600">
                We're constantly exploring new designs, materials, and manufacturing techniques to create furniture that
                meets the evolving needs of modern living.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4">
                  {/* Placeholder for team member image */}
                </div>
                <h3 className="font-bold">Team Member {index + 1}</h3>
                <p className="text-gray-500 text-sm">Position</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-center">Visit Our Showroom</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="h-[400px] bg-gray-200 rounded-lg">
              {/* Placeholder for showroom image */}
              <div className="h-full flex items-center justify-center text-gray-400">Showroom Image Placeholder</div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Experience KURISKU in Person</h3>
              <p className="text-gray-600 mb-6">
                Visit our flagship showroom to experience the quality and comfort of our furniture firsthand. Our design
                consultants are available to help you find the perfect pieces for your space.
              </p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-gray-600">123 Design Street, Furniture District, NY 10001</p>
                </div>
                <div>
                  <h4 className="font-bold">Hours</h4>
                  <p className="text-gray-600">Monday - Saturday: 10am - 7pm</p>
                  <p className="text-gray-600">Sunday: 11am - 6pm</p>
                </div>
                <div>
                  <h4 className="font-bold">Contact</h4>
                  <p className="text-gray-600">Phone: (123) 456-7890</p>
                  <p className="text-gray-600">Email: info@kurisku.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default AboutPage

