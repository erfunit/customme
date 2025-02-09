import React from "react";
import SectionTitle from "../common/section-title";
import { MedalStar } from "iconsax-react";
import ProductCard from "../common/product-card";
import products from "@/constants/products";
import SectionWrapper from "@/components/ui/section-wrapper";

const ProductsPreview = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="پرفروش ترین ها"
        Icon={MedalStar}
        link={{ title: "مشاهده بیشتر", href: "#" }}
      />
      <div className="grid grid-cols-4 gap-3  my-3">
        {products.map((item, index) => (
          <ProductCard {...item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ProductsPreview;
