"use client";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";

const CrepeEditor = ({value}:{value:string}) => {
    useEditor((root) => {
    const crepe = new Crepe({ root,
        defaultValue:value
     });
    return crepe.setReadonly(true);
  });
  return <Milkdown />;
};

export const MarkdownPreview= ({value}:{value:string}) => {
  return (
    <MilkdownProvider>
      <CrepeEditor value={value}  />
    </MilkdownProvider>
  );
};
