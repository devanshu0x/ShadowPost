export default function ThreadSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-8 bg-accent/30 rounded w-2/3 mx-auto" />
      <div className="h-4 bg-accent/80 rounded w-1/3 ml-auto" />
      <div className="h-64 bg-accent/80 rounded w-full" />
      <div className="h-6 bg-accent/30 rounded w-32" />
      <div className="space-y-3">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="h-4 bg-accent/80 rounded" />
        ))}
      </div>
    </div>
  );
}
