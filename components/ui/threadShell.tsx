import { Suspense } from "react";
import ThreadPageContent from "./threadPageContent";
import ThreadSkeleton from "./threadSkeleton";
import { notFound } from "next/navigation";

export default async function ThreadShell({ params }: { params: Promise<{ thread: string[] }> }) {
  const { thread: segment } = await params;
  if (!segment || segment.length !== 1) notFound();

  const threadId = segment[0];

  return (
    <div className="px-2 sm:px-4 md:px-12 py-4 sm:py-6 md:py-12 max-w-4xl mx-auto">
      <Suspense fallback={<ThreadSkeleton />}>
        <ThreadPageContent threadId={threadId} />
      </Suspense>
    </div>
  );
}
