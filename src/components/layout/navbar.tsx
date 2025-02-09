import { LoginCurve, SearchNormal1, ShoppingCart } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-32 container">
      <div>
        <Image
          src="/logo/header.svg"
          alt="costomme logo"
          width={200}
          height={55}
        />
      </div>
      <div>
        <button className="w-[596px] rounded-12 h-44 border-gray-4 border flex justify-between items-center text-primary body-4 px-24">
          <span>جستجو</span>
          <SearchNormal1 size={24} color="currentColor" />
        </button>
      </div>
      <div className="flex gap-48">
        <Link
          href={"#"}
          className="text-gray-10 flex items-center gap-1 hover:text-primary-shade-6 transition-all"
        >
          <LoginCurve size={24} color="currentColor" />
          <span>ورود و ثبت نام</span>
        </Link>
        <Link
          href={"#"}
          className="text-gray-10 flex items-center gap-1 hover:text-primary-shade-6 transition-all"
        >
          <ShoppingCart size={24} color="currentColor" />
          <span>سبد خرید</span>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
