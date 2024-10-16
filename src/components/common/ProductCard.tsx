import React from "react";
import { Star } from "lucide-react";

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

interface ProductCardProps {
  image: string;
  name: string;
  rating: number;
  amount: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  rating,
  amount,
}) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden w-[calc(50%-8px)] md:w-[calc(25%-12px)] max-w-[250px]">
      <img src={image} alt={name} className="w-full h-auto aspect-square object-cover" />
      <div className="p-2 md:p-4">
        <h2 className="text-xs md:text-sm font-semibold mb-1 md:mb-2">{name}</h2>
        <div className="flex items-center mb-1 md:mb-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={12}
              className={
                i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
              }
            />
          ))}
          <span className="text-xs text-gray-500 ml-1">({rating})</span>
        </div>
        <p className="text-sm md:text-lg font-bold">${amount}</p>
      </div>
    </div>
  );
};

export default ProductCard;