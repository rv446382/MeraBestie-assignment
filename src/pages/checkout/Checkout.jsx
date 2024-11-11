import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutPage = () => {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedDelivery, setSelectedDelivery] = useState('standard');
    const [paymentMethod, setPaymentMethod] = useState('credit');

    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        // Navigate to the payment page
        navigate('/payment');
    };

    return (
        <div className="p-8 bg-pink-50 min-h-screen flex flex-col items-center">
            <h1 className="text-4xl font-bold text-pink-500 mb-10">Checkout</h1>
            <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-6 space-y-8">
                {/* Delivery Details */}
                <div>
                    <h2 className="text-2xl text-pink-600 font-semibold mb-4">Delivery Details</h2>
                    <div className="space-y-4">
                        <input
                            type="text"
                            placeholder="Full Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full border-2 border-pink-300 rounded p-3 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            className="w-full border-2 border-pink-300 rounded p-3 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Postal Code"
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            className="w-full border-2 border-pink-300 rounded p-3 focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Phone Number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="w-full border-2 border-pink-300 rounded p-3 focus:outline-none"
                        />
                    </div>
                </div>

                {/* Delivery Method */}
                <div>
                    <h2 className="text-2xl text-pink-600 font-semibold mb-4">Delivery Method</h2>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="delivery"
                                value="standard"
                                checked={selectedDelivery === 'standard'}
                                onChange={() => setSelectedDelivery('standard')}
                                className="mr-3"
                            />
                            Standard Delivery - Free (3-5 days)
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="delivery"
                                value="express"
                                checked={selectedDelivery === 'express'}
                                onChange={() => setSelectedDelivery('express')}
                                className="mr-3"
                            />
                            Express Delivery - $10 (1-2 days)
                        </label>
                    </div>
                </div>

                {/* Payment Method */}
                <div>
                    <h2 className="text-2xl text-pink-600 font-semibold mb-4">Payment Method</h2>
                    <div className="space-y-2">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="credit"
                                checked={paymentMethod === 'credit'}
                                onChange={() => setPaymentMethod('credit')}
                                className="mr-3"
                            />
                            Credit Card
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="paypal"
                                checked={paymentMethod === 'paypal'}
                                onChange={() => setPaymentMethod('paypal')}
                                className="mr-3"
                            />
                            PayPal
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="payment"
                                value="cash"
                                checked={paymentMethod === 'cash'}
                                onChange={() => setPaymentMethod('cash')}
                                className="mr-3"
                            />
                            Cash on Delivery
                        </label>
                    </div>
                </div>

                {/* Place Order Button */}
                <button
                    onClick={handlePlaceOrder}
                    className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-full w-full">
                    Place Order
                </button>
            </div>
        </div>
    );
};

export default CheckoutPage;
