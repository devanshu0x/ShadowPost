"use server";

import { prisma } from "../prisma";

export async function createComment(threadId:string,comment:string,username:string){
    try{
        await prisma.comment.create({
        data:{
            content:comment,
            publishDate:new Date(),
            threadId:threadId,
            username:username
        }
    })
    }
    catch(e){
        console.log("something went wrong",e);
    }
}