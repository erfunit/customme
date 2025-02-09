import { Button } from '@/components/ui/button';
import { Icon } from 'iconsax-react';
import Link from 'next/link';
import React from 'react';

type SectionTitleProps = {
  Icon: Icon;
  title: string;
  link?: {
    title: string;
    href: string;
  };
};

const SectionTitle = ({ Icon, title, link }: SectionTitleProps) => {
  return (
    <div className="text-gray-10 flex items-center gap-2">
      <Icon size={40} color="currentColor" />
      <h3 className="heading-4">{title}</h3>
      <div className="flex-1 bg-gray-4 h-[1px]" />
      {link && (
        <Link href={link.href}>
          <Button variant="none">{link.title}</Button>
        </Link>
      )}
    </div>
  );
};

export default SectionTitle;
