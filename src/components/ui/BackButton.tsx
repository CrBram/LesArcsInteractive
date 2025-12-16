import { useNavigate } from "react-router-dom";
import { PlayMouseClick } from "../scene/MouseClickSound";

interface BackButtonProps {
  label: string;
  onClick?: () => void;
}

export function BackButton({ label, onClick }: BackButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    PlayMouseClick();

    if (onClick) {
      onClick();
    } else {
      setTimeout(() => {
        navigate("/");
      }, 200);
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="select-none cursor-pointer absolute left-4 sm:left-8 md:left-12 top-22 z-40 flex items-center gap-2 bg-[#DBDBDB]/70 backdrop-blur-sm rounded-full px-3 py-2 border border-[#E9E9E9]/60 text-sm font-medium text-black hover:bg-[#E9E9E9]/90 transition"
    >
      <span className="inline-block h-4 w-4">
        <svg
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
        >
          <path
            d="M11.5 4.5L6 10l5.5 5.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span>{label}</span>
    </button>
  );
}
