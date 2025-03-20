"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImg from "../../public/Imgs/hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find the best home furniture for your room
            </h1>
            <p className="text-gray-600 mb-8">
              We craft furniture that combines comfort, style, and durability to
              create the perfect living space for you and your family.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="block text-2xl font-bold">25+</span>
                <span className="text-sm text-gray-500">
                  Years of experience
                </span>
              </div>
              <div className="bg-white p-3 rounded shadow-sm">
                <span className="block text-2xl font-bold">10k</span>
                <span className="text-sm text-gray-500">Happy customers</span>
              </div>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded flex items-center gap-2">
              Shop now <ArrowRight size={16} />
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative h-[400px] bg-gray-200 rounded-lg"
          >
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center rounded overflow-hidden text-gray-400">
              <img className="w-full h-full" src={heroImg} alt="" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
