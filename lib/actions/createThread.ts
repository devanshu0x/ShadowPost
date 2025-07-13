"use server"

import { getServerSession } from "next-auth"
import { authOptions } from "../auth"
import { prisma } from "../prisma";

export async function createThread(title:string, body:string, isPublic:boolean){
    const session =await getServerSession(authOptions);
    const userId= session?.user?.id as string;
    if(!userId){
        return {
            success:false,
            message:"Not authenticated user"
        }
    }

    try{

        const thread= await prisma.thread.create({
            data:{
                title:title,
                body:body,
                userId:userId,
                isPublic:isPublic,
                publishDate: new Date()
            }
        });

        return {
            success:true,
            threadId:thread.id
        }

    }catch(e){
        return{
            success:false,
            message:"Unable to create thread"
        }
    }

}