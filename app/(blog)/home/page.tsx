import type { Metadata } from "next";
import Post from "@/components/post-display";
import UserPanel from "@/components/user-panel";

export const metadata: Metadata = {
  title: "PMA- Home",
  description: "The everything goes blog site!",
};

export default function BlogHome(){
    const username: string = "dorg";
    return(
        <div className="min-h-[84vh] flex flex-wrap justify-between backdrop py-10">
            <UserPanel creator={username}/>
            <div className="h-[50vh] basis-1/2 border-5 border-double mx-5 pl-10 overflow-y-scroll">
                <h1 className="text-4xl text-center mt-20 underline">Your Posts</h1>
                <Post creator={username}/>
            </div>
            <div className="grow basis-full w-full place-items-center border-2 p-5 mx-10 bg-white">
                <h1 className="text-5xl underline">Posts you may like</h1>
            </div>
        </div>
    )
}