"use server";

import { cookies } from "next/headers";
import { generateRandomName } from "../generateName";

export async function anonymous(){
    const name= generateRandomName();
    (await cookies()).set({
        name:"anonymous_name",
        value:name,
        httpOnly:false,
        maxAge:60*60*12,
        path:"/"
    });
}