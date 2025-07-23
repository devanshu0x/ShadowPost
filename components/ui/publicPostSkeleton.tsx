export default function PublicPostsSkeleton() {
  return (
    <div className="max-w-3xl mx-auto mt-8 animate-pulse space-y-4">
      {[...Array(5)].map((_, idx) => (
        <div key={idx} className="h-24 bg-accent/30 rounded-lg" />
      ))}
    </div>
  );
}
