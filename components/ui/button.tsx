import { cva } from "class-variance-authority";

const classes = cva(
  "h-12 px-2 md:px-6 border rounded-full font-medium text-sm md:text-base",
  {
    variants: {
      variant: {
        primary: "bg-lime-400 border-lime-400 text-neutral-950",
        secondary: "bg-transparent border-white text-white",
      },
      size: {
        sm: "h-10",
      },
    },
  }
);

export const Button = (
  props: {
    variant: "primary" | "secondary";
    size?: "sm";
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  const { variant, size, className, ...otherProps } = props;

  return (
    <button
      className={classes({
        variant,
        size,
        className,
      })}
      {...otherProps}
    />
  );
};
