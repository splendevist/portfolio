export default function Star() {
  return (
    <div>
      <div className="h-8 w-12 mb-4 bg-amber-300 relative overflow-hidden animate-pulse-two">
        <div className="h-full w-full bg-white rounded-full absolute -top-1/2 -left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute -top-1/2 left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute top-1/2 left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute top-1/2 -left-1/2"></div>
      </div>
      <div className="h-28 w-24 mb-16 bg-amber-300 relative overflow-hidden animate-pulse">
        <div className="h-full w-full bg-white rounded-full absolute -top-1/2 -left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute -top-1/2 left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute top-1/2 left-1/2"></div>
        <div className="h-full w-full bg-white rounded-full absolute top-1/2 -left-1/2"></div>
      </div>
    </div>
  );
}
