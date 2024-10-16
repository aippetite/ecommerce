import { DressStyleProps } from "@/types/types";
import React from "react";



const DressStyleCard: React.FC<DressStyleProps> = ({ style, imageSrc }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-md relative h-full">
    <img
      src={imageSrc}
      alt={`${style} style`}
      className="w-full h-full object-cover"
    />
    <div className="absolute bottom-0 left-0 p-4 bg-white bg-opacity-75">
      <h3 className="text-xl font-bold">{style}</h3>
    </div>
  </div>
);

const StyleCategories: React.FC = () => {
  const styles: DressStyleProps[] = [
    { style: "Casual", imageSrc: "/StyleCategories/Casual.png" },
    { style: "Formal", imageSrc: "/StyleCategories/Formal.png" },
    { style: "Party", imageSrc: "/StyleCategories/Party.png" },
    { style: "Gym", imageSrc: "/StyleCategories/Gym.png" },
  ];

  return (
    <div className="w-[80%] h-[80%] flex justify-center items-center">
      <div className="bg-[#f0f0f0] md:p-[80px] p-[20px] rounded-2xl">
        <h2 className="text-4xl font-black mb-6 text-center">
          BROWSE BY DRESS STYLE
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          <div className="col-span-2 md:col-span-2 aspect-w-1 aspect-h-1">
            <DressStyleCard {...styles[0]} />
          </div>
          <div className="col-span-2 md:col-span-4 aspect-w-1 aspect-h-1">
            <DressStyleCard {...styles[1]} />
          </div>
          <div className="col-span-2 md:col-span-4 aspect-w-2 aspect-h-1">
            <DressStyleCard {...styles[2]} />
          </div>
          <div className="col-span-2 md:col-span-2 aspect-w-1 aspect-h-1">
            <DressStyleCard {...styles[3]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleCategories;
