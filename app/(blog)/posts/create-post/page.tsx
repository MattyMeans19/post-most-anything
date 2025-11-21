'use client';

import { CreatePost } from "@/actions/post-actions";
import { useState, useActionState } from "react";


export default function NewPost(){
    const [titleCount, updateTitleCount] = useState(0);
    const [title, updateTitle] = useState("");
    const [contentCount, updateContentCount] = useState(0);
    const [content, updateContent] = useState("")

    const [formState, formAction] = useActionState(CreatePost, undefined);

    function titleChange(){
        let newCount = document.getElementById("title") as HTMLInputElement;
        updateTitleCount(newCount.value.length);
        updateTitle(newCount.value);
    }
    function contentChange(){
        let newCount = document.getElementById("content") as HTMLInputElement;
        updateContentCount(newCount.value.length);
        updateContent(newCount.value);
    }

    return(
        <div className="h-screen post backdrop">
            <form className="flex flex-col p-2 gap-5 h-screen w-full" action={formAction}>
                <input className="border-b bg-white/25 w-full text-7xl text-center rounded-2xl" 
                maxLength={30} id="title" name="title" placeholder="Title" value={title}
                onChange={() => (titleChange())} required></input>
                <span className="text-end">{titleCount}/30</span>
                <textarea className="border grow p-5 bg-white/65 rounded-2xl text-3xl" 
                maxLength={1000} id="content" name="content" placeholder="Content..." value={content}
                onChange={() => (contentChange())} required></textarea>
                <span className="text-end">{contentCount}/1000</span>
                {formState?.message && <h4 className="text-5xl text-red-500 text-center">{formState.message}</h4>}
                <button className="submitButton w-[50vw] place-self-center text-5xl">Post</button>
            </form>
        </div> 
    )
}