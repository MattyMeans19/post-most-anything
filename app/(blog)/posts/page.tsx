import type { Metadata } from "next";
import Display from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";
import { GetAllPosts } from "@/lib/data";
import "./posts.css";


export const metadata: Metadata = {
  title: "PMA- Posts",
  description: "The everything goes blog site!",
};


export default async function Posts(){
  

  let postsArray = await GetAllPosts()

    return(
      <div className="backdrop posts-page">
        <Sidebar />
        <div className="posts-array">
            <Display data={postsArray}/> 
        </div> 
      </div>
    )
}