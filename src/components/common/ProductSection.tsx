import React from "react";
import { Star } from "lucide-react";
import ProductCard from "./ProductCard";

interface Product {
  name: string;
  details: string;
  rating: number;
  amount: number;
  image: string;
}

interface ProductSectionProps {
  title: string;
}



const ProductSection: React.FC<ProductSectionProps> = ({ title }) => {
  const products: Product[] = [
    {
      name: "TShirt With Tape",
      details: "Details",
      rating: 4,
      amount: 120,
      image: "/Products/TShirt.png",
    },
    {
      name: "Jeans",
      details: "Details",
      rating: 3,
      amount: 150,
      image: "/Products/Jeans.png",
    },
    {
      name: "Sneakers",
      details: "Details",
      rating: 2,
      amount: 200,
      image: "/Products/CheckeredShirt.png",
    },
    {
      name: "Jacket",
      details: "Details",
      rating: 1,
      amount: 180,
      image: "/Products/Jeans.png",
    },
  ];

  return (
    <div className="w-full flex flex-col">
      <div className="flex justify-center items-center w-full py-3 md:py-5">
        <h2 className="text-xl md:text-2xl font-extrabold uppercase">{title}</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-4 w-full px-2 md:px-10">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            rating={product.rating}
            amount={product.amount}
          />
        ))}
      </div>
      <div className="flex justify-center items-center w-full py-3 md:py-5">
        <button className="bg-white text-gray px-3 py-1 md:px-4 md:py-2 rounded-md border border-gray text-sm md:text-base">
          View All
        </button>
      </div>
    </div>
  );
};

export default ProductSection;