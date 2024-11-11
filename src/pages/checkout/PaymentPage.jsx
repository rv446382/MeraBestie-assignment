import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PaymentPage = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [upiID, setUpiID] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const navigate = useNavigate();

    const handlePayment = () => {
        // Simulate payment processing and navigate to success page
        setTimeout(() => navigate('/paymentsucc'), 1000);
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-8 bg-white shadow-lg rounded-lg max-w-md w-full">
                <h2 className="text-2xl font-semibold text-center mb-6">Payment Details</h2>

                <input
                    type="text"
                    placeholder="Card Number"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-3 border mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500"
                />

                <input
                    type="text"
                    placeholder="UPI ID"
                    value={upiID}
                    onChange={(e) => setUpiID(e.target.value)}
                    className="w-full p-3 border mb-4 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500"
                />

                <div className="flex space-x-4 mb-4">
                    <input
                        type="text"
                        placeholder="Expiry Date (MM/YY)"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        className="w-1/2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500"
                    />
                    <input
                        type="text"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="w-1/2 p-3 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-white-500"
                    />
                </div>

                <button
                    onClick={handlePayment}
                    className="w-full bg-blue-600 text-white p-3 rounded-md shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    Pay Now
                </button>
            </div>
        </div>
    );
};

export default PaymentPage;
