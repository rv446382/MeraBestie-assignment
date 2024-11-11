import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const productNames = [
    "Ethereal Notebook", "Blissful Planner", "Dreamscape Diary", "Celestial Journal", "Enchanted Notepad"
];

const imageUrls = [
    "https://static.wixstatic.com/media/a613c3_8dbdafc4a3d74c8699101c0e1e3fca13~mv2.jpg",
    "https://static.wixstatic.com/media/a613c3_78a4b9b035c6450ba843c753b6fefb5d~mv2.png",
    "https://static.wixstatic.com/media/a613c3_d7731516385a49528488f9ec463f0489~mv2.jpg",
    "https://static.wixstatic.com/media/a613c3_61d25276a32544a3bd1a84989227e7f4~mv2.jpg",
];

const initialProducts = Array.from({ length: 5 }, (_, index) => ({
    id: index + 1,
    name: productNames[index % productNames.length],
    image: imageUrls[index % imageUrls.length],
    price: (Math.random() * 100 + 100).toFixed(2), // Adjusted for higher price range
    quantity: 1,
}));

const CartPage = () => {
    const [products, setProducts] = useState(initialProducts);
    const navigate = useNavigate();
    const handleProceedToCheckout = () => {
        navigate('/checkout');
    };


    const increaseQuantity = (id) => {
        setProducts(products.map(product => product.id === id ? { ...product, quantity: product.quantity + 1 } : product));
    };

    const decreaseQuantity = (id) => {
        setProducts(products.map(product => product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product));
    };

    const removeItem = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const totalAmount = products.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);

    return (
        <div className="p-8 bg-pink-50 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-pink-500 mb-10">My Cart</h1>

            <div className="w-full max-w-6xl flex space-x-8">
                {/* Left Section: Cart Items */}
                <div className="w-2/3 space-y-6">
                    {products.map((product) => (
                        <div key={product.id} className="flex bg-white shadow-lg rounded-lg p-4 items-center">
                            <img src={product.image} alt={product.name} className="w-20 h-20 rounded-md mr-6 object-cover" />

                            <div className="flex-1 flex flex-col justify-between">
                                <h2 className="text-xl font-semibold text-pink-600">{product.name}</h2>
                                <p className="text-pink-400 text-lg">₹{product.price}</p>
                                <div className="flex items-center space-x-4 mt-2">
                                    <button onClick={() => decreaseQuantity(product.id)} className="text-pink-500 font-bold px-3 py-1 border-2 border-pink-300 rounded">-</button>
                                    <span className="text-gray-700">{product.quantity}</span>
                                    <button onClick={() => increaseQuantity(product.id)} className="text-pink-500 font-bold px-3 py-1 border-2 border-pink-300 rounded">+</button>
                                </div>
                            </div>
                            <button onClick={() => removeItem(product.id)} className="ml-4 text-gray-400 hover:text-red-500">
                                🗑️
                            </button>
                        </div>
                    ))}
                </div>

                {/* Right Section: Checkout Summary */}
                <div className="w-1/3 bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
                    <h2 className="text-2xl text-pink-600 font-semibold mb-6">Order Summary</h2>
                    <div className="w-full space-y-4 text-lg">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>₹{totalAmount}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>Free</span>
                        </div>
                    </div>
                    <div className="w-full border-t border-gray-300 mt-4 pt-4 text-xl font-bold flex justify-between">
                        <span>Total</span>
                        <span>₹{totalAmount}</span>
                    </div>
                    <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-6 rounded-full w-full" onClick={handleProceedToCheckout}>
                        Checkout
                    </button>
                    <p className="text-gray-500 mt-2">🔒 Secure Checkout</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
