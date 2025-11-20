'use client';
import { DeletePost } from "@/actions/post-actions";

interface PostID {postId: number}

export default function DeleteButton(id: PostID){

    function Deleted(post: number){
        alert("Post Deleted!");
        DeletePost(post)
    }
    
    return(
        <button className="submitButton p-2 text-2xl w-30" onClick={() => (Deleted(id.postId))}>Delete</button>
    )
}