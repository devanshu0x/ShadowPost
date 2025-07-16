"use server";

import {v2 as cloudinary} from "cloudinary"

cloudinary.config({
    cloud_name:process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET
})

interface CloudinaryUploadResult{
    public_id:string;
    [key:string]:any;
}

export async function uploadImage(formData:FormData){
    const fallbackUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDdwmJg_lL2KTkC5bkdmNlsbWV43DWfQM6Iw&s";
    try{
        const file= formData.get("file") as File | null;
        if(!file){
            console.log("file not present");
            return fallbackUrl;
        }

        const bytes= await file.arrayBuffer();
        const buffer= Buffer.from(bytes);

        const result = await new Promise<CloudinaryUploadResult>((resolve,reject)=>{
            const uploadStream=cloudinary.uploader.upload_stream({
                folder:"shadow-post"

            },(error,result)=>{
                if(error){
                    reject(error)
                }
                else resolve(result as CloudinaryUploadResult)
            })
            uploadStream.end(buffer);
        })

        const imageUrl=cloudinary.url(result.public_id,{secure:true});
        return imageUrl;

    }catch(e){
        console.log(e);
        return fallbackUrl;
    }
} 