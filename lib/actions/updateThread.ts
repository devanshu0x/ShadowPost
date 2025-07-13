"use server";

import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import { prisma } from "../prisma";

export async function updateThread(title:string, body:string,threadId:string,) {
    const session=await getServerSession(authOptions);
    const userId= session?.user?.id as string;
    if(!userId){
        return {
            success:false,
            message:"Not authenticated user"
        }
    }
    try{
    
        const thread= await prisma.thread.findUnique({
            where:{
                id:threadId
            }
        });

        if(!thread || thread.userId!==userId){
            return{
                success:false,
                message:"thread not found or you dont have privilege to edit this"
            };
        }

        await prisma.thread.update({
            where:{
                id:threadId
            },
            data:{
                title:title,
                body:body,
                editCount:{increment:1}
            }
        })

        return {
            success:true
        };
    
        }catch(e){
            return{
                success:false,
                message:"Unable to create thread"
            }
        }
}