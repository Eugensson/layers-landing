import { cn } from "@/lib/utils";

interface KeyProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: React.ReactNode;
}

export const Key = ({ className, children, ...props }: KeyProps) => {
  return (
    <div
      className={cn(
        "size-14 inline-flex items-center justify-center rounded-2xl text-xl text-neutral-950 font-medium bg-neutral-300",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
