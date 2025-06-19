import React from 'react';
import {
  ShoppingCart,
  Package,
  MessageCircle,
  Instagram,
  Phone,
  Star,
  Truck,
  Shield,
  Award
} from 'lucide-react';

function App() {
  const whatsappNumber = "919629510839";
  const whatsappMessage = "Hi! I'm interested in ordering premium dry fruits from Moula Traders.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  const instagramUrl = "https://www.instagram.com/moulatraders.nagore";

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* ... header and other sections remain unchanged ... */}

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
            {/* ✅ Almonds Card with SVG Icon */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 64 64" fill="#D6A76C">
                  <path d="M32 4C20 12 12 24 12 36C12 48 20 56 32 60C44 56 52 48 52 36C52 24 44 12 32 4Z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Premium Almonds</h3>
                <p className="text-amber-700 mb-4">Fresh, crunchy California almonds packed with nutrients</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-800">Best Quality</span>
                </div>
              </div>
            </div>

            {/* 🔜 You can repeat similar for Cashews here by replacing the SVG */}
          </div>
        </div>
      </section>

      {/* ... remaining sections like contact and footer ... */}
    </div>
  );
}

export default App;
