import type { Metadata } from "next";
import Display from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";
import { GetAllPosts } from "@/lib/data";

export const metadata: Metadata = {
  title: "PMA- Posts",
  description: "The everything goes blog site!",
};


export default async function Posts(){
  

  let postsArray = await GetAllPosts()

    return(
      <div className="backdrop h-[84vh] flex flex-wrap p-5 overflow-clip">
        <Sidebar />
        <div className="basis-4/5 max-h-[82vh] overflow-y-scroll">
          <Display data={postsArray}/>
        </div>
        
      </div>
    )
}