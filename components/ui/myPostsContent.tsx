import { Postcard } from "@/components/ui/postcard";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

export default async function MyPostsContent() {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    notFound();
  }

  const myPosts = await prisma.thread.findMany({
    where: {
      userId: session.user.id,
    },
    select: {
      id: true,
      title: true,
      publishDate: true,
    },
  });

  return (
    <div className="max-w-3xl mx-auto mt-8">
      {myPosts.map((post) => (
        <Postcard
          key={post.id}
          publishDate={post.publishDate}
          threadId={post.id}
          title={post.title}
          fromDashboard={false}
        />
      ))}
    </div>
  );
}
