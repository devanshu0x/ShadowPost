"use client";

import { useRef, useState } from "react";
import { MarkdownEditor } from "./crepeEditor";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./input";
import { Button } from "./button";
import { updateThread } from "@/lib/actions/updateThread";
import { useRouter } from "next/navigation";

interface Props{
    threadData:{
        id:string;
        body:string;
        title:string;
    }
}

export function EditThread({threadData}:Props){
    const markdown = useRef<string>(threadData.body);
    const [title,setTitle]=useState<string>(threadData.title);
    const router=useRouter();
    return(
        <div>
            <Label className="sm:text-lg mb-2">Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title of thread here"
        />
        <Label className="sm:text-lg mt-6 mb-2">Body</Label>
        <MarkdownEditor
          value={markdown.current}
          setValue={(value: string) => (markdown.current = value)}
        />
        <Button onClick={async()=>{await updateThread(title,markdown.current,threadData.id)
            router.push("/dashboard");
        }} className="mt-6">Update</Button>
        </div>
    )
}