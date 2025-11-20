'use client';

import { Logout } from "@/actions/user-actions";
import Link from "next/link";

export default function Navbar(){

    function logout(){
        Logout();
    }

    return(
        <div className="flex flex-nowrap lg:gap-15 justify-start p-5 border-b-5 border-double shadow-2xl rounded-3xl">
            <button className="logoutButton" onClick={() => (logout())}>Logout</button>
            <Link href="/home" className="navButton">Home</Link>
            <Link href="/posts" className="navButton">Posts</Link>
        </div>
    )
}