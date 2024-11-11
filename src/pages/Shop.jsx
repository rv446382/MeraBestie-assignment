import React from 'react';
import { useNavigate } from 'react-router-dom';
import './shop.css';
import Footer from './footer/Footer';

const productNames = [
  "Ethereal Notebook", "Blissful Planner", "Dreamscape Diary", "Celestial Journal",
  "Enchanted Notepad", "Mystic Sketchbook", "Aura Art Pad", "Serenity Scribbler",
  "Luminous Ledger", "Infinite Ideas", "Soul Scribbles", "Whisper Notes",
  "Starlit Sketch", "Tranquil Thoughts", "Harmony Handbook", "Mindful Memoir",
  "Visionary Vellum", "Reflection Register", "Ink & Inspiration", "The Muse Book"
];

const imageUrls = [
  "https://static.wixstatic.com/media/a613c3_8dbdafc4a3d74c8699101c0e1e3fca13~mv2.jpg",
  "https://static.wixstatic.com/media/a613c3_78a4b9b035c6450ba843c753b6fefb5d~mv2.png",
  "https://static.wixstatic.com/media/a613c3_d7731516385a49528488f9ec463f0489~mv2.jpg",
  "https://static.wixstatic.com/media/a613c3_61d25276a32544a3bd1a84989227e7f4~mv2.jpg",
];

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: productNames[index % productNames.length],
  image: imageUrls[index % imageUrls.length],
  price: (Math.random() * 100).toFixed(2),
}));

const Shop = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex-grow px-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-thin text-gray-800">Shop All</h1>
        </div>

        <div className="card__container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article key={product.id} className="card__article relative overflow-hidden bg-white bg-opacity-50 rounded-lg p-4">
              <img src={product.image} alt={product.name} className="card__img w-full h-64 object-cover rounded-lg" />
              <div className="card__data absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 rounded-b-lg">
                <span className="card__description text-black text-sm">{product.name}</span>
                <h2 className="card__title text-white text-lg font-semibold">${product.price}</h2>

                <button
                  onClick={handleAddToCart}
                  className="card__button bg-transparent border-2 border-white text-white py-2 px-4 rounded-md hover:bg-white hover:text-black"
                >
                  Add to Cart
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Shop;
