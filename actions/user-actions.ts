import { redirect } from "next/navigation";
import pool from "@/lib/db";

export async function Login(formData: FormData){
    let userName = formData.get("username") as string;
    let password = formData.get('password') as string;

    try{
        const loginRequest = await pool.query("SELECT username, password FROM users WHERE username = $1", [userName])
        const loginResponse = loginRequest.rows[0];

        if (password === loginResponse.password){
            redirect("/home");
        } else {
            return {message: "Invalid password"}
        }
    } catch (error){

    }

}