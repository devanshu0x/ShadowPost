import { Suspense } from "react";
import ThreadSkeleton from "./threadSkeleton";
import { notFound } from "next/navigation";
import EditThreadContent from "./editThreadContent";

export default async function EditShell({params}:{params:Promise<{edit: string[]}>}) {
  const {edit:segment}= await params;
    if(segment.length!=1){
        notFound();
    }
    const threadId=segment[0];

  return (
    <div className="px-2 sm:px-4 md:px-12 py-4 sm:py-6 md:py-12 max-w-4xl mx-auto">
      <Suspense fallback={<ThreadSkeleton />}>
        <EditThreadContent threadId={threadId} />
      </Suspense>
    </div>
  );
}
