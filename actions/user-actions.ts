'use server';

import { redirect } from "next/navigation";
import pool from "@/lib/db";
import { FormState, UserBasicInfo } from "@/lib/definitions";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { createSession, deleteSession } from "@/lib/session";
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";

export async function Login(formState: FormState, formData: FormData){
    let userName = formData.get("username") as string;
    let password = formData.get('password') as string;

    try{
        const loginRequest = await pool.query('SELECT password FROM users WHERE username = $1', [userName])
        let loginResponse = loginRequest.rows;
        
        if(password === loginResponse[0].password){
            await createSession(userName);
            redirect("/home");
        } else {
            return {message: 'Invalid Login, try again!'};

        }
    } catch (error){
        if (isRedirectError(error)) {
            throw error; // Re-throw the redirect error for Next.js to handle
        }
        return {message: "There was an error validating login, please try again!"};
    }
    
}

export async function Logout(){
    await deleteSession();
    redirect("/login")
}

export async function getUser(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;
    
    try{
        const userRequest = await pool.query('SELECT username, fname, lname FROM users WHERE username = $1', [currentUser]);
        const userResponse = userRequest.rows[0];
        
        return userResponse as UserBasicInfo;
        
    } catch (error){
        console.error("Error fetching user data: ", error);
        let message = error;
        return message as string;
    }
}