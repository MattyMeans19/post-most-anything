import Post from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";


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