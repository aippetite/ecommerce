import React from 'react';

const CollectionBanner: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden mt-10 mb-10">
            <img 
                src="/CollectionBanner.png" 
                alt="Collection" 
                className="w-full h-full object-cover"
            />
            <button 
                className="absolute bottom-20 left-2/3 transform -translate-x-1/2 bg-white text-black py-2 px-4 hover:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Show Collection
            </button>
        </div>
    );
};

export default CollectionBanner;
