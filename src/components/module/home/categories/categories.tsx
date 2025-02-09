import { MedalStar } from 'iconsax-react';
import React from 'react';
import SectionTitle from '../../common/section-title';
import CategoryCard from './category-card';
import { categoriesList } from './categories-list';
import SectionWrapper from '@/components/ui/section-wrapper';

const Categories = () => {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
};

export default Categories;
