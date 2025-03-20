"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Minus, Plus, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import { Link } from "react-router-dom"

// Mock product data
const product = {
  id: 1,
  name: "Modern Lounge Chair",
  category: "Chairs",
  price: 249.99,
  originalPrice: 299.99,
  rating: 4.8,
  reviewCount: 124,
  description:
    "This modern lounge chair combines comfort and style with its ergonomic design and premium materials. Perfect for any living room, office, or reading nook.",
  features: [
    "Solid wood frame",
    "High-density foam cushioning",
    "Stain-resistant fabric",
    "Easy assembly",
    "Adjustable legs",
  ],
  colors: ["#E0E0E0", "#2C2C2C", "#A67F5D", "#7D9D9C"],
  images: Array(4).fill("/placeholder.jpg"),
  relatedProducts: Array.from({ length: 4 }, (_, i) => ({
    id: i + 2,
    name: `Related Product ${i + 1}`,
    category: "Chairs",
    price: 149.99 + i * 20,
    image: "/placeholder.jpg",
  })),
}

const ProductDetailPage = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState("description")
  const [activeImage, setActiveImage] = useState(0)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        {/* Breadcrumbs */}
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products">Products</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/products?category=chairs">Chairs</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Product Details */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="relative h-[400px] md:h-[500px] bg-gray-100 rounded-lg mb-4 overflow-hidden">
              {/* Placeholder for main product image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                Product Image {activeImage + 1}
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  className={`relative h-24 bg-gray-100 rounded-lg overflow-hidden ${
                    activeImage === index ? "ring-2 ring-black" : ""
                  }`}
                  onClick={() => setActiveImage(index)}
                >
                  {/* Placeholder for thumbnail */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-xs">
                    Thumb {index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="text-sm text-gray-500 mb-4">{product.category}</div>

            <div className="flex items-center gap-4 mb-6">
              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
              {product.originalPrice && (
                <div className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</div>
              )}
              <div className="bg-green-100 text-green-800 text-sm px-2 py-1 rounded">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Color</h3>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full ${
                      selectedColor === color ? "ring-2 ring-offset-2 ring-black" : ""
                    }`}
                    style={{ backgroundColor: color }}
                    onClick={() => setSelectedColor(color)}
                    aria-label={`Select color ${color}`}
                  />
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="font-medium mb-2">Quantity</h3>
              <div className="flex items-center">
                <button
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-l"
                  onClick={decrementQuantity}
                >
                  <Minus size={16} />
                </button>
                <div className="w-16 h-10 border-t border-b border-gray-300 flex items-center justify-center">
                  {quantity}
                </div>
                <button
                  className="w-10 h-10 border border-gray-300 flex items-center justify-center rounded-r"
                  onClick={incrementQuantity}
                >
                  <Plus size={16} />
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button className="bg-black text-white px-6 py-3 rounded flex-1">Add to cart</button>
              <button className="border border-gray-300 px-4 py-3 rounded">
                <Heart size={20} />
              </button>
              <button className="border border-gray-300 px-4 py-3 rounded">
                <Share2 size={20} />
              </button>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <Truck className="text-gray-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">Free Shipping</h4>
                  <p className="text-sm text-gray-500">Free shipping on orders over $50</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="text-gray-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">5 Year Warranty</h4>
                  <p className="text-sm text-gray-500">We stand behind our quality with a 5-year warranty</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <RotateCcw className="text-gray-500 mt-1" size={20} />
                <div>
                  <h4 className="font-medium">30-Day Returns</h4>
                  <p className="text-sm text-gray-500">Not satisfied? Return within 30 days for a full refund</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className="mb-16">
          <div className="flex border-b border-gray-300 mb-6">
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "description" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "features" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("features")}
            >
              Features
            </button>
            <button
              className={`px-6 py-3 font-medium ${
                activeTab === "reviews" ? "border-b-2 border-black text-black" : "text-gray-500"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviewCount})
            </button>
          </div>

          <div>
            {activeTab === "description" && <p className="text-gray-600 leading-relaxed">{product.description}</p>}

            {activeTab === "features" && (
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {activeTab === "reviews" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-2xl font-bold">{product.rating}</div>
                  <div className="text-yellow-400">★★★★★</div>
                  <div className="text-gray-500">({product.reviewCount} reviews)</div>
                </div>

                <p className="text-gray-600">Reviews would be displayed here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8">You might also like</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {product.relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id}>
                <div className="relative h-48 md:h-64 bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  {/* Placeholder for related product image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-400">Product Image</div>
                </div>

                <div className="text-sm text-gray-500 mb-1">{relatedProduct.category}</div>
                <h3 className="font-medium mb-2">{relatedProduct.name}</h3>
                <div className="font-bold">${relatedProduct.price.toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProductDetailPage

