"use client";

import { motion } from "framer-motion";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import FeaturesSection from "../components/FeaturesSection";
import ProductShowcase from "../components/ProductShowcase";
import PopularProducts from "../components/PopularProducts";
import TestimonialSection from "../components/TestimonialSection";
import MarqueeComponent from "../components/Marquee";

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="overflow-x-hidden"
    >
      <HeroSection />
      <MarqueeComponent />
      <CategorySection />
      <FeaturesSection />

      <ProductShowcase
        imgLink="../../public/Imgs/p1.jpg"
        title="Our chair designs are modern and elegant"
        description="Modern and elegant designs made with care and attention to detail, so that we become comfort for everyone."
        imagePosition="left"
      />

      <ProductShowcase
        imgLink="../../public/Imgs/p2.jpg"
        title="More than 10k interesting products that we sell"
        description="From sofas to dining tables, we offer a wide range of furniture pieces to suit every style and budget. Explore our collection today."
        imagePosition="right"
      />

      <ProductShowcase
        imgLink="../../public/Imgs/p3.jpg"
        title="Lots of accessories to beautify your room"
        description="Add the finishing touches to your space with our curated selection of decorative accessories, lighting, and textiles."
        imagePosition="left"
      />

      <ProductShowcase
        imgLink="../../public/Imgs/p4.jpg"
        title="We sell the best quality products on the market"
        description="Quality is our priority. We source only the finest materials and work with skilled craftsmen to create furniture that lasts."
        imagePosition="right"
      />

      <PopularProducts />
      <TestimonialSection />
    </motion.div>
  );
};

export default HomePage;
