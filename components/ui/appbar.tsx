"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Plus, FileText, LogOut, User, Menu, X} from "lucide-react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { AnonymousDrawer } from "./anonymousDrawer";

export default function Appbar() {
  const session= useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <nav className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-bold hover:cursor-pointer"
            >
              <span className="text-white">Shadow</span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Post
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {(session.status!=="authenticated") ? (
              <>
              <AnonymousDrawer/>
                <Button
                  onClick={() => router.push("/#how-it-works")}
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50"
                >
                  How It Works
                </Button>
                <Button
                  onClick={
                    ()=>router.push("/signin")
                  }
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
                >
                  Sign Up
                </Button>
              </>
            ) : (
              <>
                <AnonymousDrawer/>
                <Button
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50"
                  onClick={()=>router.push("/newpost")}
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Add Post
                </Button>
                <Button
                  onClick={()=>router.push("/myposts")}
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-gray-800/50"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  My Posts
                </Button>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-gray-300 hover:text-white hover:bg-gray-800/50"
                    >
                      <User className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-56 bg-gray-900 border-gray-800">
                    <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-gray-800">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-gray-800" />
                    <DropdownMenuItem
                      onClick={()=>signOut()}
                      className="text-red-400 hover:text-red-300 hover:bg-gray-800"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-1 ">
            <AnonymousDrawer/>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white hover:bg-gray-800/50"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gray-900/50 rounded-lg mt-2 border border-gray-800/50">
              {(session.status!=="authenticated") ? (
                <>
                  <Button
                    onClick={() => router.push("/#how-it-works")}
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50"
                  >
                    How It Works
                  </Button>
                  <Button
                    onClick={()=>router.push("/signin")}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white"
                  >
                    Sign Up
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50"
                    onClick={()=>{router.push("/newpost");
                      setIsMobileMenuOpen(s=>!s);
                    }}
                  >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Post
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50"
                    onClick={()=>{
                      router.push("/myposts");
                      setIsMobileMenuOpen(s=>!s);
                    }}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    My Posts
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800/50"
                  >
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </Button>
                  <div className="border-t border-gray-800 pt-2">
                    <Button
                      onClick={()=>signOut()}
                      variant="ghost"
                      className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-gray-800/50"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Log Out
                    </Button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
