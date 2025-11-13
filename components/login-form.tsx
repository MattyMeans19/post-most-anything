'use client';
import {Login} from "@/actions/user-actions";
import { useActionState } from "react";

export default function LoginForm(){

    const [formState, formAction] = useActionState(Login, undefined)
    
    return(
        <div className="h-[90vh] backdrop content-center">
            <form action={formAction} className="flex flex-col place-items-center gap-25 lg:mx-30 py-10 lg:p-15 border-5 border-purple-600 rounded-2xl bg-white">
                <input type="text" id="username" name="username" placeholder="UserName" autoComplete="off" className="border-2 p-1 rounded-2xl w-[50%] text-3xl"></input>
                <input type="password" id="password" name="password" placeholder="Password" autoComplete="off" className="border-2 p-1 rounded-2xl w-[50%] text-3xl"></input>
                {formState?.message && <p>{formState.message}</p>}
                <button type="submit" className="submitButton text-3xl px-5">Login</button>
            </form>
        </div>
    )
}