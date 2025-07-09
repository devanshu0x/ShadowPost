import Credentials from "next-auth/providers/credentials";
import { credentialSchema} from "@/lib/zod/zodTypes";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export const authOptions={
    providers:[
        Credentials({
            name:"Credentials",
            credentials:{
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
                            email:user.email
                        }
                    }
                    else{
                        return null;
                    }
                }
                
                try{
                    const hashedPassword= await bcrypt.hash(data.password,10);
                    const newUser= await prisma.user.create({
                        data:{
                            email:data.email,
                            password:hashedPassword
                        }
                    })

                    return {
                        id:newUser.id,
                        email:newUser.email
                    }
                } catch(e){
                    console.log(e);
                    return null;
                }

            }
        })
    ],
    secret:process.env.NEXTAUTH_SECRET || "secret",
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