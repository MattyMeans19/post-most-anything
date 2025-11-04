
export default function Sidebar(){
    return(
        <div className="h-[64vh] mx-5 border-5 border-double flex flex-col gap-15 items-center p-5">
            <input type="text" id="search" placeholder="Search for Posts" autoComplete="off" className="border bg-white w-full p-2 rounded-3xl"></input>
        </div>
    )
}