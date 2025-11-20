import { GetPost } from "@/lib/data";
import { notFound } from "next/navigation";
import "./post.css"
import { Suspense } from "react";
import Loading from "@/components/loading";



export default async function PostDetails({params}: {params: {postSlug: number}}){
    const {postSlug} = await params;

    const currentPost = await GetPost(postSlug);

    if(currentPost === undefined){
        notFound();
    } else if(typeof currentPost != "string"){
        return(
            <Suspense fallback={<Loading />}>
                <div className="post backdrop">
                    <h1>{currentPost.title}</h1>
                    <h2>By: {currentPost.creator}</h2>
                    <h3>Posted on {currentPost.postdate.toLocaleDateString()}</h3>
                    <p>{currentPost.post}</p>
                </div> 
            </Suspense>
            
        )  
    }
    
}