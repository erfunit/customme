export type PrdocutItem = {
  title: string;
  description: string;
  price?: number;
  image: string;
};

const products: PrdocutItem[] = [
  {
    title: "کلاه مردانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "قاب موبایل آیفون",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "تی‌شرت مردانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "تی‌شرت زنانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "دفتر سیمی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "ماگ سرامیکی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "باکس غذا",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
  {
    title: "ماگ قابل طراحی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    price: 1500000,
    image: "/images/products/img.png",
  },
];

export const designs: Omit<PrdocutItem, "price">[] = [
  {
    title: "کلاه مردانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "قاب موبایل آیفون",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "تی‌شرت مردانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "تی‌شرت زنانه",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "دفتر سیمی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "ماگ سرامیکی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "باکس غذا",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
  {
    title: "ماگ قابل طراحی",
    description: "دارای رنگ‌بندی، قابل طراحی",
    image: "/images/designs/img.png",
  },
];

export default products;
