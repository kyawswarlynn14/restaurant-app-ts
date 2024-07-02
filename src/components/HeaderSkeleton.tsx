
function HeaderSkeleton() {
  return (
    <div className="sticky z-50 top-0 w-full bg-yellow-500 px-10 py-3 flex justify-between items-center animate-pulse">
      <div className="flex items-center gap-2">
        <div className="w-32 h-8 bg-gray-300 rounded"></div>
        <div className="w-46 h-10 bg-gray-300 rounded"></div>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-16 h-10 bg-gray-300 rounded"></div>
        <div className="w-16 h-10 bg-gray-300 rounded"></div>
        <div className="w-16 h-10 bg-gray-300 rounded"></div>
        <div className="w-16 h-10 bg-gray-300 rounded"></div>
        <div className="w-10 h-10 bg-gray-300 rounded-full relative">
          <div className="absolute top-0 right-0 w-5 h-5 bg-red-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default HeaderSkeleton;
