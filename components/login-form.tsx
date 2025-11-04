'use client';

import Login from "@/app/login/page";

export default function LoginForm(){

    
    return(
        <div className="h-[90vh] backdrop content-center">
            <form className="flex flex-col place-items-center gap-25 mx-30 p-15 border-5 border-purple-600 rounded-2xl bg-white">
                <input type="text" id="username" name="username" placeholder="UserName" autoComplete="off" className="border-2 p-1 rounded-2xl w-[50%] text-3xl"></input>
                <input type="text" id="password" name="password" placeholder="Password" autoComplete="off" className="border-2 p-1 rounded-2xl w-[50%] text-3xl"></input>
                <button type="submit" className="submitButton w-[30%] text-3xl">Login</button>
            </form>
        </div>
    )
}