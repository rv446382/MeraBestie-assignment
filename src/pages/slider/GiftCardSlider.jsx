import React from 'react';

const reviews = [
    {
        name: "Smitha, Bengaluru",
        review: "Loved the designs and cute notepads",
        image: "https://randomuser.me/api/portraits/women/44.jpg", // Example image for Smitha
    },
    {
        name: "Rahul, Mumbai",
        review: "Quality is really good and superb! Thanks.",
        image: "https://randomuser.me/api/portraits/men/44.jpg", // Example image for Rahul
    },
    {
        name: "Anita, Delhi",
        review: "Excellent service and great value for money!",
        image: "https://randomuser.me/api/portraits/women/22.jpg", // Example image for Anita
    },
];

const ReviewSection = () => {
    return (
        <div className="w-full  py-8">
            <div className="flex justify-between space-x-4 px-4">
                {reviews.map((review, index) => (
                    <div
                        key={index}
                        className="w-1/3 bg-gradient-to-b from-pink-100 via-white-100 to-white-200 p-16 rounded-xl backdrop-blur-md bg-opacity-40 border-transparent shadow-lg hover:shadow-2xl  transition-all duration-500 transform hover:translate-y-[-50px]" // Gradient and blur for water effect
                       
                    >
                        {/* Circular Image */}
                        <div className="flex justify-center mb-6">
                            <img
                                src={review.image}
                                alt={review.name}
                                className="w-20 h-20 rounded-full object-cover border-4 border-pink-400"
                            />
                        </div>
                        {/* Review Content */}
                        <p className="text-xl text-black font-semibold text-center">{review.name}</p>
                        <p className="text-lg text-gray-700 mt-2 text-center">{review.review}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewSection;
