"use client"

import { motion } from "framer-motion"

const brands = [
  { id: 1, name: "Muuto" },
  { id: 2, name: "FERM LIVING" },
  { id: 3, name: "BOLIA" },
  { id: 4, name: "NORMANN" },
  { id: 5, name: "CHASE" },
]

const BrandLogos = () => {
  return (
    <section className="py-8 border-t border-b border-gray-200">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
          className="flex flex-wrap justify-center md:justify-between items-center gap-8"
        >
          {brands.map((brand) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="text-gray-500 text-lg font-medium"
            >
              {brand.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default BrandLogos

