
import { EditThread } from "@/components/ui/editThread";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

async function getThread(threadId:string) {
    const data= await prisma.thread.findUnique({
        where:{
            id:threadId
        },
        select:{
            id:true,
            body:true,
            title:true
        }
    })
    return data;
}

export default async function({params}:{params:{edit: string[]}}){
    const segment=params.edit;
    if(segment.length!=1){
        notFound();
    }
    const threadId=segment[0];
    const threadData= await getThread(threadId);
   
    
    if(!threadData){
        notFound();
    }
    return(<div className="my-4 sm:my-8">
        <div className="text-lg sm:text-xl md:text-2xl text-center">Edit Thread</div>
        <div className="px-2 sm:px-4 md:px-12 py-4 sm:py-6 md:py-12 max-w-4xl mx-auto">
            <EditThread threadData={threadData}/>
        </div>
    </div>)
}