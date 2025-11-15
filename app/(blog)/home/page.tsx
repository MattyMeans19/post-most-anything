import type { Metadata } from "next";
import Display from "@/components/post-display";
import UserPanel from "@/components/user-panel";
import { GetUserPosts } from "@/lib/data";
import "./home.css"

export const metadata: Metadata = {
  title: "PMA- Home",
  description: "The everything goes blog site!",
};

export default async function BlogHome(){
    const userPosts = await GetUserPosts("MattyMeans");


    return(
        <div className="home-container backdrop">
            <UserPanel/>
            <div className="prevPosts">
                <h1>Your Posts</h1>
                <Display data={userPosts}/>
            </div>
        </div>
    )
}