"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Trash2, Plus, Minus, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Modern Lounge Chair",
    color: "Gray",
    price: 249.99,
    quantity: 1,
    image: "/placeholder.jpg",
  },
  {
    id: 2,
    name: "Coffee Table",
    color: "Walnut",
    price: 199.99,
    quantity: 1,
    image: "/placeholder.jpg",
  },
]

const CartPage = () => {
  const [items, setItems] = useState(cartItems)

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return

    setItems(items.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item)))
  }

  const removeItem = (id: number) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 15
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="py-8"
    >
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-medium mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added anything to your cart yet.</p>
            <Link to="/products" className="bg-black text-white px-6 py-3 rounded inline-block">
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="border-b border-gray-200 pb-4 mb-4 hidden md:grid md:grid-cols-12 text-sm text-gray-500">
                <div className="md:col-span-6">Product</div>
                <div className="md:col-span-2 text-center">Price</div>
                <div className="md:col-span-2 text-center">Quantity</div>
                <div className="md:col-span-2 text-right">Total</div>
              </div>

              {items.map((item) => (
                <div key={item.id} className="border-b border-gray-200 py-6">
                  <div className="md:grid md:grid-cols-12 gap-4 items-center">
                    {/* Product */}
                    <div className="md:col-span-6 flex gap-4 mb-4 md:mb-0">
                      <div className="w-24 h-24 bg-gray-100 rounded-lg overflow-hidden">
                        {/* Placeholder for product image */}
                        <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                          Product Image
                        </div>
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">Color: {item.color}</p>
                        <button
                          className="text-sm text-red-500 flex items-center gap-1 mt-2 md:hidden"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash2 size={14} /> Remove
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="md:col-span-2 text-center mb-4 md:mb-0">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Price:</div>${item.price.toFixed(2)}
                    </div>

                    {/* Quantity */}
                    <div className="md:col-span-2 flex justify-center mb-4 md:mb-0">
                      <div className="md:hidden text-sm text-gray-500 mb-1 mr-2">Quantity:</div>
                      <div className="flex items-center">
                        <button
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-l"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus size={14} />
                        </button>
                        <div className="w-10 h-8 border-t border-b border-gray-300 flex items-center justify-center">
                          {item.quantity}
                        </div>
                        <button
                          className="w-8 h-8 border border-gray-300 flex items-center justify-center rounded-r"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Total */}
                    <div className="md:col-span-2 text-right">
                      <div className="md:hidden text-sm text-gray-500 mb-1">Total:</div>
                      <div className="font-medium">${(item.price * item.quantity).toFixed(2)}</div>
                      <button
                        className="text-sm text-red-500 hidden md:inline-flex items-center gap-1 mt-2 justify-end"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 size={14} /> Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="flex justify-between items-center mt-8">
                <Link to="/products" className="text-black flex items-center gap-2">
                  <ChevronRight size={16} className="rotate-180" /> Continue Shopping
                </Link>
                <button className="text-red-500">Clear Cart</button>
              </div>
            </div>

            {/* Order Summary */}
            <div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4 flex justify-between font-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full bg-black text-white py-3 rounded font-medium">Proceed to Checkout</button>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">We Accept</h3>
                  <div className="flex gap-2">
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  )
}

export default CartPage

