import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
}

export const FeatureCard = ({
  title,
  description,
  children,
  className,
}: FeatureCardProps) => {
  return (
    <article
      className={cn(
        "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
        className
      )}
    >
      <div className="aspect-video">{children}</div>
      <div>
        <h3 className="mt-6 text-3xl font-medium">{title}</h3>
        <p className="mt-2 text-white/50">{description}</p>
      </div>
    </article>
  );
};
