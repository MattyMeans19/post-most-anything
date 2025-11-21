'use client';

import { ChangePassword, DeleteAccount } from "@/actions/user-actions";
import { useState } from "react";


export default function AccountSettings(){

    const [deleteMessage, showDeleteMessage] = useState(false)

    async function changePassword(){
        let newPassword = document.getElementById("password") as HTMLInputElement;
        let result = await ChangePassword(newPassword.value);
        alert(result.message);
        newPassword.value = "";
    }

    async function Delete(){
        const deleteRequest = await DeleteAccount()
        alert(deleteRequest.message);
    }

    function showMessage(){
        showDeleteMessage(!deleteMessage);
    }

    return(
        <div className="flex flex-col gap-10 bg-white rounded-4xl border-3 place-items-center p-15">
            <h2 className="text-3xl underline mb-5">Account Settings</h2>
            <div className="flex flex-nowrap md:gap-5 place-items-center">
                <label htmlFor="password">Change Password: </label>
                <input type="text" id="password" name="password" placeholder="New Password" autoComplete="off" className="p-1 border rounded-full text-center required"></input>
                <button className="w-20 submitButton" onClick={() => (changePassword())}>Save</button>    
            </div>
            <button className="submitButton p-2" onClick={() => (showMessage())}>Delete Account</button>

            {deleteMessage ? 
            <div className="absolute top-0 left-0 border-5 h-full w-full bg-white flex flex-col justify-around text-center p-15">
                <p className="text-7xl">Are you sure you want to delete your account? there is no way to undo this. All user info and posts will be deleted permanently!</p>
                <button className="text-4xl border-2 rounded-full w-50 bg-green-600 place-self-center" onClick={() => (Delete())}>Yes</button>
                <button className="text-4xl border-2 rounded-full w-50 bg-red-600 place-self-center" onClick={() => (showMessage())}>No</button>
            </div> :
            null }
        </div>
    )
}