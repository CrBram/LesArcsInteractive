import type { LucideIcon } from "lucide-react";

interface InformationCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
}

export function InformationCard({
  icon: Icon,
  title,
  description,
}: InformationCardProps) {
  return (
    <div className="absolute right-4 sm:right-8 md:right-12 top-22 z-40">
      <div className="bg-[#DBDBDB]/70 backdrop-blur-sm rounded-lg border border-[#E9E9E9]/60 p-4 sm:p-6 max-w-xs shadow-lg">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            {Icon && (
              <div className="flex-shrink-0">
                <Icon className="w-6 h-6 text-black" />
              </div>
            )}
            <h3 className="text-black text-lg font-medium">{title}</h3>
          </div>
          {description && (
            <p className="text-black text-sm leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
