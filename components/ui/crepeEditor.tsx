"use client";
import { Crepe } from "@milkdown/crepe";
import { Milkdown, MilkdownProvider, useEditor } from "@milkdown/react";

const CrepeEditor: React.FC = () => {
  const { get } = useEditor((root) => {
    return new Crepe({ root });
  });

  return <Milkdown />;
};

export const MilkdownEditorWrapper: React.FC = () => {
  return (
    <MilkdownProvider>
      <CrepeEditor />
    </MilkdownProvider>
  );
};