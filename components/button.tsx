import { ButtonHTMLAttributes } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const classes = cva(
  "font-medium rounded-full border cursor-pointer transition-colors duration-200",
  {
    variants: {
      variant: {
        primary:
          "bg-lime-400 text-neutral-950 border-lime-400 hover:bg-lime-300",
        secondary: "border-white text-white bg-transparent hover:bg-white/10",
      },
      size: {
        sm: "h-10 px-4 text-sm",
        md: "h-12 px-6 text-base",
        lg: "h-14 px-8 text-lg",
      },
    },
    defaultVariants: {
      size: "md",
      variant: "primary",
    },
  }
);

type ButtonVariants = VariantProps<typeof classes>;

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

export const Button = ({
  variant,
  size,
  className,
  ...otherProps
}: ButtonProps) => {
  return (
    <button className={classes({ variant, size, className })} {...otherProps} />
  );
};
