import React from 'react';
import { ShoppingCart, Package, MessageCircle, Instagram, Phone, Star, Truck, Shield, Award } from 'lucide-react';

function App() {
  const whatsappNumber = "919629510839";
  const whatsappMessage = "Hi! I'm interested in ordering premium dry fruits from Moula Traders.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://www.instagram.com/moulatraders.nagore";

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-amber-900">Moula Traders</h1>
                <p className="text-sm text-amber-700">Premium Quality Since 2025</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-amber-800 hover:text-amber-600 transition-colors">About</a>
              <a href="#products" className="text-amber-800 hover:text-amber-600 transition-colors">Products</a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-900/20 to-orange-800/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6 animate-pulse">
              <Star className="w-4 h-4 mr-2" />
              Grand Opening Special
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-amber-900 mb-6 leading-tight">
              In sha Allah,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">
                Grand Opening
              </span>
            </h1>
            <div className="text-2xl md:text-3xl font-semibold text-orange-700 mb-4">
              22nd June 2025
            </div>
            <p className="text-xl md:text-2xl text-amber-800 mb-8 max-w-3xl mx-auto">
              Premium Dry Fruits, Imported Candies & More
            </p>
            <p className="text-lg text-amber-700 mb-10 max-w-2xl mx-auto">
              Carefully selected premium quality dry fruits and imported snacks at unbeatable prices – delivered all over India
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg inline-flex items-center justify-center"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                DM to Order
              </a>
              <a 
                href="tel:+9196292510839"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-amber-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-50 transform hover:scale-105 transition-all duration-200 shadow-lg border-2 border-amber-200 inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-amber-200/30 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-orange-200/30 rounded-full blur-xl"></div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">About Moula Traders</h2>
            <p className="text-xl text-amber-700 max-w-4xl mx-auto leading-relaxed">
              At Moula Traders, we bring you carefully selected dry fruits, imported biscuits, and candies at unbeatable prices – delivered all over India. Our commitment to quality and freshness ensures you get the finest products for your family.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <Shield className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Quality Guaranteed</h3>
              <p className="text-amber-700">Every product is carefully selected and quality-tested before reaching you</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <Truck className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">All India Delivery</h3>
              <p className="text-amber-700">Fast and secure delivery to every corner of India</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl">
              <Award className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-amber-900 mb-3">Best Rates</h3>
              <p className="text-amber-700">Premium quality at the most competitive prices in the market</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Our Premium Products</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto">
              Discover our carefully curated selection of premium dry fruits, imported candies, and specialty items
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Almonds */}
            {/* Almonds with SVG icon */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
  <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" fill="#D6A76C" className="w-16 h-16">
      <path d="M32 4C20 12 12 24 12 36C12 48 20 56 32 60C44 56 52 48 52 36C52 24 44 12 32 4Z" />
    </svg>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Almonds</h3>
    <p className="text-amber-700 mb-4">Fresh, crunchy California almonds packed with nutrients</p>
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold text-amber-800">Best Quality</span>
      <button className="text-amber-600 hover:text-amber-800 transition-colors">
        {/* <ShoppingCart className="w-5 h-5" /> */}
      </button>
    </div>
  </div>
</div>


            {/* Cashews */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🌰</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Cashews</h3>
                <p className="text-amber-700 mb-4">Premium grade cashews, perfectly roasted and salted</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">Premium Grade</span>
                  <button className="text-amber-600 hover:text-amber-800 transition-colors">
{/*                     <ShoppingCart className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Pistachios */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🟢</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Pistachios</h3>
                <p className="text-amber-700 mb-4">Iranian pistachios with rich flavor and perfect crunch</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">Iranian Quality</span>
                  <button className="text-amber-600 hover:text-amber-800 transition-colors">
{/*                     <ShoppingCart className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Dates */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🌴</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Dates</h3>
                <p className="text-amber-700 mb-4">Medjool and Ajwa dates, naturally sweet and nutritious</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">Medjool & Ajwa</span>
                  <button className="text-amber-600 hover:text-amber-800 transition-colors">
{/*                     <ShoppingCart className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Imported Candies */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🍬</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Imported Candies</h3>
                <p className="text-amber-700 mb-4">Premium international candies and chocolates</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">International</span>
                  <button className="text-amber-600 hover:text-amber-800 transition-colors">
{/*                     <ShoppingCart className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>

            {/* Premium Biscuits */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <div className="text-6xl">🍪</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Biscuits</h3>
                <p className="text-amber-700 mb-4">Imported biscuits and cookies from around the world</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">Imported</span>
                  <button className="text-amber-600 hover:text-amber-800 transition-colors">
{/*                     <ShoppingCart className="w-5 h-5" /> */}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Package className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Delivery All Over India</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-8">
              We deliver fresh, premium quality products to every corner of India with secure packaging and fast shipping
            </p>
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 max-w-2xl mx-auto">
              <MessageCircle className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-amber-900 mb-4">How to Order</h3>
              <p className="text-lg text-amber-700">
                DM us on Instagram or WhatsApp to place your orders. Our team will assist you with product selection and delivery details.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-12">Why Choose Moula Traders?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">📦</div>
                <h3 className="text-2xl font-semibold mb-3">Freshly Packed</h3>
                <p className="text-amber-100">Every product is freshly packed to maintain quality and taste</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">✅</div>
                <h3 className="text-2xl font-semibold mb-3">Quality Guaranteed</h3>
                <p className="text-amber-100">100% satisfaction guarantee on all our products</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💰</div>
                <h3 className="text-2xl font-semibold mb-3">Best Rates</h3>
                <p className="text-amber-100">Competitive pricing without compromising on quality</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Get in Touch</h2>
            <p className="text-xl text-amber-700 max-w-3xl mx-auto mb-12">
              Ready to order? Contact us through your preferred method and we'll take care of the rest
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <a 
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Instagram className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Instagram</h3>
                <p className="text-pink-100">Follow us and DM for orders</p>
                <div className="mt-4 text-lg font-semibold">@moulatraders.nagore</div>
              </a>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-green-100">Quick orders via WhatsApp</p>
                <div className="mt-4 text-lg font-semibold">+91-96295 10839</div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-orange-700 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Moula Traders</h3>
                <p className="text-amber-200">Premium Quality Since 2025</p>
              </div>
            </div>
            <div className="border-t border-amber-800 pt-8">
              <p className="text-amber-200">© 2025 Moula Traders | All rights reserved</p>
              <p className="text-amber-300 mt-2">2, Nellu Kadai Street, Nagore 611002</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
