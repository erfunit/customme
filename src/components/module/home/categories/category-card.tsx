import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type CategoryCardProps = {
  image: string;
  title: string;
  link: string;
};

const CategoryCard = ({ image, title, link }: CategoryCardProps) => {
  return (
    <Link
      href={link}
      className="p-8 flex-1 rounded-16 border border-gray-4 transition-all hover:border-gray-8"
    >
      <Image
        src={image}
        alt={`${title} در کاستومی`}
        width={200}
        height={100}
        className="object-cover w-full aspect-video rounded-8"
      />
      <div className="text-center text-gray-10 w-full pt-1 caption-1">
        {title}
      </div>
    </Link>
  );
};

export default CategoryCard;
