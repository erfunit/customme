import { Magicpen, Icon } from "iconsax-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navigations = () => {
  return (
    <nav className="container flex my-7">
      <Link href="#">
        <Button width="sm" Icon={Magicpen}>
          خودت طراحیش کن!
        </Button>
      </Link>
      <ul className=" flex justify-evenly items-center flex-1">
        <li>پوشاک</li>
        <li>لوازم خانه</li>
        <li>قاب موبایل</li>
        <li>اکسسوری</li>
        <li>مدرسه و اداره</li>
        <li>کارت و پوستر</li>
        <li>جشن و مهمانی</li>
      </ul>
    </nav>
  );
};

export default Navigations;
