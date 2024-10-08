import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from 'tailwind-merge'

export const CardHeader = ({
  title,
  description,
  className,
  iconClassName
}: {
  title: string;
  description: string;
  className?: string;
  iconClassName?: string;
}) => (
  <div className={twMerge(`flex flex-col p-6 md:py-8 md:px-10`, className)}>
    <div className="inline-flex items-center gap-2">
      <StarIcon className={twMerge(`size-9 text-emerald-300`, iconClassName)}></StarIcon>
      <h3 className="font-serif text-3xl">{title}</h3>
    </div>
    <p className="text-sm lg:text-base max-w-xs text-white/60 mt-2">{description}</p>
  </div>
);
