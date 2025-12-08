import { useCameraNavigation } from "@/contexts/CameraNavigationContext";
import type { LucideIcon } from "lucide-react";

interface InfoButtonItem {
  position: [number, number, number];
  icon?: LucideIcon;
  title: string;
  description?: string;
  restoreInitial?: boolean;
}

interface InfoButtonsProps {
  items: InfoButtonItem[];
}

export function InfoButtons({ items }: InfoButtonsProps) {
  const { navigateTo, activeTarget } = useCameraNavigation();

  const handleClick = (item: InfoButtonItem) => {
    navigateTo({
      position: item.position,
      restoreInitial: item.restoreInitial,
    });
  };

  const isActive = (item: InfoButtonItem) => {
    if (!activeTarget) return false;
    const [x1, y1, z1] = item.position;
    const [x2, y2, z2] = activeTarget.position;
    const threshold = 0.1;
    return (
      Math.abs(x1 - x2) < threshold &&
      Math.abs(y1 - y2) < threshold &&
      Math.abs(z1 - z2) < threshold &&
      item.restoreInitial === activeTarget.restoreInitial
    );
  };

  return (
    <div className="absolute left-4 sm:left-8 md:left-12 bottom-4 sm:bottom-8 md:bottom-12 z-40 flex flex-row gap-2">
      {items.map((item, index) => (
        <button
          key={index}
          type="button"
          onClick={() => handleClick(item)}
          className={`w-14 h-14 rounded-full backdrop-blur-sm border flex items-center justify-center hover:bg-[#E9E9E9]/90 transition cursor-pointer ${
            isActive(item)
              ? "bg-[#E9E9E9]/90 border-[#A4E3D8] border-2"
              : "bg-[#DBDBDB]/70 border-[#E9E9E9]/60"
          }`}
          title={item.description || item.title}
        >
          {item.icon ? (
            <item.icon className="w-6 h-6 text-black" />
          ) : (
            <span className="text-black text-xs font-medium text-center px-2">
              {item.title}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
