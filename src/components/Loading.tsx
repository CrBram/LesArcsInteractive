interface LoadingProps {
  progress?: number;
}

const Loading = ({ progress = 0 }: LoadingProps) => {
  return (
    <div className="fixed inset-0 bg-[#E9E9E9] flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <img
          src="/images/les_arcs_icon.svg"
          alt="Les Arcs"
          className="w-32 h-auto"
        />

        <h1 className="text-2xl font-semibold text-[#1D1D1D]">Les Arcs</h1>

        <div className="w-64 h-1 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#1D1D1D] rounded-full transition-all duration-300 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
