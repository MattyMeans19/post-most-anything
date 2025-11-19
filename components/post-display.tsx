import Link from "next/link";
import { Post } from "@/lib/definitions";
import Loading from "@/components/loading";
import { Suspense } from "react";
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import DeleteButton from "./post-delete";


interface PostData {
    data: Post[] | string,
}

export default async function Display(array: PostData){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;

    const posts: Post[] | string = array.data;


    if(typeof posts === "string"){
        return <p>{posts}</p>
    }else {
         return(
        <div className="max-h-[98vh] flex flex-col gap-5 justify-around p-5">
            {posts.map((post) => (
                <Suspense fallback={<Loading />} key={post.postid}>
                    <Link href={`/posts/${post.postid}`} className="postView grow">
                        <h1 className="text-center text-2xl lg:text-4xl">{post.title}</h1>
                        <h2 className="text-center lg:text-2xl">Created by: {post.creator}</h2>
                        <p className="lg:text-3xl">{post.post}</p>
                        <h2 className="place-self-end">Posted on: {post.postdate.toLocaleDateString()}</h2>
                    </Link> 
                    {post.creator === currentUser ? <DeleteButton /> : null}                  
                </Suspense>

                
            ))}
        </div>
    )
    }

   
}