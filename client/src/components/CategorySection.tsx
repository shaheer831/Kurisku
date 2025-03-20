"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const categories = [
  {
    id: 1,
    name: "Living room",
    image: "../../public/Imgs/living.jpg",
    slug: "living-room",
  },
  { id: 2, name: "Bedroom", image: "../../public/Imgs/bed.jpg", slug: "bedroom" },
  { id: 3, name: "Workspace", image: "../../public/Imgs/workspace.jpg", slug: "workspace" },
  { id: 4, name: "Kitchen", image: "../../public/Imgs/kitchen.jpg", slug: "kitchen" },
];

const CategorySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Exclusive Furniture
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Check out this week's selection of popular products that might catch
          your eye, and don't miss out!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                to={`/products?category=${category.slug}`}
                className="block group"
              >
                <div className="relative h-80 bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <img
                  className="w-full h-full"
                  src={category.image} alt="" />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <h3 className="text-xl font-medium">{category.name}</h3>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
