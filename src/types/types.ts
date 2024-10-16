export interface TestimonialProps {
  name: string;
  review: string;
  rating: number;
  verified: boolean;
}

export interface BarndsProps {
  image: string;
}

export interface Product {
  name: string;
  details: string;
  rating: number;
  amount: number;
  image: string;
}

export interface BannerProps {
  title: string;
  message: string;
}

export type InstagramBannerProps = {
  title: string;
  images: string[];
};

export interface Product {
  name: string;
  amount: number;
  image: string;
  stock: number;
}

export interface ImageCardProps {
  product: {
    name: string;
    amount: number;
    image: string;
    stock: number;
  };
}

export interface ProductCardProps {
  image: string;
  name: string;
  rating: number;
  amount: number;
}

export interface Product {
  name: string;
  details: string;
  rating: number;
  amount: number;
  image: string;
}

export interface ProductSectionProps {
  title: string;
}

export interface ProductShowcaseProps {
  title: string;
  category : any;
  products : any;
}

export interface ProductShowcaseCardProps {
  image: string;
  name: string;
  rating: number;
  amount: number;
}

export interface DressStyleProps {
  style: string;
  imageSrc: string;
}
