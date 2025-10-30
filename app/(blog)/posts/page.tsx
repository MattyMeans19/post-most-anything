import type { Metadata } from "next";
import Post from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";

export const metadata: Metadata = {
  title: "PMA- Posts",
  description: "The everything goes blog site!",
};

export default function Posts(){
    return(
      <div className="backdrop h-[84vh] flex flex-wrap p-5 overflow-clip">
        <Sidebar />
        <div className="basis-4/5 max-h-[82vh] overflow-y-scroll">
          <Post creator=""/>
        </div>
        
      </div>
    )
}