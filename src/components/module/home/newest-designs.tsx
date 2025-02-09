import SectionWrapper from "@/components/ui/section-wrapper";
import React from "react";
import SectionTitle from "../common/section-title";
import ProductCard from "../common/product-card";
import { Brush2 } from "iconsax-react";
import products from "@/constants/products";
import Image from "next/image";

const NewestDesigns = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="جدیدترین طرح های هفته"
        Icon={Brush2}
        link={{ title: "مشاهده بیشتر", href: "#" }}
      />
      <div className="grid grid-cols-4 gap-3  my-3">
        <div className="flex flex-col justify-between p-9">
          <h3 className="heading-4 text-gray-9">
            محصولاتی که طراحی شده رو ببینید و در صورت نیاز طرحشون رو مطابق سلیقه
            خودتون تغییر بدید
          </h3>
          <Image
            src={"/images/heart-pockets.png"}
            alt=""
            width={900}
            height={900}
          />
        </div>
        {products.slice(0, products.length - 1).map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default NewestDesigns;
