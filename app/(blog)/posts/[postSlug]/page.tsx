import { post } from "@/dummyData/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";



export default async function PostDetails({params}: {params: {postSlug: number}}){
    const {postSlug} = await params;
    const posts = post.filter(post => post.postId == postSlug)

    let currentPost;

    if(posts.length === 0){
        notFound();
    } else{
        currentPost = posts[0];
    }

    return(
        <div>
            <h1>{currentPost.title}</h1>
            <Image src={currentPost.img} alt="Post Image"/>
            <p>{currentPost.content}</p>
        </div>
    )
}