import { ImageCardProps } from "@/types/types";
import React from "react";

interface Product {
  name: string;
  amount: number;
  image: string;
  stock: number;
}


const ImageCard: React.FC<ImageCardProps> = ({ product }) => (
  <div className="relative w-full h-full overflow-hidden group">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover"
    />
    <div className="flex justify-between absolute bottom-0 left-0 right-0 bg-[#1e2832]  text-white p-2 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="font-bold">{product.name}</h3>
      <p>{product.stock} Products</p>
    </div>
  </div>
);

interface ProductBannerProps {
  title: string;
}

const ProductBanner: React.FC<ProductBannerProps> = ({ title }) => {
  const products: Product[] = [
    {
      name: "Elegant Dress",
      amount: 120,
      stock: 10,
      image: "/Models/Model1.png",
    },
    {
      name: "Casual Outfit",
      amount: 150,
      stock: 15,
      image: "/Models/Model2.png",
    },
    {
      name: "Formal Suit",
      amount: 200,
      stock: 8,
      image: "/Models/Model3.png",
    },
    {
      name: "Summer Dress",
      amount: 180,
      stock: 12,
      image: "/Models/Model4.png",
    },
    {
      name: "Winter Coat",
      amount: 250,
      stock: 5,
      image: "/Models/Model5.png",
    },
  ];

  return (
    <div className="relative w-full h-auto bg-gray-100 p-5">
      <div className="absolute left-0 top-0 h-full flex items-end md:items-end justify-center overflow-hidden">
        <h2 className="ml-10 transform -rotate-90 origin-left text-1xl md:text-2xl font-bold whitespace-nowrap uppercase tracking-widest truncate">
          {title}
        </h2>
      </div>
      <div className="grid md:grid-cols-4 gap-4 h-full pl-16 pr-4 py-4">
        <div className="md:col-span-2 md:h-full w-full">
          <ImageCard product={products[0]} />
        </div>
        <div className="md:col-span-2 grid grid-cols-2 grid-rows-2 gap-4">
          <ImageCard product={products[1]} />
          <ImageCard product={products[2]} />
          <ImageCard product={products[3]} />
          <ImageCard product={products[4]} />
        </div>
      </div>
    </div>
  );
};

export default ProductBanner;
