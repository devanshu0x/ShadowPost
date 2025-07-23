import React from "react";
import {
  MessageCircle,
  Users,
  Share2,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RedirectHeroButton } from "./redirectHeroButtons";

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <Badge
          variant="secondary"
          className="mb-8 bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm text-gray-300 hover:bg-gray-800/60"
        >
          <Zap className="w-4 h-4 text-yellow-400 mr-2 animate-pulse drop-shadow-[0_0_6px_rgba(250,204,21,0.8)]" />
          Anonymous commenting reimagined
        </Badge>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeIn">
          Share Your
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent block">
            Shadow Post
          </span>
        </h1>

        {/* sub-herading */}
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
          Create posts, share links, and let the world comment anonymously. No
          barriers, no sign-ups for commenters-just pure, unfiltered feedback.
        </p>

        <RedirectHeroButton/>
        
        {/* features*/}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="group p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-700/50 animate-fadeIn">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Create & Share
            </h3>
            <p className="text-gray-400">
              Sign up once, create posts, and share links instantly. Your
              content, your control.
            </p>
          </div>

          <div className="group p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-700/50 animate-fadeIn">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Anonymous Comments
            </h3>
            <p className="text-gray-400">
              No sign-ups for commenters. Pure, unfiltered feedback from your
              audience.
            </p>
          </div>

          <div className="group p-6 rounded-xl bg-gray-900/30 border border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-gray-900/50 hover:border-gray-700/50 animate-fadeIn">
            <div className="w-12 h-12 mx-auto bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
              <Share2 className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Simple Sharing
            </h3>
            <p className="text-gray-400">
              One link, endless possibilities. Share anywhere and watch the
              conversations flow.
            </p>
          </div>
        </div>

        {/* Some colorful circles */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
    </div>
  );
}
