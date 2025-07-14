"use client";

import { useRef } from "react";
import { MarkdownEditor } from "./crepeEditor";
import { UserBadge } from "./userBadge";
import { Button } from "./button";
import { createComment } from "@/lib/actions/createComment";
import Cookie from "js-cookie"
import { useRouter } from "next/navigation";

interface Props{
    threadId:string;
}

export function AddComment({threadId}:Props){
    const router=useRouter();
    const name= Cookie.get("anonymous_name") || "Anon";
    const comment= useRef<string>("");
    return(<div className="p-2 bg-muted/40 rounded-sm">
        <h4 className="text-center font-semibold mb-2">New Comment</h4>
        <div>
        <UserBadge name={name}/>
        <MarkdownEditor setValue={(value)=>comment.current=value} value="" />
            <Button onClick={async()=>{
                await createComment(threadId,comment.current,name);
                comment.current="";
                router.refresh();
            }} className="mt-3">Add Comment</Button>
        </div>
    </div>)
}