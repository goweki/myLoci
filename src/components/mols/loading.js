export function BouncyDots() {
  // Render
  return (
    <div className="flex flex-1 py-2 md:py-6 items-center justify-center space-x-2 pt-1 loader [&>*:nth-child(even)]:bg-primary-light [&>*:nth-child(odd)]:bg-primary-dark">
      <div className="w-4 h-4 rounded-full animate-[loader_0.6s_infinite_alternate] "></div>
      <div className="w-4 h-4 rounded-full animate-[loader_0.6s_infinite_alternate] animation-delay-200"></div>
      <div className="w-4 h-4 rounded-full animate-[loader_0.6s_infinite_alternate] animation-delay-400"></div>
      <div className="w-4 h-4 rounded-full animate-[loader_0.6s_infinite_alternate] animation-delay-600"></div>
    </div>
  );
}
