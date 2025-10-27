import Post from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";


export default function Posts(){
    return(
        <div className="grow backdrop p-5 flex flex-nowrap">
          <Sidebar />
          <Post creator=""/> 
        </div>
        
    )
}