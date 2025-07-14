import { generateRandomName } from "@/lib/generateName";
import { NextResponse } from "next/server";


export async function GET(){
    const name=generateRandomName();
    const res=NextResponse.json({name});
    res.cookies.set({
        name:"anonymous_name",
        value:name,
        httpOnly:false,
        maxAge:60*60*12, // for now setting them to expire in 12 hours
        path:"/"
    })

    return res;
}