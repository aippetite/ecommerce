import React from "react";
import { Star, Heart, Search, ShoppingBag } from "lucide-react";
import { ProductShowcaseCardProps } from "@/types/types";



const ProductShowcaseCard: React.FC<ProductShowcaseCardProps> = ({
  image,
  name,
  rating,
  amount,
}) => {
  return (
    <div className="bg-white relative overflow-hidden w-[150px] sm:w-[200px] md:w-[300px] group">
      <div className="relative">
        <img
          src={image}
          alt=" "
          className="w-full h-[200px] sm:h-[300px] md:h-[400px] object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ">
          <div className="flex justify-between items-center bg-[#1e2832] text-white p-4">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5" />
              <Search className="w-5 h-5" />
            </div>
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5" />
              <span>Shop Now</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center">
          <p className="text-gray-500">Bag</p>
          <p className="text-lg font-bold">${amount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseCard;
