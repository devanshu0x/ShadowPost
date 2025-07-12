"use client";

import { Button } from "@/components/ui/button";
import { MilkdownEditorWrapper } from "@/components/ui/crepeEditor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function(){
  return (<div className="px-4 py-4 sm:px-8 ">
    <div className="text-lg text-center sm:text-xl mb-4 sm:mb-6">New Thread</div>
    <div className="max-w-4xl mx-auto">
      <Label className="sm:text-lg mb-2">Title</Label>
    <Input placeholder="Enter title of thread here"/>
    <Label className="sm:text-lg mt-6 mb-2">Body</Label>
    <MilkdownEditorWrapper/>
    <Button className="mt-4">Publish</Button>
    </div>
    
  </div>)
}