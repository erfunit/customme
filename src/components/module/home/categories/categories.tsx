import { MedalStar } from "iconsax-react";
import React from "react";
import SectionTitle from "../../common/section-title";
import CategoryCard from "./category-card";
import { categoriesList } from "./categories-list";

const Categories = () => {
  return (
    <div className="w-full flex flex-col gap-2 my-40">
      <SectionTitle title="دسته بندی محصولات" Icon={MedalStar} />
      <div className="flex gap-3 my-3">
        {categoriesList.map((item) => (
          <CategoryCard
            key={item.title}
            title={item.title}
            image={item.image}
            link="#"
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
