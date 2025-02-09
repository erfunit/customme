import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import { Brush2 } from 'iconsax-react';

const Hero = () => {
  return (
    <div className="bg-primary-tint-3 rounded-16 flex items-center justify-center p-48 overflow-hidden relative">
      <div className="absolute rotate-[20deg] bg-primary-tint-2 w-[200px] h-[400px] -bottom-9 -left-[170px] rounded-8 z-0" />
      <div className="absolute rotate-[20deg] bg-primary-tint-2 w-[200px] h-[400px] -top-9 -right-[190px] rounded-8 z-0" />
      <div />
      <div className="flex flex-col gap-6 items-start">
        <h1 className="heading-3 text-gray-9">آنلاین شاپ کاستومی</h1>
        <h2 className="body-2 text-gray-9 max-w-md">
          آنلاین شاپ کاستومی محصولات متنوعی داره و این امکان رو بهتون میده
          خودتون رنگ و طرح و نوشته ی روی محصولات رو انتخاب کنید
        </h2>
        <div className="flex items-center justify-center gap-2">
          <Button size="lg" Icon={Brush2}>
            شروع طراحی
          </Button>
          <Button size="lg" variant="stroke">
            دیدن محصولات
          </Button>
        </div>
      </div>
      <Image
        quality={100}
        className="object-contain z-10"
        src="/images/hero-image.png"
        alt="CUSTOMME online shop"
        width={730}
        height={426}
      />
    </div>
  );
};

export default Hero;
