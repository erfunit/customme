import { Button } from "@/components/ui/button";
import { PrdocutItem } from "@/constants/products";
import { GalleryAdd, Heart } from "iconsax-react";
import Image from "next/image";
import React from "react";

type ProductCardProps = PrdocutItem & {
  isDesign?: boolean;
};

const ProductCard = ({
  title,
  image,
  description,
  price,
  isDesign = false,
}: ProductCardProps) => {
  return (
    <div className="w-full rounded-16 border border-gray-5 hover:border-gray-8 transition-all p-16">
      <div className="object-cover relative aspect-square w-full rounded-8 overflow-hidden">
        <Image src={image} alt={title} fill />
        {!isDesign && (
          <div dir="ltr" className="absolute bottom-1 flex left-1 -space-x-1">
            <div className="bg-yellow-500 w-20 aspect-square rounded-full" />
            <div className="bg-blue-500 w-20 aspect-square rounded-full" />
            <div className="bg-pink-500 w-20 aspect-square rounded-full" />
            <div className="bg-purple-500 w-20 aspect-square rounded-full" />
            <div className="bg-cyan-500 w-20 aspect-square rounded-full" />
          </div>
        )}
      </div>
      <div className="w-full pt-3 flex flex-col gap-3 mb-6 text-black">
        <div className="flex w-full items-center justify-between">
          <h4 className="heading-6">{title}</h4>
          <button className="text-gray-9">
            <Heart size={28} color="currentColor" />
          </button>
        </div>
        <p className="body-4">{description}</p>
      </div>
      <div className="flex w-full">
        {!isDesign ? (
          <div className="mr-auto">
            <span className="heading-5">{price?.toLocaleString()}</span>{" "}
            <span className="heading-6">تومان</span>
          </div>
        ) : (
          <Button width="full" variant="stroke" Icon={GalleryAdd}>
            افزوردن به گالری
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
