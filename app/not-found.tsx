"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";
import { useRouter } from "next/navigation";

export default function() {
    const router=useRouter();
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <div className="text-foreground font-black text-xl sm:text-3xl text-center">
        404 - Page Not Found
      </div>
      <div className="my-8">
        <img
          src="https://media.tenor.com/BJ-9w-MUVCMAAAAM/tis100-sad.gif"
          alt="Meme I Found on Internet"
          className="w-64 sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] max-w-full h-auto"
        />
      </div>
      <Button
          onClick={()=>{
            router.push("/dashboard")
          }}
            size="lg"
            className="group text-foreground bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Home
            <Home className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
          <div className="mt-6 text-accent">(If you were finding bugs, Good Luck!)</div>
    </div>
  );
}
