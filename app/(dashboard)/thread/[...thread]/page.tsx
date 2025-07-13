import { MarkdownPreview } from "@/components/ui/crepeEditorPreview";
import { prisma } from "@/lib/prisma";
import { format } from "date-fns";
import { notFound } from "next/navigation";

async function getThread(threadId:string) {
    const data= await prisma.thread.findUnique({
        where:{
            id:threadId
        },
        select:{
            id:true,
            body:true,
            comments:true,
            publishDate:true,
            title:true
        }
    })
    return data;
}

export default async function({params}:{params:{thread: string[]}}){
    const segment= params.thread;
    if(segment.length!==1){
        notFound();
    }
    const threadId=segment[0];
    const threadData= await getThread(threadId);
    if(!threadData){
        notFound();
    }
    const date = format(threadData.publishDate,"E, do MMM yyyy"); 
    return <div className="px-2 sm:px-4 md:px-12 py-4 sm:py-6 md:py-12 max-w-4xl mx-auto">
        <div className="font-bold text-center text-lg sm:text-xl">{threadData.title}</div>
        <div className="mt-8 text-sm text-foreground/80 text-right">{date}</div>
        <div className="my-12 ">
            <MarkdownPreview value={threadData.body}/>
        </div>
    </div>
}