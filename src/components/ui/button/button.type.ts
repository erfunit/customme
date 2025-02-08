import { Icon } from "iconsax-react";

export type ButtonProps = React.ComponentProps<"button"> & {
  Icon?: Icon;
  iconLeft?: boolean;
  color?: "primary" | "gray";
  variant?: "fill" | "stroke" | "none";
  isDisabled?: boolean;
  size?: "sm" | "md" | "lg";
  width?: "full" | "md" | "sm" | "lg";
};
