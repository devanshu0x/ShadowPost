"use client";
import {format} from "date-fns"
import { useRouter } from "next/navigation";

interface postcardProps{
    title: string;
    threadId: string;
    publishDate:Date;
}

export function Postcard({title,threadId,publishDate}:postcardProps) {
  const date = format(publishDate,"E, do MMM yyyy");
    const rounter=useRouter();
  return (
    <div onClick={()=>rounter.push(`/thread/${threadId}`)} className="rounded-xl border bg-muted/40 px-6 py-4 mb-4 shadow-sm transition-colors hover:bg-muted duration-300">
      <h2 className="text-base  font-medium text-foreground text-center">{title}</h2>
      <p className="mt-2 text-xs sm:text-sm font-light text-muted-foreground">Published on <span className="text-foreground/90" >{date}</span></p>
    </div>
  );
}
