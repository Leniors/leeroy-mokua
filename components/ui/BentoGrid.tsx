// components/ui/BentoGrid.tsx
import { cn } from "@/lib/utils";
import React from "react";

type BentoGridProps = {
  className?: string;
  children?: React.ReactNode;
};

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[21rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

type BentoGridItemProps = {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  footer?: React.ReactNode; // 👈 optional enhancement
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  footer,
}: BentoGridItemProps) => {
  return (
    <div
      className={cn(
        "group/bento shadow-none row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-white/[0.2] bg-black p-4 transition duration-200 hover:shadow-xl",
        className
      )}
    >
      {/* Custom header like a background gradient or image */}
      {header}

      {/* Main content */}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon && <div className="mb-2">{icon}</div>}

        <div className="font-sans font-bold text-neutral-200 text-lg">
          {title}
        </div>

        <div className="font-sans text-sm font-normal text-neutral-300 mt-1">
          {description}
        </div>

        {/* Optional footer: tags, link, button */}
        {footer && <div className="mt-4">{footer}</div>}
      </div>
    </div>
  );
};
