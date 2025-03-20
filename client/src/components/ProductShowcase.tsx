import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ProductShowcaseProps {
  title: string;
  description: string;
  imagePosition?: "left" | "right";
  ctaText?: string;
  ctaLink?: string;
  imgLink: string;
}

const ProductShowcase = ({
  title,
  description,
  imagePosition = "left",
  ctaText = "Read more",
  ctaLink = "/products",
  imgLink,
}: ProductShowcaseProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row gap-8 items-center ${
            imagePosition === "right" ? "lg:flex-row-reverse" : ""
          }`}
        >
          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden w-full lg:w-1/2"
          >
            <img 
              className="w-full h-full object-cover" 
              src={imgLink} 
              alt={title} 
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: imagePosition === "left" ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 max-w-lg"
          >
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <a
              href={ctaLink}
              className="inline-flex items-center text-black font-medium border-b-2 border-black pb-1 hover:opacity-80 transition-opacity"
            >
              {ctaText} <ArrowRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;