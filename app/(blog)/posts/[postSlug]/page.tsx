import { GetPost } from "@/lib/data";
import { notFound } from "next/navigation";



export default async function PostDetails({params}: {params: {postSlug: number}}){
    const {postSlug} = await params;

    const currentPost = await GetPost(postSlug);

    if(currentPost === undefined){
        notFound();
    } else if(typeof currentPost != "string"){
        return(
            <div>
                <h1>{currentPost.title}</h1>
                <h2>By: {currentPost.creator}</h2>
                <p>{currentPost.postdate.toLocaleDateString()}</p>
                <p>{currentPost.post}</p>
                <h3>Upvotes: {currentPost.upvotes}</h3>
                <h3>Replies: {currentPost.replies}</h3>
            </div>
        )  
    }
    
}