import { cn } from "@/lib/utils";

interface AvatarProps {
  className?: string;
  children: React.ReactNode;
  otherProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const Avatar = ({ className, children, ...otherProps }: AvatarProps) => {
  return (
    <div
      className={cn(
        "relative p-1 size-20 rounded-full overflow-hidden border-4 border-blue-500 bg-neutral-900",
        className
      )}
      {...otherProps}
    >
      {children}
    </div>
  );
};
