"use client";

import { useRef, useState } from "react";
import { MarkdownEditor } from "./crepeEditor";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Input } from "./input";
import { Button } from "./button";
import { updateThread } from "@/lib/actions/updateThread";
import { useRouter } from "next/navigation";
import { Switch } from "./switch";
import { toast } from "sonner";

interface Props {
  threadData: {
    id: string;
    body: string;
    title: string;
    isPublic:boolean;
  };
}

export function EditThread({ threadData }: Props) {
  const markdown = useRef<string>(threadData.body);
  const [title, setTitle] = useState<string>(threadData.title);
  const [isPublic,setIsPublic]=useState<boolean>(threadData.isPublic);
  const [loading,setLoading]=useState<boolean>(false);
  const router = useRouter();
  return (
    <div>
        <div className="my-4 sm:my-6 md:my-8 text-right">
            <Button onClick={()=>router.push(`/thread/${threadData.id}`)} >View Thread</Button>
        </div>
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
      <div className="mt-6 flex space-x-4">
                <Switch checked={isPublic} onClick={()=>setIsPublic((s)=>!s)} />
                <Label>Make it Public</Label>
              </div>
      <Button
      disabled={loading}
        onClick={async () => {
          setLoading(true);
          try{
            const res=await updateThread(title, markdown.current,isPublic, threadData.id);
            if(res.success){
              router.push("/dashboard");
            }
            else{
              toast.error(res.message || "Failed to update thread");
            }
          }
          finally{
            setLoading(false);
          }
        }}
        className="mt-6"
      >
        {loading? "Updating...":"Update"}
      </Button>
    </div>
  );
}
