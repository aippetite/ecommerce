import React from 'react';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { InstagramBannerProps } from '@/types/types';



const InstagramBanner: React.FC<InstagramBannerProps> = ({ title, images }) => {
  return (
    <div className="w-full bg-gray-100 py-12 px-4 hidden sm:block">
      <h2 className="text-3xl font-bold text-center mb-8">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((src, index) => (
          <div key={index} className="relative group">
            <div className="w-48 h-48 overflow-hidden">
              <Image
                src={src}
                alt={`Instagram image ${index + 1}`}
                width={192}
                height={192}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
              <Instagram className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramBanner;
