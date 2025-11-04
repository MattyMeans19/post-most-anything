import type { Metadata } from "next";
import Display from "@/components/post-display";
import UserPanel from "@/components/user-panel";
import { GetUserPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "PMA- Home",
  description: "The everything goes blog site!",
};

export default async function BlogHome(){
    const userPosts = await GetUserPosts("MattyMeans");


    return(
        <div className="min-h-[84vh] flex flex-wrap justify-between backdrop py-10">
            <UserPanel/>
            <div className="h-[76vh] basis-1/2 border-5 border-double mx-5 pl-10 overflow-y-scroll">
                <h1 className="text-4xl text-center mt-20 underline">Your Posts</h1>
                <Display data={userPosts}/>
            </div>
        </div>
    )
}