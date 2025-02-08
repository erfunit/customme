import { Magicpen } from "iconsax-react";
import Link from "next/link";
import React from "react";

const Navigations = () => {
  return (
    <nav className="container flex my-7">
      <Link
        href="#"
        className="flex gap-1 items-center justify-center w-fit bg-primary p-2 rounded-8 text-white"
      >
        <Magicpen color="currentColor" size={24} />
        <span className="button-2">خودت طراحیش کن!</span>
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
