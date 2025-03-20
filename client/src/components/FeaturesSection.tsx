"use client"

import { motion } from "framer-motion"
import { CreditCard, Gift, Truck, ShoppingCart } from "lucide-react"

const features = [
  {
    id: 1,
    icon: <CreditCard size={24} />,
    title: "Easy payment",
    description: "Multiple payment options to choose from, including credit cards and PayPal.",
  },
  {
    id: 2,
    icon: <Gift size={24} />,
    title: "Lots of promos",
    description: "Enjoy exclusive discounts and special offers throughout the year.",
  },
  {
    id: 3,
    icon: <Truck size={24} />,
    title: "Fast shipping",
    description: "Quick delivery to your door with our reliable shipping partners.",
  },
  {
    id: 4,
    icon: <ShoppingCart size={24} />,
    title: "Save in cart",
    description: "Save your favorite items in your cart for future purchases.",
  },
]

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Features Special For You</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          We provide a variety of special features to make your shopping experience more convenient and enjoyable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="mb-4 text-gray-800">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection

