import Credentials from "next-auth/providers/credentials";
import { credentialSchema} from "@/lib/zod/zodTypes";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions={
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
                name:{label:"name", type:"text",placeholder:"dark"},
                email:{label:"email",type:"text",placeholder:"dark@gmail.com"},
                password:{label:"password", type:"password",placeholder:"********"}
            },
            async authorize(credentials){
                const {data,success}=credentialSchema.safeParse(credentials);
                if(!success){
                    return null;
                }
                const user= await prisma.user.findUnique({
                    where:{
                        email:data.email
                    }
                })
                if(user){
                    const isValid= await bcrypt.compare(data.password,user.password);
                    if(isValid){
                        return {
                            id:user.id,
                            name:user.name,
                            email:user.email
                        }
                    }
                    else{
                        return null;
                    }
                }
                
                try{
                    if(!data.name){
                        console.log("name not provided")
                        return null;
                    }
                    const hashedPassword= await bcrypt.hash(data.password,10);
                    const newUser= await prisma.user.create({
                        data:{
                            name:data.name,
                            email:data.email,
                            password:hashedPassword
                        }
                    })

                    return {
                        id:newUser.id,
                        name:newUser.name,
                        email:newUser.email
                    }
                } catch(e){
                    console.log(e);
                    return null;
                }

            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}){
            if(user){
                token.id=user.id,
                token.email=user.email
            }
            return token;
        },

        async session({token,session}){
            if(session.user){
                session.user.id=token.id;
                session.user.email=token.email;
            }
            return session;
        }
    }
}