import { twMerge } from "tailwind-merge";

export const Tag = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const { className, children, ...otherProps } = props;

  return (
    <div
      className={twMerge(
        "inline-flex items-center gap-2 px-3 py-1 border border-lime-400 rounded-full text-lime-400 uppercase",
        className
      )}
      {...otherProps}
    >
      <span>&#10038;</span>
      <span className="text-sm">{children}</span>
    </div>
  );
};
