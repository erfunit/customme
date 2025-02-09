import SectionWrapper from "@/components/ui/section-wrapper";
import React from "react";
import SectionTitle from "../common/section-title";
import { LikeShapes } from "iconsax-react";
import ProductCard from "../common/product-card";
import designs from "@/constants/designs";

const PopularDesigns = () => {
  return (
    <SectionWrapper>
      <SectionTitle
        title="طرح های پرطرفدار"
        Icon={LikeShapes}
        link={{ title: "مشاهده بیشتر", href: "#" }}
      />
      <div className="grid grid-cols-4 gap-3  my-3">
        {designs.map((item, index) => (
          <ProductCard {...item} isDesign key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PopularDesigns;
