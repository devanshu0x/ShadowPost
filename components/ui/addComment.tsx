"use client";

import { useEffect, useRef, useState } from "react";
import { MarkdownEditor } from "./crepeEditor";
import { UserBadge } from "./userBadge";
import { Button } from "./button";
import { createComment } from "@/lib/actions/createComment";
import Cookie from "js-cookie"
import { toast } from "sonner";

interface Props{
    threadId:string;
}

export function AddComment({threadId}:Props){
    const [loading,setLoading]=useState<boolean>(false);
    const [clear,setClear]=useState<boolean>(false);
    const name= Cookie.get("anonymous_name") || "Anon";
    const comment= useRef<string>("");
    useEffect(()=>{
        if(clear){
            setClear(false);
        }
    },[clear])
    return(<div className="p-2 bg-muted/40 rounded-sm">
        <h4 className="text-center font-semibold mb-2">New Comment</h4>
        <div>
        <UserBadge name={name}/>
        <MarkdownEditor setValue={(value)=>comment.current=value} value="" clear={clear} />
            <Button onClick={async()=>{
                setLoading(true);
                try{
                    await createComment(threadId,comment.current,name);
                    toast.success("Comment Added Successfully");
                    setClear(true); 
                }
                finally{
                    setLoading(false);
                }           
            }} className="mt-3" disabled={loading}>{loading ? "Adding..." : "Add Comment"}</Button>
        </div>
    </div>)
}