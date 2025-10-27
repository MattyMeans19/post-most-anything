import Post from "@/components/post-display";


export default function BlogHome(){
    const username: string = "dorg";
    return(
        <div className="flex flex-wrap justify-between gap-15 backdrop py-10">
            <div className="basis-1/3 place-items-center place-content-center ml-25 bg-white border-3 rounded-3xl">
                <h1>{username}</h1>
                <p>FName LName</p>
            </div>
            <div className="basis-1/2 border-2 mx-5 pl-10">
                <h1 className="text-4xl text-center mt-20 underline">Your Posts</h1>
                <Post creator={username}/>
            </div>
            <div className="basis-full w-full place-items-center border-2 p-5 bg-white">
                <h1 className="text-5xl underline">Posts you may like</h1>
            </div>
        </div>
    )
}