"use client"

import { motion } from "framer-motion"
import { ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Herleder Visitor Chair",
    category: "Chair",
    price: 52.0,
    originalPrice: 65.0,
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "Fabric Swivel Chair",
    category: "Chair",
    price: 39.99,
    originalPrice: 49.99,
    image: "/placeholder.jpg",
  },
  {
    id: 3,
    name: "Mid-century Chair",
    category: "Chair",
    price: 39.99,
    originalPrice: 49.99,
    image: "/placeholder.jpg",
  },
  {
    id: 4,
    name: "Cafe Bar Olive Chair",
    category: "Chair",
    price: 25.0,
    originalPrice: 35.0,
    image: "/placeholder.jpg",
  },
]

const PopularProducts = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our popular product</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-48 md:h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center text-gray-400">Product Image</div>

                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-black p-2 rounded-full">
                    <ShoppingCart size={20} />
                  </button>
                </div>
              </div>

              <div className="text-sm text-gray-500 mb-1">{product.category}</div>
              <h3 className="font-medium mb-2">{product.name}</h3>
              <div className="flex items-center gap-2">
                <span className="font-bold">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-gray-500 line-through text-sm">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center">
          <button className="bg-black text-white px-6 py-3 rounded">See all products</button>
        </div>
      </div>
    </section>
  )
}

export default PopularProducts

