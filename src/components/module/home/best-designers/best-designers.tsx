import SectionWrapper from '@/components/ui/section-wrapper';
import React from 'react';
import SectionTitle from '../../common/section-title';
import { Star1 } from 'iconsax-react';
import designers from '@/constants/designers';
import DesignerCard from './designer-card';

const BestDesigners = () => {
  return (
    <SectionWrapper>
      <SectionTitle title="طراحان برتر" Icon={Star1} />
      <div className="grid grid-cols-4 gap-3  my-3">
        {designers.map((item, index) => (
          <DesignerCard {...item} key={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BestDesigners;
