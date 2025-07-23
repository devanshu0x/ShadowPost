"use server";
import { AddComment } from "@/components/ui/addComment";
import { CommentCard } from "@/components/ui/commentCard";
import { MarkdownPreview } from "@/components/ui/crepeEditorPreview";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { notFound } from "next/navigation";

export default async function ThreadPageContent({ threadId }: { threadId: string }) {
  const thread = await prisma.thread.findUnique({
    where: { id: threadId },
    select: {
      title: true,
      body: true,
      publishDate: true,
      comments: {
        select: {
          id: true,
          content: true,
          publishDate: true,
          username: true,
        },
      },
    },
  });

  if (!thread) notFound();
  const date = format(thread.publishDate, "E, do MMM yyyy");

  return (
    <>
      <div className="font-bold text-center text-lg sm:text-xl">{thread.title}</div>
      <div className="mt-8 text-sm text-foreground/80 text-right">{date}</div>
      <div className="my-12">
        <MarkdownPreview value={thread.body} />
      </div>
      <div>
        <div className="sm:text-lg mb-4">Comments</div>
        <AddComment threadId={threadId} />
        <div className="mt-8">
          {thread.comments.map((c) => (
            <CommentCard
              key={c.id}
              content={c.content}
              publishDate={c.publishDate}
              username={c.username}
            />
          ))}
        </div>
      </div>
    </>
  );
}

