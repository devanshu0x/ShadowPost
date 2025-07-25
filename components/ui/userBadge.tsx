"use client";

export function UserBadge({name}:{name:string}){
    return(
        <div className="flex items-center gap-3 py-2">
            <img className="w-7" src={`https://api.dicebear.com/9.x/adventurer-neutral/svg?radius=50&seed=${name}`}/>
            <div>{name}</div>
        </div>
    )
}