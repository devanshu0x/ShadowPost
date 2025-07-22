"use client";
import { uploadImage } from "@/lib/actions/uploadImage";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";
import { useEffect, useState } from "react";

interface Props {
  setValue: (value: string) => void;
  value: string;
  clear?: boolean;
}

const CrepeEditor = ({ setValue, value}: Props) => {
  const [markdown, setMarkdown] = useState("");
  const { get} = useEditor((root) => {
    const crepe = new Crepe({
      root,
      defaultValue: value,
      featureConfigs: {
        "image-block": {
          onUpload: (file) => {
            const formData = new FormData();
            formData.append(`file`, file);
            return uploadImage(formData);
          },
        },
        placeholder: {
          text: "Start writing here...",
          mode: "block",
        },
      },
    });
    crepe.on((listener) => {
      listener.markdownUpdated((_, md) => {
        setMarkdown(md);
      });
    });

    return crepe;
  });

  useEffect(() => {
    const editor = get();
    if (editor) {
      setValue(markdown);
    }
  }, [get, markdown, setValue]);
  
  return <Milkdown />;
};

export const MarkdownEditor = ({ setValue, value, clear }: Props) => {
  const [editorKey,setEditorKey]=useState(0);
  useEffect(()=>{
    if(clear){
      setEditorKey(v=>v+1);
    }
  },[clear]);

  return (
    <MilkdownProvider>
      <CrepeEditor key={editorKey} setValue={setValue} value={value} clear={clear} />
    </MilkdownProvider>
  );
};
