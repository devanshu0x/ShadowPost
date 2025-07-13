import { Postcard } from "@/components/ui/postcard";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

async function getMyPosts(userId:string){
  const response=await prisma.thread.findMany({
    where:{
      userId:userId
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
    const session= await getServerSession(authOptions);
    if(!session.user.id){
        notFound();
    }
  const myPosts=await getMyPosts(session.user.id);
  return (
    <div className="mt-4 px-4">
      <div className="text-md sm:text-lg md:text-xl text-center">
        My Posts
      </div>
      <div className="max-w-3xl mx-auto mt-8">
        {myPosts.map((post)=><Postcard key={post.id} publishDate={post.publishDate} threadId={post.id} title={post.title} fromDashboard={false} />)}
      </div>
    </div>
  );
}
