"use client";

import { format } from "date-fns";
import { useRouter } from "next/navigation";
import { Calendar, Edit, Eye } from "lucide-react";

interface PostcardProps {
  title: string;
  threadId: string;
  publishDate: Date;
  fromDashboard: boolean;
}

export function Postcard({ title, threadId, publishDate, fromDashboard }: PostcardProps) {
  const formattedDate = format(publishDate, "E, do MMM yyyy");
  const router = useRouter();
  
  const handleClick = () => {
    const path = fromDashboard ? `/thread/${threadId}` : `/edit/${threadId}`;
    router.push(path);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleClick();
    }
  };

  return (
    <div 
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      className="group relative rounded-lg border bg-card/50 p-6 mb-4 shadow-sm transition-all duration-300 hover:shadow-md hover:bg-card/80 hover:border-border/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer"
    >
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        {fromDashboard ? (
          <Eye className="h-4 w-4 text-muted-foreground" />
        ) : (
          <Edit className="h-4 w-4 text-muted-foreground" />
        )}
      </div>

   
      <h2 className="text-lg font-semibold text-foreground mb-3 pr-8 line-clamp-2 leading-tight">
        {title}
      </h2>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Calendar className="h-4 w-4" />
        <span>
          Published on{" "}
          <span className="text-foreground font-medium">
            {formattedDate}
          </span>
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
  );
}