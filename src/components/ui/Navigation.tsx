import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 py-4 mx-4 sm:mx-8 md:mx-12">
      <div className="flex items-center justify-between bg-[#DBDBDB]/30 backdrop-blur-sm rounded-[16px] border border-[#E9E9E9]/30 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/les_arcs_icon.svg"
            alt="Les Arcs"
            className="h-14 w-14"
          />
          <div className="flex flex-col -mt-1">
            <span className="text-black font-medium text-md">Les Arcs</span>
            <span className="text-black text-xs italic text-right leading-none -mt-1">
              Interactive
            </span>
          </div>
        </Link>
        <div className="font-medium text-xs text-[#A4E3D8]">BC.</div>
      </div>
    </nav>
  );
}
