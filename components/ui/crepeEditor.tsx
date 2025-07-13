"use client";
import { uploadImage } from "@/lib/actions/uploadImage";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { useEffect, useState } from "react";

interface Props{
  setValue:(value:string)=>void,
  value:string
}

const CrepeEditor= ({setValue,value}:Props) => {
  const [markdown, setMarkdown]=useState("");
  const { get } = useEditor((root) => {
    const crepe= new Crepe({ root,
      defaultValue:value,
      featureConfigs:{
        "image-block":{
          onUpload: (file)=>{
            const formData=new FormData();
            formData.append(`file`,file);
            return uploadImage(formData);
          }
        },
      }
     } );
     crepe.on((listener)=>{
      listener.markdownUpdated((_,md)=>{
        setMarkdown(md);
      })
     })

     return crepe;
  });

  useEffect(()=>{
    const editor= get();
    if(editor){
      setValue(markdown);
    }
  },[get,markdown,setValue]);

  return <Milkdown />;
};

export const MarkdownEditor= ({setValue,value}:Props) => {
  return (
    <MilkdownProvider>
      <CrepeEditor setValue={setValue} value={value}  />
    </MilkdownProvider>
  );
};