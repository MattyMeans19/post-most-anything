import {post} from "@/dummyData/posts";
import Link from "next/link";

interface PostProps {
    creator: string
}

export default function Post(props: PostProps){
    const currentCreator = props.creator;
    let posts;

    if(currentCreator != ""){
        posts = post.filter(post => post.creator === props.creator);
    } else{
        posts = post;
    }

    return(
        <div className="max-h-[98vh] flex flex-col gap-5 justify-around p-5">
            {posts.map((post) => (
                <Link href={`/posts/${post.postId}`} key={post.postId} className="postView grow">
                    <h1 className="text-center">{post.title}</h1>
                    <img src={post.img.src} alt="post image" className="place-self-center"/>
                    <p>{post.content}</p>
                    <h2>Created by: {post.creator}</h2>
                    <h2>Posted on: {post.postDate.toLocaleDateString()}</h2>
                </Link>
                
            ))}
        </div>
    )
}