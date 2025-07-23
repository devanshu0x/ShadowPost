import PublicPostsContent from "@/components/ui/publicPostContent";
import PublicPostsSkeleton from "@/components/ui/publicPostSkeleton";
import { Suspense } from "react";

export default function Dashboard() {
  return (
    <div className="mt-4 px-4">
      <div className="text-md sm:text-lg md:text-xl text-center">
        Public Posts
      </div>
      <Suspense fallback={<PublicPostsSkeleton />}>
        <PublicPostsContent />
      </Suspense>
    </div>
  );
}
