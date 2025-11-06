import pool from "./db";
import { Post } from "@/lib/definitions";

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