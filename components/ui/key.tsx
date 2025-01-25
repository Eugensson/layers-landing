import { twMerge } from "tailwind-merge";

interface KeyProps {
  className?: string;
  children: React.ReactNode;
  otherProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Key = ({ className, children, ...otherProps }: KeyProps) => {
  return (
    <div
      className={twMerge(
        "size-14 bg-neutral-300 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
