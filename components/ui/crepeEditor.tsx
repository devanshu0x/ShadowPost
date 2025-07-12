"use client";
import { uploadImage } from "@/lib/actions/uploadImage";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";

const CrepeEditor= () => {
  const { get } = useEditor((root) => {
    return new Crepe({ root,
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
  });

  return <Milkdown />;
};

export const MilkdownEditorWrapper= ({setValue}) => {
  return (
    <MilkdownProvider>
      <CrepeEditor  />
    </MilkdownProvider>
  );
};