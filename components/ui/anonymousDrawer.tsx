"use client"
import { WandSparkles } from "lucide-react";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle, DrawerTrigger } from "./drawer";
import Cookie from "js-cookie"
import { Button } from "./button";
import { anonymous } from "@/lib/actions/anonymous";

export function AnonymousDrawer(){
    const name= Cookie.get("anonymous_name");
    console.log(name);
    return(<Drawer>
        <DrawerTrigger>
            <WandSparkles/>
        </DrawerTrigger>
        <DrawerContent>
            <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
                <DrawerTitle>Anonymize me!</DrawerTitle>
                <DrawerDescription>Get a new identity instantly</DrawerDescription>
            </DrawerHeader>
            <div className="p-4  flex flex-col justify-center items-center">
                <img  src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?radius=50&seed=${name}`}
                className="w-32 sm:w-48 md:w-64"/>
                <div className="sm:text-lg font-semibold mt-2 mb-4">{name}</div>
                <Button onClick={async ()=>await anonymous() }>Anonymize me!</Button>
            </div>
            </div>
        </DrawerContent>
    </Drawer>)
}