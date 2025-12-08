import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import type { LucideIcon } from "lucide-react";

interface InformationCardProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  isVisible: boolean;
}

export function InformationCard({
  icon: Icon,
  title,
  description,
  isVisible,
}: InformationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<gsap.core.Tween | null>(null);
  const isMountedRef = useRef(false);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (!isMountedRef.current) {
      gsap.set(card, { opacity: 0, x: 20 });
      isMountedRef.current = true;
    }

    if (animationRef.current) {
      animationRef.current.kill();
    }

    if (isVisible) {
      animationRef.current = gsap.fromTo(
        card,
        {
          opacity: 0,
          x: 20,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else {
      const currentOpacity = gsap.getProperty(card, "opacity");
      if (currentOpacity === undefined || currentOpacity === null) {
        gsap.set(card, { opacity: 1, x: 0 });
      }

      animationRef.current = gsap.to(card, {
        opacity: 0,
        x: 20,
        duration: 0.3,
        ease: "power2.in",
      });
    }

    return () => {
      if (animationRef.current) {
        animationRef.current.kill();
      }
    };
  }, [isVisible]);

  return (
    <div className="absolute right-4 sm:right-8 md:right-12 top-22 z-40">
      <div
        ref={cardRef}
        className="bg-[#DBDBDB]/70 backdrop-blur-sm rounded-lg border border-[#E9E9E9]/60 p-4 sm:p-6 max-w-xs shadow-lg"
      >
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
