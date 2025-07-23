import { Suspense } from "react";
import MyPostsContent from "@/components/ui/myPostsContent";
import PublicPostsSkeleton from "@/components/ui/publicPostSkeleton";

export default function MyPostsPage() {
  return (
    <div className="mt-4 px-4">
      <div className="text-md sm:text-lg md:text-xl text-center">
        My Posts
      </div>
      <Suspense fallback={<PublicPostsSkeleton/>}>
        <MyPostsContent />
      </Suspense>
    </div>
  );
}
