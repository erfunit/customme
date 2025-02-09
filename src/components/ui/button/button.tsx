import React from "react";
import { ButtonProps } from "./button.type";
import { buttonClasses } from "./styles";

const Button = ({
  Icon,
  iconLeft = false,
  size = "md",
  color = "primary",
  isDisabled = false,
  variant = "fill",
  width = "lg",
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={buttonClasses({ size, color, variant, width })}
      {...props}
    >
      {Icon && !iconLeft && <Icon size={24} color="currentColor" />}
      {props.children}
      {Icon && iconLeft && <Icon size={24} color="currentColor" />}
    </button>
  );
};

export default Button;
