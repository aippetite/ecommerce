import { Suspense } from "react";
import Banner from "@/components/banner/Banner";
import Image from "next/image";
import ProductSection from "@/components/common/ProductSection";
import StyleCategories from "@/components/common/StyleCategories";
import ProductBanner from "@/components/banner/ProductBanner";
import ProductShowcase from "@/components/common/ProductShowcase";
import CollectionBanner from "@/components/banner/CollectionBanner";
import InstagramBanner from "@/components/banner/InstagramBanner";
import NewsletterSubscribe from "@/components/common/NewsLetterSubscribe";
import TestimonialSection from "@/components/common/Testimonial";
import { BarndsProps } from "@/types/types";

// Define the Product interface
interface Product {
  name: string;
  details: string;
  rating: number;
  amount: number;
  image: string;
}

const Home = () => {
  // Define brands data
  const brands: BarndsProps[] = [
    { image: "/Brands/Graphic.png" },
    { image: "/Brands/GlodenStudio.png" },
    { image: "/Brands/FurnitureDesign.png" },
    { image: "/Brands/Salva.png" },
    { image: "/Brands/Travel.png" },
  ];

  // Define product categories
  const category = ["All products", "T Shirts", "Hoodies", "Jackets"];

  // Define products data
  const products: Product[] = [
    {
      name: "AdiColor Classic Joggers",
      details: "Details",
      rating: 4,
      amount: 120,
      image: "/ProductShowcase/card1.png",
    },
    {
      name: "Nike Sportswear Future luxe",
      details: "Details",
      rating: 3,
      amount: 150,
      image: "/ProductShowcase/card2.png",
    },
    {
      name: "Geometric Print Scarf",
      details: "Details",
      rating: 2,
      amount: 200,
      image: "/ProductShowcase/card3.png",
    },
    {
      name: "Yellow Reserved Hoddie",
      details: "Details",
      rating: 1,
      amount: 180,
      image: "/ProductShowcase/card4.png",
    },
    {
      name: "Basic Dress Green",
      details: "Details",
      rating: 4,
      amount: 120,
      image: "/ProductShowcase/card5.png",
    },
    {
      name: "Nike Air Zoom",
      details: "Details",
      rating: 3,
      amount: 150,
      image: "/ProductShowcase/card6.png",
    },
    {
      name: "Nike repel",
      details: "Details",
      rating: 2,
      amount: 200,
      image: "/ProductShowcase/card7.png",
    },
    {
      name: "Nike SportsWear Future Luxe",
      details: "Details",
      rating: 1,
      amount: 180,
      image: "/ProductShowcase/card8.png",
    },
  ];

  // Define a second set of products
  const productsTwo: Product[] = [
    {
      name: "AdiColor Classic Joggers",
      details: "Details",
      rating: 4,
      amount: 120,
      image: "/ProductShowcase/card1.png",
    },
    {
      name: "Nike Sportswear Future luxe",
      details: "Details",
      rating: 3,
      amount: 150,
      image: "/ProductShowcase/card2.png",
    },
    {
      name: "Geometric Print Scarf",
      details: "Details",
      rating: 2,
      amount: 200,
      image: "/ProductShowcase/card3.png",
    },
    {
      name: "Yellow Reserved Hoddie",
      details: "Details",
      rating: 1,
      amount: 180,
      image: "/ProductShowcase/card4.png",
    },
  ];

  // Define Instagram images
  const instagramImages = [
    "/InstagramImages/card1.png",
    "/InstagramImages/card2.png",
    "/InstagramImages/card3.png",
    "/InstagramImages/card4.png",
    "/InstagramImages/card5.png",
    "/InstagramImages/card6.png",
  ];

  return (
    <section className="w-full flex flex-col justify-center items-center">
      <Suspense fallback={<p>Loading</p>}>
        {/* Main banner */}
        <div className="bg-[#f2f0f1] w-full flex justify-center items-center">
        <Banner title="Find Clothes That Matches Your Style" message="Shop Now" />
        </div>
       

        {/* Brand logos */}
        <div className="w-full flex justify-evenly items-center h-[100px] bg-black md:px-[300px]">
          <Image src="/Zara.png" alt="Image 1" width={80} height={80} />
          <Image src="/Gucci.png" alt="Image 2" width={80} height={80} />
          <Image src="/Prada.png" alt="Image 3" width={80} height={80} />
        </div>

        {/* Product sections */}
        <ProductSection title="New Arrivals" />
        <ProductSection title="Top Selling" />
        <StyleCategories />

        {/* Brand showcase */}
        <div className="w-full flex justify-evenly h-auto px-[20px] bg-white md:px-[10px]">
          {brands.map((brand, index) => (
            <div key={index} className="sm:w-[30px] sm:h-[30px] lg:w-[200px] lg:h-[200px]">
              <Image
                src={brand.image}
                alt={brand.image}
                layout="responsive"
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Additional sections */}
        <ProductBanner title="Explore New And Popular Styles" />
        <ProductShowcase title="Or Subscribe To The NewsLetter" category={category} products={products} />
        <CollectionBanner />
        <ProductShowcase title="Best Seller" category={category} products={productsTwo} />
        <InstagramBanner title="Follow Products And Discounts on Instagram" images={instagramImages} />
        <NewsletterSubscribe title="Or Subscribe To The NewsLetter" />
        <TestimonialSection />
      </Suspense>
    </section>
  );
};

export default Home;
