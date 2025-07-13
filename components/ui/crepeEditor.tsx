"use client";
import { uploadImage } from "@/lib/actions/uploadImage";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { useEffect, useState } from "react";

interface Props{
  setValue:(value:string)=>void
}

const CrepeEditor= ({setValue}:Props) => {
  const [markdown, setMarkdown]=useState("");
  const { get } = useEditor((root) => {
    const crepe= new Crepe({ root,
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

export const MilkdownEditorWrapper= ({setValue}:Props) => {
  return (
    <MilkdownProvider>
      <CrepeEditor setValue={setValue}  />
    </MilkdownProvider>
  );
};