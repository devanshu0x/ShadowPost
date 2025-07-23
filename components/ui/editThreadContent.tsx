import { EditThread } from "@/components/ui/editThread";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

interface Props {
  threadId: string;
}

export default async function EditThreadContent({ threadId }: Props) {
  const threadData = await prisma.thread.findUnique({
    where: {
      id: threadId,
    },
    select: {
      id: true,
      body: true,
      title: true,
    },
  });

  if (!threadData) {
    notFound();
  }

  return (
      <EditThread threadData={threadData} />
  );
}
