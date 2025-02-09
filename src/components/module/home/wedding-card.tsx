import { Button } from '@/components/ui/button';
import SectionWrapper from '@/components/ui/section-wrapper';
import { Brush2 } from 'iconsax-react';
import Image from 'next/image';
import React from 'react';

const WeddingCard = () => {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-4 gap-3">
        <div className="overflow-hidden rounded-16">
          <Image
            src="/images/wedding/bride.png"
            alt=""
            width={400}
            height={100}
          />
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-3">
          <div className="rounded-16 overflow-hidden">
            <Image
              src="/images/wedding/cake.png"
              alt=""
              width={400}
              className="object-cover h-full"
              height={40}
            />
          </div>
          <div className="rounded-16 overflow-hidden">
            <Image
              src="/images/wedding/flower.png"
              alt=""
              width={400}
              className="object-cover h-full"
              height={40}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 grid-rows-2 gap-3">
          <div className="rounded-16 overflow-hidden">
            <Image
              src="/images/wedding/stand.png"
              alt=""
              width={400}
              className="object-cover h-full"
              height={40}
            />
          </div>
          <div className="rounded-16 overflow-hidden">
            <Image
              src="/images/wedding/wed-table.png"
              alt=""
              width={400}
              className="object-cover h-full"
              height={40}
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-16">
          <Image
            src="/images/wedding/table.png"
            alt=""
            width={400}
            height={100}
          />
        </div>
      </div>
      <div className="w-full p-5 flex flex-col items-center justify-center gap-5">
        <h3 className="heading-4 text-gray-10">
          کارت دعوت عروسی رو خودتون طراحی کنید
        </h3>
        <Button Icon={Brush2}>شروع طراحی</Button>
      </div>
    </SectionWrapper>
  );
};

export default WeddingCard;
