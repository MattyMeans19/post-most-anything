'use server';

import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import { FormState } from "@/lib/definitions";
import pool from "@/lib/db";
import { redirect } from "next/navigation";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { revalidatePath } from "next/cache";



export async function CreatePost(formState: FormState, formData: FormData){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;
    let date = new Date().toISOString().split('T')[0];
    let title = formData.get("title");
    let content = formData.get("content");

    try{
        await pool.query('INSERT INTO posts(title, post, creator, postdate, upvotes, replies) VALUES ($1, $2, $3, $4, 0, 0)', [title, content, currentUser, date]);
        redirect("/home");
    } catch(error){
        if (isRedirectError(error)) {
            throw error; // Re-throw the redirect error for Next.js to handle
        }
        console.log(error);
    }
    return {message: "Error creating post, please try again!"};
}

export async function DeletePost(postId: number){
    try{
        await pool.query('DELETE FROM posts WHERE postid = $1', [postId]);
        revalidatePath("/home");
        revalidatePath("/posts");
        window.location.reload();
    } catch (error){
        return {message: "Error Deleting Post!"};
    }
}