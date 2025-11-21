'use server';

import { redirect } from "next/navigation";
import pool from "@/lib/db";
import { FormState, UserBasicInfo } from "@/lib/definitions";
import { isRedirectError } from "next/dist/client/components/redirect-error";
import { createSession, deleteSession } from "@/lib/session";
import { cookies } from "next/headers";
import {decrypt} from "@/lib/session";
import bcrypt from "bcrypt";

export async function Login(formState: FormState, formData: FormData){
    let userName = formData.get("username") as string;
    let password = formData.get('password') as string;

    try{
        const loginRequest = await pool.query('SELECT password FROM users WHERE username = $1', [userName]);
        let loginResponse = loginRequest.rows;

        const passwordCheck = await bcrypt.compare(password, loginResponse[0].password)
        
        if(passwordCheck){
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

export async function CreateUser(formState: FormState, formData: FormData){
    let fname = formData.get("fName") as string;
    let lname = formData.get("lName") as string;
    let username = formData.get("username") as string;
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let dob = formData.get("dob");
    
    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let validatePassword = specialCharacters.test(password);

    if(!email?.includes("@") || validatePassword === false){
        return {message : "Make sure email is valid and password contains at least one special character!"}
    }

    const saltRounds = 12;
    let hashedPW = await bcrypt.hash(password, saltRounds);

    try{
        const checkUser = await pool.query('SELECT * FROM users WHERE username = $1', [username]);
        let checkResponse = checkUser.rows;

        if(checkResponse.length > 0){
            return {message: "User Already Exists!"}
        }else{
           await pool.query('INSERT INTO users (fname, lname, username, password, dob, email) VALUES ($1, $2, $3, $4, $5, $6)', [fname, lname, username, hashedPW, dob, email]);
           await createSession(username);
            redirect("/home");
        }
    } catch(error){
       if (isRedirectError(error)) {
            throw error; // Re-throw the redirect error for Next.js to handle
        } 
    }
    return {message: "Something went wrong, please try again!"};
}

export async function ChangePassword(password: string){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;

    const specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    let validatePassword = specialCharacters.test(password);
    
    const saltRounds = 12;
    let hashedPW = await bcrypt.hash(password, saltRounds);
    console.log(hashedPW);

    if(validatePassword){
        try{
            await pool.query('UPDATE users SET password = $1 WHERE username = $2', [hashedPW, currentUser]);
            return {message: "Password updated!"}
        } catch(error){
            return {message: "Couldn't update password!"}
        }
    } else {
        return {message: "Password must contain at least one number and one special character!"};
    }
}

export async function DeleteAccount(){
    const cookie = (await cookies()).get('session')?.value;
    let sessionInfo = await decrypt(cookie);
    let currentUser = sessionInfo?.username;

    try{
        await pool.query('DELETE FROM users WHERE username = $1', [currentUser]);
        await deleteSession();
        redirect("/")
    } catch(error){
       if (isRedirectError(error)) {
            throw error; // Re-throw the redirect error for Next.js to handle
        } 
    }
    return {message: "Something went wrong, please try again!"};
}