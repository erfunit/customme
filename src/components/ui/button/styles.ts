import clsx from 'clsx';
import { ButtonProps } from './button.type';

export const buttonClasses = ({ size, color, variant, width }: ButtonProps) => {
  return clsx(
    {
      // button text size
      'button-2': size === 'md' || size === 'lg',
      'caption-4': size === 'sm',
      // button color

      // primary
      'bg-primary text-white hover:bg-primary-shade-6 disabled:bg-primary-tint-2 disabled:text-primary-tint-5':
        color === 'primary' && variant === 'fill',
      'bg-transparent border border-primary text-primary hover:border-primary-shade-6 hover:text-primary-shade-6 disabled:border-primary-tint-2 disabled:text-primary-tint-5':
        color === 'primary' && variant === 'stroke',
      'bg-transparent text-primary hover:text-primary-shade-6 disabled:text-primary-tint-5':
        color === 'primary' && variant === 'none',

      // gray
      'bg-gray-9 text-white hover:bg-gray-10 disabled:bg-gray-3 disabled:text-gray-6':
        color === 'gray' && variant === 'fill',
      'bg-transparent border border-gray-9 text-gray-9 hover:border-gray-10 hover:text-gray-10 disabled:border-gray-3 disabled:text-gray-6':
        color === 'gray' && variant === 'stroke',
      'bg-transparent text-gray-6 hover:text-gray-10 disabled:text-gray-6':
        color === 'gray' && variant === 'none',

      // sizing
      'h-[40px]': size === 'md',
      'h-[48px]': size === 'lg',
      'h-[32px]': size === 'sm',

      'px-16': width === 'sm',
      'px-24': width === 'md',
      'px-40': width === 'lg',
      'w-full': width === 'full',
    },
    'transition-all rounded-8 flex justify-center items-center gap-1'
  );
};
