import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Youtube, ArrowRight } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/help">Help Center</Link>
              </li>
              <li>
                <Link to="/track-order">Track Your Order</Link>
              </li>
              <li>
                <Link to="/shipping">Shipping & Delivery</Link>
              </li>
              <li>
                <Link to="/returns">Returns & Exchanges</Link>
              </li>
              <li>
                <Link to="/warranty">Warranty Information</Link>
              </li>
              <li>
                <Link to="/gift-cards">Gift Cards</Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">KURISKU</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/press">Press</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/sustainability">Sustainability</Link>
              </li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold mb-4">HELP</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/faq">FAQs</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">OUR MOBILE APP</h3>
            <p className="mb-4">Download our app for the best experience</p>
            <div className="flex space-x-2 mb-6">
              <button className="border border-white px-4 py-2 rounded text-sm">App Store</button>
              <button className="border border-white px-4 py-2 rounded text-sm">Google Play</button>
            </div>

            <h3 className="text-lg font-semibold mb-4">NEWSLETTER</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-gray-800 text-white px-4 py-2 rounded-l w-full"
              />
              <button className="bg-white text-gray-900 px-3 py-2 rounded-r">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter size={20} />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="Youtube">
              <Youtube size={20} />
            </a>
          </div>
          <p className="text-sm text-gray-400">© 2023 KURISKU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

