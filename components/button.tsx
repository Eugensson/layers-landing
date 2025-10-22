import { HTMLAttributes } from "react";
import { cva } from "class-variance-authority";

const classes = cva(
  "h-12 px-6 font-medium rounded-full border cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 text-neutral-950 border-lime-400",
        secondary: "border-white text-white bg-transparent",
      },
    },
  }
);

export const Button = (
  props: {
    variant: "primary" | "secondary";
  } & HTMLAttributes<HTMLButtonElement>
) => {
  const { variant, className, ...otherProps } = props;

  return (
    <button
      className={classes({
        variant,
        className,
      })}
      {...otherProps}
    />
  );
};
