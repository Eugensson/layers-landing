import { cn } from "@/lib/utils";

export const Tag = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={cn(
        "px-3 py-1 inline-flex items-center gap-2 border border-lime-400 rounded-full text-lime-400 uppercase",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};
