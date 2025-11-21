import { GetSearch } from "@/lib/data";
import Display from "@/components/post-display";
import Sidebar from "@/components/filter-sidebar";
import { Post } from "@/lib/definitions";
import "./posts.css";


export default async function Search({params}: {params: {searchSlug: string}}){
    const {searchSlug} = await params;

    const searchResults: Post[] | string = await GetSearch(searchSlug);

        return(
          <div className="backdrop posts-page">
            <Sidebar />
            {typeof searchResults === "string" ? searchResults : 
            <div className="posts-array">
                <Display data={searchResults}/> 
            </div>
            }
          </div>
        )
}