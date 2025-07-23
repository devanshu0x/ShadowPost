import { Postcard } from "@/components/ui/postcard";
import { prisma } from "@/lib/prisma";

export default async function PublicPostsContent() {
  const publicPosts = await prisma.thread.findMany({
    where: {
      isPublic: true,
    },
    select: {
      id: true,
      title: true,
      publishDate: true,
    },
  });

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {publicPosts.map((post) => (
        <Postcard
          key={post.id}
          publishDate={post.publishDate}
          threadId={post.id}
          title={post.title}
          fromDashboard={true}
        />
      ))}
    </div>
  );
}
