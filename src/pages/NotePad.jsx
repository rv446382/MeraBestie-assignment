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
  "https://www.giftoo.in/cdn/shop/products/ac3362_5076945b96db4a0fbebbb1a01a1b2ead_mv2.png?v=1710523703",
  "https://m.media-amazon.com/images/I/51NgyoyS8FL._AC_UF1000,1000_QL80_.jpg",
  "https://s.alicdn.com/@sc04/kf/Habb04a23c6824f00971bdf07a16f1ceac.jpeg_300x300.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa-I83LS06UP4y9b_N9-8Hc_Uepd72YI8jbA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNiDnenWOYxk2RyqNGTfYbCEfofoqZUF5zuA&s",
  "https://images.meesho.com/images/products/296395580/j0wp7_512.webp",
  "https://m.media-amazon.com/images/I/51YmUUulUlL._AC_UF1000,1000_QL80_.jpg",
  "https://funblast.in/cdn/shop/files/61UeBqwotNL.jpg?v=1692431210",
  "https://rukminim2.flixcart.com/image/850/1000/l2w7b0w0/diary-notebook/c/4/m/cute-unicorn-fur-diary-for-girls-160page-ruled-diary-for-rakhi-original-image4tezwg9jage.jpeg?q=90&crop=false",
  "https://i.pinimg.com/originals/9d/c2/c7/9dc2c740e5126927624d86b05b94b4d1.jpg"
];

const products = Array.from({ length: 20 }, (_, index) => ({
  id: index + 1,
  name: productNames[index % productNames.length],
  image: imageUrls[index % imageUrls.length],
  price: (Math.random() * 100).toFixed(2),
}));

const NotePad = () => {
  const navigate = useNavigate();

  const handleAddToCart = () => {
    navigate('/cart');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="container flex-grow px-8">
        <div className="text-center mb-10">
          <h1 className="text-5xl font-thin text-gray-800">Notepads</h1>
          <p className='mt-5 font-serif'>Explore the MOST cutest and aesthetic stationery collection you have EVER SEEN!</p>
        </div>


        <div className="responsive-image-container mb-10">
          <div className="book-summary-container flex flex-row justify-center items-center gap-10">

            {/* Left Div: Book Summary */}
            <div className="book-summary w-full md:w-1/2 p-5">
              <h2 className="text-3xl font-semibold mb-4">About Our Books</h2>
              <p className="text-lg text-gray-700">
                Dive into our exclusive collection of books that bring imagination to life.
                Each book is carefully curated to inspire and entertain, featuring vibrant
                characters and unforgettable journeys. Discover the essence of creativity
                on each page and unlock a world of boundless knowledge and fun.
              </p>
            </div>

            {/* Right Div: Circular Image */}
            <div className="image-container w-full md:w-1/2 flex justify-center items-center p-5 rounded-full">
              <img
                src="https://plus.unsplash.com/premium_photo-1705583864029-8b7fdde802a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="scenery"
                className="circle-image object-cover rounded-se-md"
              />
            </div>
          </div>
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

export default NotePad;
