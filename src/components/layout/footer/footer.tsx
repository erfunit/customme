import React from 'react';
import { Button } from '../../ui/button';
import { Facebook, Instagram, Xrp, Youtube } from 'iconsax-react';
import { footerLinks } from './footer-links';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      {/* TOP PART */}
      <div className=" bg-primary-shade-6">
        <div className="container flex items-center justify-between py-48">
          <form noValidate className="flex gap-2 items-end">
            <div className="flex flex-col gap-1 items-start">
              <label htmlFor="email" className=" body-4">
                برای دریافت آخرین تخفیف ها و اخبار عضو خبرنامه شوید
              </label>
              <input
                placeholder="ایمیل شما"
                type="email"
                id="email"
                className="bg-transparent border-white outline-none ring-1 w-full ring-white rounded-8  p-2 "
              />
            </div>
            <Button>ثبت</Button>
          </form>
          <div className="flex flex-col gap-3 items-center justify-center">
            <span className=" body-4">
              ما را در شبکه های اجتماعی دنبال کنید
            </span>
            <div className="flex  items-center gap-2 w-full justify-evenly">
              <Instagram size={24} color="currentColor" />
              <Facebook size={24} color="currentColor" />
              <Xrp size={24} color="currentColor" />
              <Youtube size={24} color="currentColor" />
            </div>
          </div>
        </div>
      </div>
      {/* BOTTOM PART */}
      <div className="container flex items-start py-48 gap-14">
        <div className="flex items-start justify-between flex-[0.7]">
          {footerLinks.map(({ title, links }) => (
            <div className="flex flex-col gap-3" key={title}>
              <span className="caption-1  border-b">{title}</span>
              <div className="flex flex-col gap-3">
                {links.map(({ title, link }) => (
                  <a href={link} key={title} className=" body-4">
                    {title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex-[0.3] flex flex-col justify-center items-center gap-5">
          <span className="heading-6 ">فروشگاه اینترنتی کاستومی</span>
          <div className=" body-5 flex gap-14">
            <span>تماس با پشتیبانی: ۰۲۱-۳۴۵۶۰۰۰</span>
            <span>پاسخگویی ۲۴ ساعته ، ۷ روز هفته</span>
          </div>
        </div>
      </div>
      <div className="container my-2">
        <span className="caption-4">
          تمام حقوق این وبسایت متعلق به فروشگاه آنلاین کاستومی می باشد
        </span>
      </div>
    </footer>
  );
};

export default Footer;
