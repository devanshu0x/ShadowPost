"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "../prisma";

export async function updateThread(
  title: string,
  body: string,
  isPublic: boolean,
  threadId: string
) {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;
  if (!userId) {
    return {
      success: false,
      message: "Not authenticated user",
    };
  }
  try {
    const thread = await prisma.thread.findUnique({
      where: {
        id: threadId,
      },
    });

    if (!thread || thread.userId !== userId) {
      return {
        success: false,
        message: "thread not found or you dont have permission to edit this",
      };
    }

    const dataToUpdate: any = {
      isPublic,
      editCount: { increment: 1 },
    };

    if (title.trim() !== "") {
      dataToUpdate.title = title;
    }

    if (body.trim() !== "") {
      dataToUpdate.body = body;
    }

    await prisma.thread.update({
      where: {
        id: threadId,
      },
      data: dataToUpdate,
    });

    return {
      success: true,
    };
  } catch (e) {
    return {
      success: false,
      message: "Unable to create thread",
    };
  }
}
