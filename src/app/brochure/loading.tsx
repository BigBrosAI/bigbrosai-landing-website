export default function BrochureLoading() {
  return (
    <div className="w-full h-screen flex flex-col bg-gray-50">
      {/* Header skeleton */}
      <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
        <div className="h-8 w-24 bg-gray-200 rounded animate-pulse" />
        <div className="h-6 w-40 bg-gray-200 rounded animate-pulse hidden sm:block" />
        <div className="h-9 w-28 bg-gray-200 rounded-lg animate-pulse" />
      </div>

      {/* Loading content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-success-200 border-t-success-600 rounded-full animate-spin mx-auto" />
          <p className="text-gray-600 text-sm font-medium">Loading brochure...</p>
        </div>
      </div>
    </div>
  );
}
