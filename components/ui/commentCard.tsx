import { format } from "date-fns";
import { UserBadge } from "./userBadge";
import { MarkdownPreview } from "./crepeEditorPreview";

interface Props{
    content:string;
    publishDate: Date;
    username:string;
}

export function CommentCard({content,publishDate, username}:Props){
    const date = format(publishDate,"E, do MMM yyyy");
    return(<div className="mb-2">
        <div className="flex justify-between items-center">
            <UserBadge name={username}/>
            <span className="text-sm text-foreground/80">{date}</span>
        </div>
        <MarkdownPreview value={content}/>
    </div>)
}