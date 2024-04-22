import React, { ButtonHTMLAttributes } from "react";

import { Button as BaseButton } from "@radix-ui/themes";

type ButtonProps = any;

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

export default Button;
