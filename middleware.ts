import { generateRandomName } from "@/lib/generateName";
import { NextRequest, NextResponse } from "next/server";


export function middleware(request:NextRequest){
    const response= NextResponse.next();

    const anonymous= request.cookies.get("anonymous_name");
    if(!anonymous){
        const name=generateRandomName();
        response.cookies.set({
        name:"anonymous_name",
        value:name,
        httpOnly:false,
        maxAge:60*60*12, // for now setting them to expire in 12 hours
        path:"/"
    })
}

return response;
   
}

