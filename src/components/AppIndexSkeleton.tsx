
function AppIndexSkeleton() {
  return (
    <div className="grid grid-cols-3 lg:grid-cols-4 gap-4 animate-pulse py-6 px-10">
      {[...Array(8)].map((_, index) => (
        <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-52 bg-gray-300"></div>
          <div className="flex items-center justify-between p-2">
            <div>
              <div className="w-24 h-6 bg-gray-300 mb-2"></div>
              <div className="w-16 h-6 bg-gray-300"></div>
            </div>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AppIndexSkeleton;
