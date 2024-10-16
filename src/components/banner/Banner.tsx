import React from "react";
import Image from "next/image";
import { BannerProps } from "@/types/types";



const Banner: React.FC<BannerProps> = ({ title, message }) => {
  return (
    <div className=" font-sans w-[90%] px-6 flex justify-center items-center relative ">
      <div className="container mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 z-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 md:mb-4 leading-tight uppercase w-72 md:w-80 lg:w-[30rem] ">
            {title}
          </h1>
          <p className="text-sm md:text-base text-gray-600 mb-4 md:mb-6">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="w-full md:w-auto bg-black text-white py-3 px-8 rounded-full font-bold mb-6 md:mb-12 hover:bg-gray-800 transition duration-300">
            Shop Now
          </button>
          <div className="flex justify-between md:justify-start md:space-x-8 mb-6 md:mb-0">
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl lg:text-4xl font-bold">200+</p>
              <p className="text-xs md:text-sm text-gray-600 uppercase">
                International Brands
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl lg:text-4xl font-bold">
                2,000+
              </p>
              <p className="text-xs md:text-sm text-gray-600 uppercase">
                High-Quality Products
              </p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xl md:text-2xl lg:text-4xl font-bold">
                30,000+
              </p>
              <p className="text-xs md:text-sm text-gray-600 uppercase">
                Happy Customers
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0 relative">
          <Image
            src="/Banner.png"
            alt="Fashion couple"
            width={400}
            height={400}
          />
          <Image
            src="/Vector.png"
            alt="Additional Image 1"
            width={100}
            height={100}
            className="hidden md:block absolute md:top-20 md:right-[156px] z-20"
          />
          <Image
            src="/Vector.png"
            alt="Additional Image 2"
            width={60}
            height={60}
            className="hidden md:block absolute md:bottom-5 md:right-[550px] z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
