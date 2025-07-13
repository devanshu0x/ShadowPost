import { Postcard } from "@/components/ui/postcard";
import { prisma } from "@/lib/prisma";

async function getPublicPosts(){
  const response=await prisma.thread.findMany({
    where:{
      isPublic:true
    },
    select:{
      id:true,
      title:true,
      publishDate:true
    }
  })

  return response;
}

export default async function () {
  const publicPosts=await getPublicPosts();
  return (
    <div className="mt-4 px-4">
      <div className="text-md sm:text-lg md:text-xl text-center">
        Public Posts
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        {publicPosts.map((post)=><Postcard key={post.id} publishDate={post.publishDate} threadId={post.id} title={post.title} fromDashboard={true} />)}
      </div>
    </div>
  );
}
