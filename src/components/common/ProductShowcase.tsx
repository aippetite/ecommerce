import React from "react";
import ProductCard from "./ProductCard";
import ProductShowcaseCard from "./ProductShowcaseCard";
import { Filter } from 'lucide-react';
import { ProductShowcaseProps } from "@/types/types";


const ProductShowcase: React.FC<ProductShowcaseProps> = ({ title , category , products }) => {
  

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center w-full py-5">
        <h2 className="text-2xl font-extrabold uppercase">{title}</h2>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center w-full">
        <div className="w-full md:w-[30%] flex justify-between items-center ml-0 md:ml-10 mt-4 md:mt-0">
          {category?.map((category: any, index: any) => {
            return (
              <p
                className={`font-bold ${index === 0 ? 'text-black' : 'text-gray-500'} hover:text-orange-500`}
                key={index}
              >
                {category}
              </p>
            );
          })}
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <button className="flex items-center bg-teal-500 text-white px-3 py-1 rounded hover:bg-orange-500">
            <Filter className="w-4 h-4" />
            <span className="ml-2">Filter</span>
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-center md:justify-evenly w-full px-4 md:px-10 mt-10">
        {products.map((product : any, index : any) => (
          <div className="w-1/2 sm:w-1/3 md:w-1/4 p-2" key={index}>
            <ProductShowcaseCard
              image={product.image}
              name={product.name}
              rating={product.rating}
              amount={product.amount}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
