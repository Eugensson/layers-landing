import { twMerge } from "tailwind-merge";

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
  otherProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Avatar = ({ className, children, ...otherProps }: AvatarProps) => {
  return (
    <div
      className={twMerge(
        "relative size-20 rounded-full overflow-hidden border-4 border-blue-500 p-1 bg-neutral-900",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
