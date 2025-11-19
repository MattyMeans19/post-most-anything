import type { Metadata } from "next";
import Display from "@/components/post-display";
import UserPanel from "@/components/user-panel";
import { GetUserPosts } from "@/lib/data";
import "./home.css"
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";

export const metadata: Metadata = {
  title: "PMA- Home",
  description: "The everything goes blog site!",
};

export default async function BlogHome(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;
    const userPosts = await GetUserPosts(currentUser as string);


    return(
        <div className="home-container backdrop">
            <UserPanel/>
            <div className="postDisplay">
                <h1>Your Posts</h1>
                <div className="prevPosts">
                    <Display data={userPosts}/>  
                </div>  
            </div>
            
        </div>
    )
}