import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const PaymentSuccess = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 5000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex justify-center items-center h-screen bg-green-200 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-transparent z-10 confetti-animation">
                <div className="confetti"></div>
            </div>
            <div className="w-72 h-72 flex justify-center items-center bg-green-600 rounded-full shadow-lg z-20">
                <div className="flex flex-col items-center space-x-4">
                    <span className="text-white text-4xl font-bold">✔</span>
                    <h1 className="text-white text-2xl font-bold">Payment Successful!</h1>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
