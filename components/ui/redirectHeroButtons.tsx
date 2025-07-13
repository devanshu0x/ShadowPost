"use client"

import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { useRouter } from "next/navigation";


export function RedirectHeroButton(){
    const router= useRouter();
    return <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
          onClick={()=>{
            router.push("/dashboard")
          }}
            size="lg"
            className="group text-foreground bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 transition-all duration-300"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            onClick={()=>{
                router.push("/#how-it-works");
            }}
            variant="outline"
            size="lg"
            className="border-gray-600 text-gray-300 hover:border-gray-500 hover:text-white hover:bg-gray-800/50"
          >
            See How It Works
          </Button>
        </div>
}