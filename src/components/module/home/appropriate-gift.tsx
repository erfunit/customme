import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';

const AppropriateGift = () => {
  return (
    <div className="w-full flex gap-3">
      <div className="w-full flex-1 bg-primary-tint-3 rounded-16 flex items-center overflow-hidden gap-5">
        <div className="flex flex-col items-start flex-1 p-7 gap-7">
          <h5 className="text-gray-10 heading-4">
            محصولات مناسب هدیه دادن به آقایان
          </h5>
          <Button variant="stroke">دیدن محصولات</Button>
        </div>
        <Image src="/images/gifts/men.png" alt="" height={300} width={320} />
      </div>
      <div className="w-full flex-1 bg-primary-tint-3 rounded-16 flex items-center overflow-hidden gap-5">
        <div className="flex flex-col items-start flex-1 p-7 gap-7">
          <h5 className="text-gray-10 heading-4">
            محصولات مناسب هدیه دادن به خانم ها
          </h5>
          <Button variant="stroke">دیدن محصولات</Button>
        </div>
        <Image src="/images/gifts/women.png" alt="" height={300} width={320} />
      </div>
    </div>
  );
};

export default AppropriateGift;
