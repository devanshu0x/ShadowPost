"use client";

import { Button } from "@/components/ui/button";
import { MarkdownEditor } from "@/components/ui/crepeEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { createThread } from "@/lib/actions/createThread";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";

export default function () {
  const router = useRouter();
  const [title, setTitle] = useState<string>("");
  const getMarkDown = useRef<string>("");
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const handlePublish = async () => {
    const md = getMarkDown.current;
    if (!md) {
      alert("No body present");
      return;
    }

    await createThread(title, md, isPublic);
  };

  return (
    <div className="px-4 py-4 sm:px-8 ">
      <div className="text-lg text-center sm:text-xl mb-4 sm:mb-6">
        New Thread
      </div>
      <div className="max-w-4xl mx-auto">
        <Label className="sm:text-lg mb-2">Title</Label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter title of thread here"
        />
        <Label className="sm:text-lg mt-6 mb-2">Body(Supports Markdown)</Label>
        <MarkdownEditor
          value=""
          setValue={(value: string) => (getMarkDown.current = value)}
        />
        <div className="mt-6 flex space-x-4">
          <Switch checked={isPublic} onClick={()=>setIsPublic((s)=>!s)} />
          <Label>Make it Public</Label>
        </div>
        <Button
          onClick={async () => {
            await handlePublish();
            router.push("/dashboard");
          }}
          className="mt-4"
        >
          Publish
        </Button>
      </div>
    </div>
  );
}
