import Link from "next/link";

export default function Navbar(){
    return(
        <div className="flex flex-nowrap gap-15 justify-start p-5 border-b-5 border-double shadow-2xl rounded-3xl w-screen">
            <button className="logoutButton">Logout</button>
            <Link href="/home" className="navButton">Home</Link>
            <Link href="/posts" className="navButton">Posts</Link>
        </div>
    )
}