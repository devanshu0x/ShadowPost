"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
  const router=useRouter();
  const [name,setName]=useState<string>("");
  const [email,setEmail]=useState<string>("");
  const [password,setPassword]=useState<string>("");
  const [error, setError]=useState<string>("");
  return (
    <div className="h-screen flex justify-center items-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-center text-md">Register</CardTitle>
          <CardDescription className="text-center">
            Enter your credentials to register
            <div className="text-red-400">
              {error}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 ">
            <div>
              <Label className="text-sm mb-1">Name</Label>
              <Input placeholder="alice" value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
              <Label className="text-sm mb-1" >Email Address</Label>
              <Input placeholder="alice@gmail.com" value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
              <Label className="text-sm mb-1">Password</Label>
              <Input placeholder="123456" value={password} onChange={(e)=>setPassword(e.target.value)} />
            </div>
            <div className="flex gap-2 py-2">
              <Button onClick={async ()=>{const res=await signIn("credentials",{
                name,
                email,
                password,
                redirect:false,
              })
              if(res?.ok){
                router.push("/dashboard")
              }
              else{
                console.log(res);
                setError("Signup failed! Try again")
              }

              }}>Signup</Button>
              <Button variant="outline" onClick={()=>router.push("/signin")} >Signin</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
