type FooterLink = {
  title: string;
  links: {
    title: string;
    link: string;
  }[];
};

export const footerLinks: FooterLink[] = [
  {
    title: 'همراه با کاستومی',
    links: [
      {
        title: 'فروش محصولات',
        link: '#',
      },
      {
        title: 'فرصت همکاری',
        link: '#',
      },
      {
        title: 'تماس با ما',
        link: '#',
      },
      {
        title: 'نقشه سایت',
        link: '#',
      },
    ],
  },
  {
    title: 'خدمات مشتریان',
    links: [
      {
        title: 'سوالات متداول',
        link: '#',
      },
      {
        title: 'حریم خصوصی',
        link: '#',
      },
      {
        title: 'ثبت شکایت',
        link: '#',
      },
      {
        title: 'ضمانت نامه محصولات',
        link: '#',
      },
    ],
  },
  {
    title: 'راهنمای خرید',
    links: [
      {
        title: 'راهنمای ثبت سفارش',
        link: '#',
      },
      {
        title: 'شیوه های پرداخت',
        link: '#',
      },
      {
        title: 'نحوه ارسال سفارش ها',
        link: '#',
      },
      {
        title: 'شرایط بازگرداندن محصول',
        link: '#',
      },
    ],
  },
];
