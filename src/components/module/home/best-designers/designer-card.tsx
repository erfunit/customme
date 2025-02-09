import { Button } from "@/components/ui/button";
import { DesignerItem } from "@/constants/designers";
import { ProfileAdd } from "iconsax-react";
import Image from "next/image";
import React from "react";

type DesignerCardProps = DesignerItem & {};

const DesignerCard = (props: DesignerCardProps) => {
  return (
    <div className="flex flex-col rounded-16 border p-3 border-gray-4 relative overflow-hidden">
      <div className="absolute w-full h-[100px] z-0 bg-primary-tint-2 right-0  top-0" />
      <div className="flex justify-center items-center p-9 z-10 flex-col gap-3">
        <Image
          src={props.avatar}
          alt={`${props.name} - طراح برتر در کاستومی`}
          width={100}
          height={100}
          className="object-cover rounded-full"
        />
        <h5 className="body-3 text-gray-10">{props.name}</h5>
      </div>
      <div className="flex items-center caption-4 justify-center text-gray-7 w-full gap-2">
        <span>دنبال کنندگان: {props.followerCount}</span>
        <div className="h-full w-[1px] bg-gray-7" />
        <span>تعداد طرح ها: {props.designsCount}</span>
        <div className="h-full w-[1px] bg-gray-7" />
        <span>آمار فروش: {props.sellCount}</span>
      </div>
      <div className="flex gap-3 my-5">
        {props.designs.map((item) => (
          <div
            key={item}
            className="w-full flex-1 rounded-8 aspect-square border relative"
          >
            <Image fill src={item} alt="" />
          </div>
        ))}
      </div>
      <Button Icon={ProfileAdd} width="full" variant="stroke">
        دنبال کردن
      </Button>
    </div>
  );
};

export default DesignerCard;
