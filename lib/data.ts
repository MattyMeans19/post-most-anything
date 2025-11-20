import pool from "./db";
import { Post } from "@/lib/definitions";
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";

export async function GetAllPosts(){
    try{
        const postsRequest = await pool.query('SELECT * FROM posts');
        let postsResponse =  postsRequest.rows;
        
        return postsResponse as Post[];

    } catch (error) {
        console.error("Error fetching posts: ", error);
        let message = error;
        return message as string;
    }
}

export async function GetPost(postSlug: number){
    try{
        const postRequest = await pool.query('SELECT * FROM posts WHERE postid = $1', [postSlug]);
        let postResponse = postRequest.rows;
        return postResponse[0] as Post;
    } catch (error) {
        console.error("Error fetching post: ", error);
        let message = error;
        return message as string;
    }
}

export async function GetUserPosts(userName: string){
    try{
        const postRequest = await pool.query('SELECT * FROM posts WHERE creator = $1', [userName]);
        let postResponse = postRequest.rows;
        return postResponse as Post[];
    } catch (error) {
        console.error("Error fetching post: ", error);
        let message = error;
        return message as string;
    }
}

export async function GetCurrentUser(){
        const cookie = (await cookies()).get('session')?.value;
        let sessionInfo = await decrypt(cookie);
        let currentUser = sessionInfo?.username;

        return currentUser as string | undefined;
}

export async function GetSearch(searchSlug: string){
    const searchParams = searchSlug.split("_");
    let input = '%' + searchParams[0] + '%';
    console.log(searchParams[1], searchParams[2], input);
    const searchQuery = await pool.query('SELECT * FROM posts WHERE $1 LIKE $2 ORDER BY $3', [searchParams[2], input , searchParams[1]]);
    console.log(searchQuery.rows);
}