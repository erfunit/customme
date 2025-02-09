import SectionWrapper from '@/components/ui/section-wrapper';
import React from 'react';
import SectionTitle from '../../common/section-title';
import { DiscountShape } from 'iconsax-react';
import Image from 'next/image';
import { specialSellList } from './special-sell-list';

const SpecialSell = () => {
  return (
    <SectionWrapper>
      <SectionTitle Icon={DiscountShape} title="فروش ویژه" />
      <div className="w-full grid grid-cols-2 gap-3 my-3">
        <div className="relative aspect-square  overflow-hidden rounded-16">
          <Image
            src={'/images/special-discount/furniture.jpg'}
            className="object-cover z-0"
            fill
            alt="discount"
          />
          <div className="bg-gradient-to-t from-black/85 to-black/0 absolute z-10 top-0 right-0 w-full h-full" />
          <h4 className="heading-3 text-primary-tint-3 absolute bottom-9 right-9 z-30">
            لوازم خانگی
          </h4>
          <div className="z-40 absolute left-5">
            <div className="relative w-[60px] h-[60px]">
              <Image
                src="/svg/discount-rectangle.svg"
                alt=""
                width={60}
                height={60}
              />
              <div className="absolute inset-0 top-3 flex flex-col text-white  body-1 items-center justify-center">
                <span className="font-mono">20%</span>
                <span>OFF</span>
              </div>
            </div>
          </div>
        </div>
        <div className="h-full grid grid-cols-2 gap-3 grid-rows-2">
          {specialSellList.map(({ image, title }) => (
            <div
              key={image}
              className="relative aspect-square  overflow-hidden rounded-16"
            >
              <Image
                src={image}
                className="object-cover z-0"
                fill
                alt="discount"
              />
              <div className="bg-gradient-to-t from-black/85 to-black/0 absolute z-10 top-0 right-0 w-full h-full" />
              <h4 className="heading-3 text-primary-tint-3 absolute bottom-9 right-9 z-30">
                {title}
              </h4>
              <div className="z-40 absolute left-5">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src="/svg/discount-rectangle.svg"
                    alt=""
                    width={60}
                    height={60}
                  />
                  <div className="absolute inset-0 top-3 flex flex-col text-white  body-1 items-center justify-center">
                    <span className="font-mono">20%</span>
                    <span>OFF</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SpecialSell;
